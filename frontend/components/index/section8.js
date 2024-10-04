import React from 'react';

export const Section8 = ({ section8, styles, mediaStyles }) => {
	const [offset, setOffset] = React.useState(0);
	const ref = React.useRef();

	const arrForRenderFeedback = [0, 1];

	React.useEffect(() => {
		// Это код слайдера
		let section8HorizontalLine = document.querySelector(
			'.' + styles['section_8__horizontal-line']
		); // slider
		let section8Circle = document.querySelector(
			'.' + styles['section_8__circle']
		); // thumb
		let section8RatingSlider = document.querySelector(
			'.' + styles['section_8__rating-slider']
		);

		// Выставляем линию горизнотальную  всегда посередине!

		function section8Slider() {
			let section8Circle = document.querySelectorAll(
				'.' + styles['section_8__circle']
			); // thumb
			let section8HorizontalLine = document.querySelectorAll(
				'.' + styles['section_8__horizontal-line']
			);

			// Хранится самая высоко вложеная оболочка avito и profi
			let section8Place = document.querySelectorAll(
				'.' + styles['section_8__place']
			);

			for (let i = 0; i < section8Circle.length; i++) {
				// Выравниваем ползунок по центру
				section8HorizontalLine[i].style.marginLeft =
					section8RatingSlider.offsetWidth / 2 -
					section8HorizontalLine[i].offsetWidth / 2 +
					'px';
				if (window.innerWidth < 574) {
					section8HorizontalLine[i].style.marginLeft = 0;
				}

				section8Circle[i].onmousedown = function (event) {
					event.preventDefault(); // предотвратить запуск выделения (действие браузера)

					let shiftX =
						event.clientX - section8Circle[i].getBoundingClientRect().left;
					// shiftY здесь не нужен, слайдер двигается только по горизонтали

					document.addEventListener('mousemove', onMouseMove);
					document.addEventListener('mouseup', onMouseUp);

					function onMouseMove(event) {
						let newLeft =
							event.clientX -
							shiftX -
							section8HorizontalLine[i].getBoundingClientRect().left;

						// курсор вышел из слайдера => оставить бегунок в его границах.
						if (newLeft < 0) {
							newLeft = 0;
						}
						let rightEdge =
							section8HorizontalLine[i].offsetWidth -
							section8Circle[i].offsetWidth;
						if (newLeft > rightEdge) {
							newLeft = rightEdge;
						}

						section8Circle[i].style.left = newLeft + 'px';

						// На сколько процентов мы прокрутили ползунок
						let leftCircle = parseFloat(section8Circle[i].style.left);
						let precent = Math.round(
							(leftCircle * 100) / (section8HorizontalLine[i].clientWidth - 30)
						);

						// Вот тут, вся движуха на счет прокрутки!!!!

						let section8Carousel = section8Place[i].querySelector(
							'.' + styles['section_8__rainting-content']
						);
						// Собираем в кучу все отзывы
						// Это переменная, для вычисления размера 1 отзыва
						let section8WrapperContent = section8Carousel.querySelectorAll(
							'.' + styles['section_8__wrapper-content']
						);

						// Работаем уже со сладером
						let fullCarouselWidthPx =
							// Чтоб не выходило за края
							section8WrapperContent[0].offsetWidth *
								section8WrapperContent.length -
							section8RatingSlider.offsetWidth +
							110;

						let offsetResult = (fullCarouselWidthPx * precent) / 100;
						// Чтоб не выходило за края

						section8Carousel.style.marginLeft = -offsetResult + 'px';
					}

					function onMouseUp() {
						document.removeEventListener('mouseup', onMouseUp);
						document.removeEventListener('mousemove', onMouseMove);
					}
				};

				section8Circle.ondragstart = function () {
					return false;
				};
			}
		}

		section8Slider();
	});

	function renderContent(item) {
		if (item === 0) {
			return section8.map((el, index) => {
				if (el.name === 'avito') {
					return (
						<div
							key={el + '_' + index}
							className={`${styles['section_8__wrapper-content']} ${styles['section_8__wrapper-content-avito']} ${mediaStyles['section_8__wrapper-content']} ${mediaStyles['section_8__wrapper-content-avito']}`}
						>
							<div
								className={`${styles['section_8__content-headline']} ${mediaStyles['section_8__content-headline']}`}
							>
								<img
									className={`${styles['section_8__ava']} ${mediaStyles['section_8__ava']}`}
									src='/section8/ava.png'
									alt=''
								/>

								<div
									className={`${styles['section_8__headline-rating']} ${mediaStyles['section_8__headline-rating']}`}
								>
									<span>Екатерина Убейкина</span>

									<div>
										{new Array(el.rating).fill('').map((el, index) => {
											return (
												<img
													key={el + '_' + index}
													src='/section8/star.png'
													alt=''
												/>
											);
										})}
									</div>
								</div>
								{/* section_8__headline-rating ENd  */}
							</div>
							{/* section_8__content-headline END  */}

							<div
								className={`${styles['section_8__body']} ${mediaStyles['section_8__body']}`}
							>
								<p>{el.body}</p>
							</div>
						</div>
					);
				}
			});
		} else {
			return section8.map((el, index) => {
				if (el.name === 'profi') {
					return (
						<div
							key={el + '_' + index}
							className={`${styles['section_8__wrapper-content']} ${styles['section_8__wrapper-content-profi']} ${mediaStyles['section_8__wrapper-content']} ${mediaStyles['section_8__wrapper-content-profi']}`}
						>
							<div
								className={`${styles['section_8__content-headline']} ${mediaStyles['section_8__content-headline']}`}
							>
								<img src='/section8/ava.png' alt='' />

								<div
									className={`${styles['section_8__headline-rating']} ${mediaStyles['section_8__headline-rating']}`}
								>
									<span>Екатерина Убейкина</span>

									<div>
										{new Array(el.rating).fill('').map((item, index) => {
											return (
												<img
													key={item + '_' + index}
													src='/section8/star.png'
													alt=''
												/>
											);
										})}
									</div>
								</div>
								{/* section_8__headline-rating" ENd  */}
							</div>
							{/* section_8__content-headline END  */}

							<div
								className={`${styles['section_8__body']} ${mediaStyles['section_8__body']}`}
							>
								<p>{el.body}</p>
							</div>
						</div>
					);
				}
			});
		}
	}

	return (
		<section
			className={`${styles['section_8']} ${mediaStyles['section_8']}`}
			id='reviews'
		>
			<div
				className={`${styles['section_8__bg']} ${mediaStyles['section_8__bg']}`}
			>
				<div
					className={`${styles['section_8__wrapper']} ${mediaStyles['section_8__wrapper']}`}
				>
					<div
						className={`${styles['sections_headline']} ${mediaStyles['sections_headline']}`}
					>
						<h3>Об уроках</h3>
						<span>Прочтите, и Вы поймете, как будете учиться</span>
					</div>
					<div
						className={`${styles['section_8__carousel']} ${mediaStyles['section_8__carousel']}`}
					>
						{/* CAROUSEL */}
						{arrForRenderFeedback.map((item, index) => {
							return (
								<div
									key={item + '_' + index}
									className={`${styles['section_8__place']} ${
										mediaStyles['section_8__place']
									} ${item === 0 ? styles['avito'] : styles['profi']} ${
										item === 0 ? mediaStyles['avito'] : mediaStyles['profi']
									}`}
								>
									{/* GALLEREY  */}
									<div
										className={`${styles['section_8__img-btn']} ${
											mediaStyles['section_8__img-btn']
										} ${item && styles['section_8__first']}`}
									>
										{item === 0 ? (
											<img src='/section8/avito.png' alt='' />
										) : (
											<img src='/section8/profi.png' alt='' />
										)}

										<a href='https://colorscheme.ru/'>Перейти</a>
									</div>
									{/* section_8__img-btn end */}

									<div
										className={`${styles['section_8__divs']} ${
											mediaStyles['section_8__divs']
										} ${item && styles['section_8__middle']}`}
									>
										<div
											className={`${styles['section_8__div']} ${styles['section_8__div_1']} ${mediaStyles['section_8__div']} ${mediaStyles['section_8__div_1']}`}
										></div>
										<div
											className={`${styles['section_8__div']} ${styles['section_8__div_2']} ${mediaStyles['section_8__div']} ${mediaStyles['section_8__div_2']}`}
										></div>
										<div
											className={`${styles['section_8__div']} ${styles['section_8__div_3']} ${mediaStyles['section_8__div']} ${mediaStyles['section_8__div_3']}`}
										></div>
										<div
											className={`${styles['section_8__div']} ${styles['section_8__div_4']} ${mediaStyles['section_8__div']} ${mediaStyles['section_8__div_4']}`}
										></div>
									</div>

									<div
										className={`${styles['section_8__rating-slider']} ${
											mediaStyles['section_8__rating-slider']
										} ${item && styles['section_8__last']}`}
									>
										{/* UL  */}
										<div
											className={`${styles['section_8__rainting-content']} ${mediaStyles['section_8__rainting-content']}`}
										>
											{renderContent(item)}
										</div>

										<div
											className={`${styles['section_8__wrappper-slider']} ${mediaStyles['section_8__wrappper-slider']}`}
										>
											<div
												className={`${styles['section_8__horizontal-line']} ${mediaStyles['section_8__horizontal-line']}`}
											>
												{/* slider  */}
												<div
													className={`${styles['section_8__circle']} ${mediaStyles['section_8__circle']}`}
													id=''
												></div>
												{/* thumb  */}
											</div>
										</div>
									</div>
								</div>
							);
						})}
						{/* section_8__slider end  */}
					</div>
				</div>
			</div>
		</section>
	);
};
