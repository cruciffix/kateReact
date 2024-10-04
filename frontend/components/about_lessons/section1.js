import React from 'react';

export const Section1 = ({ styles, mediaStyles }) => {
	React.useEffect(() => {
		// Карусель в About Lessons
		let tumblers = document.querySelector('.' + styles['tumblers']);
		let go = document.querySelector('.' + styles['go']);
		let back = document.querySelector('.' + styles['back']);

		let section1Carousel = document.querySelector(
			'.' + styles['section_1__carousel']
		);
		let imgs = section1Carousel.querySelectorAll('img');

		// Начальное значение для смещения
		let offset = 0;

		let section1Circles = document.querySelector(
			'.' + styles['section_1__circles']
		);
		let circles = section1Circles.querySelectorAll('div');

		// Повесим активный класс на первый кружочек
		let active = 0;
		circles[active].classList = styles['section_1__active'];

		// Ширина изображения a.k.a расстояние на которое мы будем прокручивать (400px)
		let imgOffsetWidth = imgs[0].offsetWidth;

		// Установим ширину section1Carousel
		section1Carousel.style.width = imgOffsetWidth * (imgs.length - 1) + 'px';
		// Функция, отвечающая за переключение section_1__active на кружочках под фото
		function toggleCircles(value) {
    			// Если go -> смещаем img в лево
			// иначе вправо (если back)
			value === styles['go']
				? (offset -= imgOffsetWidth)
				: (offset += imgOffsetWidth);

			// Убираем класс section_1__active c предыдущего элемента
			circles[active].classList = '';

			// Если go -> то увеличиваем счетчик active для того, чтобы кружочки под фото менялись
			value === styles['go'] ? active++ : active--;

			// Тут мы не даем классу active не выходить за пределы (0 и length)
			if (value === styles['go']) {
				if (active >= circles.length - 1) {
					active = circles.length - 1;
				}
			} else {
				if (active < 0) {
					active = 0;
				}
			}

			// Присваиваем класс section_1__active следующему элементу
			circles[active].classList = styles['section_1__active'];
		}

		tumblers.addEventListener('click', function (event) {
			// Делегирование событий
			// Если не DIV с классами go || back, то return
			if (event.target.tagName !== 'DIV') return;

			// Переключение кружочков под фото в зависимости от нажатия кнопки
			event.target.className === go.className
				? toggleCircles(go.className)
				: toggleCircles(back.className);

			// Смещаем в право/в лево в зависимости от того go или back
			section1Carousel.style.marginLeft = offset + 'px';

			// Если выходит за границу, то стоп машина
			if (parseInt(section1Carousel.style.marginLeft) >= 0) {
				offset = 0;
				section1Carousel.style.marginLeft = offset + 'px';
			}
			if (
				parseInt(section1Carousel.style.marginLeft) <=
				(imgs.length - 1) * -imgOffsetWidth
			) {
				offset = (imgs.length - 2) * -imgOffsetWidth;
				section1Carousel.style.marginLeft = offset + 'px';
			}
		});
	}, []);

	return (
		<section className={`${styles['section_1']} ${mediaStyles['section_1']}`}>
			<div
				className={`${styles['section_1__wrapper']} ${mediaStyles['section_1__wrapper']}`}
			>
				<div
					className={`${styles['section_1__column-1']} ${mediaStyles['section_1__column-1']}`}
				>
					<div
						className={`${styles['section_1__carousel-wrapper']} ${mediaStyles['section_1__carousel-wrapper']}`}
					>
						<div
							className={`${styles['section_1__carousel']} ${mediaStyles['section_1__carousel']}`}
						>
							{new Array(7).fill(0).map((item, index) => {
								return (
									<img
										src={`/about_lessons/section1/${index + 1}.png`}
										alt=''
									/>
								);
							})}
						</div>
						{/* END section_1__carousel  */}
						<div
							className={`${styles['section_1__circles']} ${mediaStyles['section_1__circles']}`}
						>
							{new Array(7).fill(6).map((item, index) => {
								return <div className=''></div>;
							})}
						</div>
					</div>

					<div className={`${styles['tumblers']} ${mediaStyles['tumblers']}`}>
						<div className={`${styles['back']}`}></div>
						<div className={`${styles['go']}`}></div>
					</div>
					{/* END section_1__carousel-wrapper  */}
				</div>

				{/* END section_1__column-1  */}

				<div
					className={`${styles['section_1__column-2']} ${mediaStyles['section_1__column-2']}`}
				>
					<div
						className={`${styles['section_1__text-wrapper']} ${mediaStyles['section_1__text-wrapper']}`}
					>
						<div
							className={`${styles['section_1__text-content']} ${mediaStyles['section_1__text-content']}`}
						>
							<div
								className={`${styles['section_1__text-headline']} ${mediaStyles['section_1__text-headline']}`}
							>
								<h1>Об уроках</h1>
								<span>Прочтите, и Вы поймете, как будете учиться</span>
							</div>
							{/* END section_1__text-headline */}
							<p>
								Прочтите, и Вы поймете, как будете учиться Прочтите, и Вы
								поймете, как будете учитьсяПрочтите, и Вы поймете, как будете
								учиться Прочтите, и Вы поймете, как будете учиться\ Прочтите, и
								Вы поймете, как будете учиться
							</p>
							<a
								href=''
								className={`${styles['section1__btn']} ${mediaStyles['section1__btn']}`}
							>
								Текст кнопки
							</a>
						</div>
						{/* END section_1__text-content  */}
					</div>
					{/* END section_1__text-wrapper  */}
				</div>
				{/* END section_1__column-2  */}
			</div>

			{/* END section_1__wrapper  */}
		</section>
	);
};
