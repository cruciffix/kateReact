import React from 'react';
import { Up } from '../icons/up';
import { Down } from '../icons/down';

export const Section4 = ({ section4, styles, mediaStyles }) => {
	React.useEffect(() => {
		// Обертка над оберткой, под которой будет все скрываться
		let contentWrapper = document.querySelector(
			'.' + styles['section_4__content-wrapper']
		);

		// Обертка, непосредственно сразу над элементами
		let contentAboveElement = document.querySelector(
			'.' + styles['section_4__content']
		);

		// Все элементы
		let elems = document.querySelectorAll(
			'.' + styles['section_4__content-container']
		);
		// 1 элемент
		let elem = elems[0];

		if (elem !== undefined) {
			// Кнопки вниз/вверх
			let up = document.querySelector('.' + styles['section_4__up']);
			let down = document.querySelector('.' + styles['section_4__down']);

			// Количество элементов, на которое мы будем передвигаться
			let count = 3;
			// Верхний отступ, заввисящий от размера экрана (мы его сами задаем)
			let marginTop = 30;

			if (window.innerWidth < 769) {
				count = 1;
				marginTop = 0;
			} else if (window.innerWidth < 1200) {
				count = 2;
				marginTop = 10;
			}
			// Количество px на которое мы будем смещать
			let px = 0;
			// Высота всех элементов
			// Высота всех элементов
			let elemsHeight = elems.length * (elem.offsetHeight + marginTop);

			// Высота одного элемента
			let elemHeight = elem.offsetHeight;

			// Высота, на которую мы будем смещать (учитывается количество элементов и их высота) =>
			// Смещение = (высота элемента + верхний отступ) * количество элементов
			let offsetHeight = (elemHeight + marginTop) * count;

			// Зададим высоту оболочке, РОВНО НА COUNT элементов
			contentWrapper.style.height = offsetHeight + 'px';

			function moveItems(flag) {
				flag ? (px -= offsetHeight) : (px += offsetHeight);

				contentAboveElement.style.marginTop = px + 'px';

				// Првоерка, выходит ли за края
				if (flag) {
					if (
						parseInt(contentAboveElement.style.marginTop) <
						-elemsHeight + offsetHeight
					) {
						contentAboveElement.style.marginTop =
							-elemsHeight + offsetHeight + 'px';

						px = -elemsHeight + offsetHeight;
					}
				} else {
					if (parseInt(contentAboveElement.style.marginTop) > 0) {
						contentAboveElement.style.marginTop = 0;
						px = 0;
					}
				}
			}

			document
				.querySelector('.' + styles['section_4__buttons'])
				.addEventListener('click', event => {
					// debugger;
					if (
						event.target.classList[0] !== styles['section_4__up'] &&
						event.target.classList[0] !== styles['section_4__down']
					)
						return;

					// Движение карусели
					event.target.classList[0] == styles['section_4__down']
						? moveItems(true)
						: moveItems(false);
				});
		}
	}, [section4]);
	return (
		<section className={`${styles['section_4']} ${mediaStyles['section_4']}`}>
			{/* carousel   */}
			<div
				className={`${styles['section_4__wrapper']} ${mediaStyles['section_4__wrapper']}`}
			>
				{/* gallery   */}
				<div
					className={`${styles['sections_headline']} ${mediaStyles['sections_headline']}`}
				>
					<h3>Об уроках</h3>
					<span>Прочтите, и Вы поймете, как будете учиться</span>
				</div>
				{/* sections_headline END  */}

				<div
					className={`${styles['section_4__buttons']} ${mediaStyles['section_4__buttons']}`}
				>
					<Up styles={styles} />
					{/* OPEN  */}
					<Down styles={styles} />
					{/* CLOSE  */}
				</div>

				<div
					className={`${styles['section_4__content-wrapper']} ${mediaStyles['section_4__content-wrapper']}`}
				>
					<div
						className={`${styles['section_4__content']} ${mediaStyles['section_4__content']}`}
					>
						{/* ul  */}
						{section4.map((el, index) => {
							return (
								<div
									key={el + '_' + index}
									className={`${styles['section_4__content-container']} ${styles['section_4__contentContainer_']} ${mediaStyles['section_4__content-container']} ${mediaStyles['section_4__contentContainer_']}`}
								>
									<div
										className={`${styles['section_4__wrapper-content-id']} ${mediaStyles['section_4__wrapper-content-id']}`}
									>
										<div
											className={`${styles['section_4_wrapper']} ${mediaStyles['section_4_wrapper']}`}
										>
											<div
												className={`${styles['section_4__content-bg']} ${mediaStyles['section_4__content-bg']}`}
												style={{ backgroundColor: '#' + el.color }}
											>
												<span
													className={`${styles['section_4__content-id']} ${mediaStyles['section_4__content-id']}`}
												>
													0{el.id}
												</span>
											</div>
										</div>

										<span
											className={`${styles['section_4__headline']} ${mediaStyles['section_4__headline']}`}
										>
											{el.headline}
										</span>
									</div>
									<div
										className={`${styles['section_4__description']} ${mediaStyles['section_4__description']}`}
									>
										<p>{el.description}</p>
									</div>
								</div>
							);
							{
								/* section_4__content-container end  */
							}
						})}
					</div>
					{/* section_4__content end  */}
				</div>
				{/* section_4__content-wrapper end  */}
			</div>
			{/* section_4__wrapper end  */}
		</section>
	);
};
