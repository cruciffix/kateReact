import React from 'react';

export const Footer = ({ section6, styles, mediaStyles }) => {
	const socialMessengers = ['vk', 'wp', 'tg'];
	return (
		<footer className={`${styles['footer']} ${mediaStyles['footer']}`}>
			<div
				className={`${styles['footer__wrapper']} ${mediaStyles['footer__wrapper']}`}
			>
				<p className={`${styles['call_me']} ${mediaStyles['call_me']}`}>
					Можете связаться со мной, написав в
				</p>

				<div
					className={`${styles['wrapper__messengers']} ${mediaStyles['wrapper__messengers']}`}
				>
					{section6.map((el, index) => {
						return (
							<a key={el + '_' + index} href={el.link}>
								<img
									src={`/section6/${socialMessengers[index]}/${socialMessengers[index]}.png`}
								/>
							</a>
						);
					})}
				</div>

				<a
					href=''
					className={`${styles['privacy_policy']} ${mediaStyles['privacy_policy']}`}
				>
					Политика конфиденциальности
				</a>

				<p
					className={`${styles['teacher__name']} ${mediaStyles['teacher__name']}`}
				>
					© Репетитор по химии Екатерина Владимировна
				</p>

				<div
					className={`${styles['footer__date']} ${mediaStyles['footer__date']}`}
				>
					{new Date().getFullYear()}
				</div>
			</div>
		</footer>
	);
};
