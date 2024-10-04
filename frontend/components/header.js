import React from 'react';
import { Burger } from './icons/burger';
import { Close } from './icons/close';
import Link from 'next/link';

export const Header = ({ menu, styles, mediaStyles }) => {
	let [flag, setFlag] = React.useState(true);
	React.useEffect(() => {
		document.body.style.overflow = '';

		let header = document.querySelector('header');
		let menu = document.querySelector('.' + styles['menu']);
		let close = document.querySelector('.' + styles['close']);

		// Изначально скрываем close, т. к. появляется он ток при клике
		close.hidden = flag;

		menu.addEventListener('click', () => {
			// Когда меню открыто, то скроллить нельзя
			document.body.style.overflow = 'hidden';

			header.style.marginLeft = -20 + 'px';
			close.hidden = !flag;
			menu.hidden = flag;

			close.addEventListener('click', () => {
				// Когда меню закрыто, то скроллить можно
				document.body.style.overflow = '';

				close.hidden = flag;
				if (close.hidden != flag) {
					close.hidden = flag;
					menu.hidden = !flag;
					return;
				}
				menu.hidden = !flag;

				header.style.marginLeft = -header.offsetWidth - 20 + 'px';
			});
		});
	}, []);

	return (
			
			<header className={`${styles['header']} ${mediaStyles['header']}`}>
				<div
					className={`${styles['container-burger']} ${mediaStyles['container-burger']}`}
				>
					<div className={`${styles['menu']} ${mediaStyles['menu']}`}>
						<Burger />
					</div>
					{/* End menu */}

					<div className={`${styles['close']} ${mediaStyles['close']}`}>
						<Close />
					</div>
				</div>
				{/* END container-burger */}

				<div className={`${styles['container']} ${mediaStyles['container']}`}>
					<div className={`${styles['logo']} ${mediaStyles['logo']}`}>
						<span>KATE</span>
						<span>lessons</span>
					</div>
					{/* logo END */}

					<div
						className={`${styles['navigation']} ${mediaStyles['navigation']}`}
					>
						<div
							className={`${styles['navigation__menu']} ${mediaStyles['navigation__menu']}`}
						>
							<ul>
								{menu.map((item, index) => {
									if (item.link === 'consult') return;
									return (
										<li
											key={item.id}
											className={`${styles['menu__item']} ${mediaStyles['menu__item']}`}
										>
											<Link href={`${item.link}`}>
												{
													(item.name =
														item.name[0].toUpperCase() + item.name.slice(1))
												}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
						{/* navigation__menu END */}
					</div>

					{/* <Link className="consult" id="consult"></Link>	 */}
					<Link
						className={`${styles['consult']} ${mediaStyles['consult']}`}
						id='consult'
						href={'#'}
					>
						{menu.map(item => {
							if (item.link == 'consult') {
								return <span key={item.id}>{item.name}</span>;
							}
						})}
					</Link>
					{/* consult END */}
				</div>
				{/* <!-- container END --> */}
				{/* <script src="/scripts/header.js"></script> */}
			</header>

	);
};
