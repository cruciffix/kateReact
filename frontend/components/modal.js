import React from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ styles, mediaStyles }) => {
	const [modalCont, setModalCont] = React.useState(null);
	const [mounted, setMounted] = React.useState(false);
	const [flag, setFlag] = React.useState(true);

	React.useEffect(() => {
		setMounted(true);
		setModalCont(document.querySelector('#modal_window')); // Устанавливаем контейнер после монтирования
		return () => setMounted(false);
	}, []);

	React.useEffect(() => {
		let consult = document.getElementById('consult');
		let modal = document.querySelector('.' + styles['modal']);
		let modalBg = document.querySelector('.' + styles['modal__bg']);
		if (modal !== null || modalBg !== null) {
			modalBg.hidden = true;

			// При клике по кнопке
			consult.addEventListener('click', event => {
				modalBg.hidden = false;

				event.preventDefault();

				// Выставили модальное окно посередине
				let test = window.innerWidth * 0.5 - modal.offsetWidth / 2;
				modalBg.style.paddingLeft = test + 'px';
				document.body.style.overflow = 'hidden';

				// Координаты modal
				let coords = modal.getBoundingClientRect();

				let close = document.createElement('div');

				if (window.innerWidth < 576) {
					close.style.height = 17 + 'px';
					close.style.width = 17 + 'px';
				} else if (window.innerWidth < 768) {
					close.style.height = 22 + 'px';
					close.style.width = 22 + 'px';
				} else if (window.innerWidth < 992) {
					close.style.height = 25 + 'px';
					close.style.width = 25 + 'px';
				} else {
					close.style.height = 30 + 'px';
					close.style.width = 30 + 'px';
				}

				close.style.background = '#4D4D4D';
				close.style.position = 'absolute';
				close.style.top = coords.top + 15 + 'px';
				close.style.right = coords.right + 15 + 'px';
				close.style.borderRadius = 9 + 'px';
				// close.style.right = 0;

				modal.append(close);

				close.addEventListener('click', event => {
					modalBg.hidden = true;
					document.body.style.overflow = '';
				});
			});
		}
	}, [mounted]);

	React.useEffect(() => {
		let modalInput = document.querySelector('.' + styles['input']);
		let sendA = document.querySelector('.' + styles['sendMessage']);
		let inputValue = '';
		modalInput.addEventListener('input', () => {
			inputValue = modalInput.value;
		});

		//  Привет!%20Я%20хочу%20купить%20печенье./
		let res = '';

		sendA.addEventListener('click', event => {
			// event.preventDefault();
			// console.log(inputValue);
			let arr = inputValue.trim().split(' ');
			arr.forEach((item, index) => {
				if (arr.length == 2) index == 0 ? (res = item) : (res += '%20' + item);
				else {
					if (index == 0) {
						res = item;
						return;
					} else if (index == arr.length - 1) {
						res += '%20' + item;
						return;
					}

					res += '%20' + item;
				}
				return;
			});
			sendA.href = 'https://wa.me/79083388325/?text=' + res;
		});
	}, [mounted]);

	if (!mounted || !modalCont) {
		return null; // Пока компонент не смонтирован или контейнер не найден, ничего не рендерим
	}

	const modal = (
		<div className={`${styles['modal__bg']}`}>
			<div className={`${styles['modal']} ${mediaStyles['modal']}`}>
				<div
					className={`${styles['modal__wrapper']} ${mediaStyles['modal__wrapper']}`}
				>
					<p>Пишите-пишите, не зря же Вы кликнули по кнопке </p>

					<div
						className={`${styles['modal__messenger']} ${mediaStyles['modal__messenger']}`}
					>
						<div
							className={`${styles['modal__messenger-logo']} ${mediaStyles['modal__messenger-logo']}`}
						>
							<img src='section6/wp/wp.png' alt='' />
							<div>WhatsApp</div>
						</div>

						<input
							type='text'
							className={styles['input']}
							placeholder='Напишите что-нибудь сюда...'
						/>
						<a href=''>Отправить</a>
					</div>
				</div>
			</div>
		</div>
	);

	return createPortal(modal, modalCont);
};
