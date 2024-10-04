import Link from 'next/link';
import React from 'react';

export const Section1 = ({ styles, mediaStyles }) => {
	return (
		<section className={`${styles['section_1']} ${mediaStyles['section_1']}`}>
			<div
				className={`${styles['section_1__wrapper']} ${mediaStyles['section_1__wrapper']}`}
			>
				<div className={`${styles['img']} ${mediaStyles['img']}`}>
					<img src='/section1/kate.png' alt='' />
				</div>

				<div
					className={`${styles['section_1__content']} ${mediaStyles['section_1__content']}`}
				>
					<div
						className={`${styles['section_1__content__wrapper']} ${mediaStyles['section_1__content__wrapper']}`}
					>
						<h1>Тут будет текст</h1>
						<p>
							Тут будет текст Тут будет текст Тут будет текст Тут будет текст
							Тут будет текст Тут будет текст Тут будет текст Тут будет текст
							Тут будет текст Тут будет текст
						</p>

						<Link
							href=''
							className={`${styles['section_1__button']} ${mediaStyles['section_1__button']}`}
						>
							Текст кнопки
						</Link>
					</div>
					{/* end section_1__content__wrapper */}
				</div>
				{/* section_1__content END */}
			</div>
			{/* wrapper END */}
		</section>
	);
};
