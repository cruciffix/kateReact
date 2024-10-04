import React from 'react';

export const Section5 = ({ styles, mediaStyles }) => {
	return (
		<section className={`${styles['section_5']} ${mediaStyles['section_5']}`}>
			<div
				className={`${styles['section_5__wrapper']} ${mediaStyles['section_5__wrapper']}`}
			>
				<h3>Заголовок - попрошайка чтоб человек связался с тобой</h3>
				<div>
					<p
						className={`${styles['section_5__dscrptn-btn']} ${mediaStyles['section_5__dscrptn-btn']}`}
					>
						Ну тут уже будет какой-то коротенький текст вот Ну тут уже будет
						какой-то ё текст вот текст вот текст вот текст вот текст вот текст
						вот текст вот текст вот тексттекст вот
					</p>
					<div
						className={`${styles['section_5__btn']} ${mediaStyles['section_5__btn']}`}
					>
						<a href='#'>Клик сюда</a>
					</div>
				</div>
			</div>
			{/* section_5__wrapper END  */}
		</section>
	);
};
