import React from 'react';

export const Section2 = ({ styles, mediaStyles }) => {
	React.useEffect(() => {
		// Линяя сладйера
		let horizontalLine = document.querySelector(
			'.' + styles['horizontal-line']
		);
		// Круг слайдера
		let circle = document.querySelector('.' + styles['circle']);

		// Width
		let section2Wrapper = document.querySelector(
			'.' + styles['section_2__wrapper']
		);

		let section2Block2Row1Content = document.querySelector(
			'.' + styles['section_2__block-2__row-1__content']
		);

		// if  (window.innerWidth < )
		circle.addEventListener('mousedown', event => {
			// Теперь не выделяется
			event.preventDefault();

			// Сдвиг по X
			let offsetX = event.clientX - circle.getBoundingClientRect().left;

			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);

			let precent = 0;

			function onMouseMove(event) {
				let newLeft =
					event.clientX - offsetX - horizontalLine.getBoundingClientRect().left;

				// курсор вышел из слайдера => оставить бегунок в его границах.
				if (newLeft < 0) {
					newLeft = 0;
				}
				let rightEdge = horizontalLine.offsetWidth - circle.offsetWidth;
				if (newLeft > rightEdge) {
					newLeft = rightEdge;
				}

				circle.style.left = newLeft + 'px';

				// На сколько процентов мы прокрутили ползунок
				let leftCircle = parseFloat(circle.style.left);
				let precent = Math.round(
					(leftCircle * 100) / horizontalLine.clientWidth
				);

				// Вот тут, вся движуха на счет прокрутки!!!!
				// Работаем со слайдером
				let fullCarouselWidthPx = -(
					section2Block2Row1Content.offsetWidth - section2Wrapper.offsetWidth
				);

				let offsetResult = (fullCarouselWidthPx * precent) / 100;
				// Чтобы не выходило за края
				section2Wrapper.style.marginLeft = -offsetResult + 'px';
			}

			function onMouseUp() {
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
		});
	}, []);

	return (
		<section className={`${styles['section_2']} ${mediaStyles['section_2']}`}>
			<div
				className={`${styles['section_8__wrappper-slider']} ${mediaStyles['section_8__wrappper-slider']}`}
			>
				<div
					className={`${styles['horizontal-line']} ${mediaStyles['horizontal-line']}`}
				>
					{/* slider  */}
					<div
						className={`${styles['circle']} ${mediaStyles['circle']}`}
						id=''
					></div>
					{/* thumb  */}
				</div>
			</div>

			<div
				className={`${styles['section_2__wrapper']} ${mediaStyles['section_2__wrapper']}`}
			>
				<div
					className={`${styles['section_2__block-1']} ${mediaStyles['section_2__block-1']}`}
				>
					{new Array(2).fill(0).map((item, index) => {
						return (
							<div
								className={
									index + 1 === 1
										? `${styles['section_2__block-1__row-1']} ${mediaStyles['section_2__block-1__row-1']}`
										: `${styles['section_2__block-1__row-2']} ${mediaStyles['section_2__block-1__row-2']}`
								}
							>
								{index === 0 && (
									<div
										className={`${styles['section_2__block-1__row-1__headline']} ${mediaStyles['section_2__block-1__row-1__headline']}`}
									>
										<span>
											Тут будет заголовок описывающий суть этого блока
										</span>
										<h2>Какая-то красивый текст уааа оч жесткий смысл</h2>
									</div>
								)}

								{/* section_2__block-1__row-1__headline END  */}

								<div
									className={`${styles['section_2__block-1__row-1__content']} ${
										mediaStyles['section_2__block-1__row-1__content']
									} ${index + 1 === 1 && styles['section_2__width100']}`}
								>
									{index + 1 === 1
										? new Array(0).fill(0).map((itemJ, indexJ) => {
												return (
													<div
														className={`${
															styles[
																'section_2__block-1__row-1__content__wrapper'
															]
														} ${
															mediaStyles[
																'section_2__block-1__row-1__content__wrapper'
															]
														} ${
															indexJ + 1 === 2
																? styles.section_2__D96FF5
																: styles.section_2__44D9FE
														}`}
													>
														<img
															src='/about_lessons/section2/block1/item1.png'
															alt=''
														/>
														<div>
															<span>Прочтите, и Вы поймете</span>
															<p>
																Прочтите, и Вы поймете и Вы пой и Вы пойметеи Вы
																пойметеи Вы поймете
															</p>
														</div>
													</div>
												);
												{
													/* section_2__block-1__row-1__content__wrapper END  */
												}
										  })
										: [2, 3, 4, 5].map(item => {
												return (
													<div
														className={`${
															styles[
																'section_2__block-1__row-1__content__wrapper'
															]
														} ${
															mediaStyles[
																'section_2__block-1__row-1__content__wrapper'
															]
														} ${
															item === 2
																? styles['section_2__D430FF']
																: item === 3
																? styles['section_2__1170FF']
																: item === 4
																? styles['section_2__AE00DD']
																: styles['section_2__CE019F']
														}
                                        `}
													>
														<img
															src='/about_lessons/section2/block1/item1.png'
															alt=''
														/>

														<div>
															<span>Прочтите, и Вы поймете</span>
															<p>
																Прочтите, и Вы поймете и Вы пой и Вы пойметеи Вы
																пойметеи Вы поймете
															</p>
														</div>
													</div>
												);
										  })}

									{/* section_2__block-1__row-1__content__wrapper END  */}
								</div>
								{/* section_2__block-1__row-1__content END  */}
							</div>
						);
					})}

					{/* section_2__block-1__row-1  */}
				</div>
				{/* section_2__block-1 END  */}

				<div
					className={`${styles['section_2__block-2']} ${mediaStyles['section_2__block-2']}`}
				>
					{[1, 2].map(item => {
						return (
							<div
								className={
									item === 1
										? styles['section_2__block-2__row-1']
										: styles['section_2__block-2__row-2']
								}
							>
								<div
									className={
										item === 1
											? `${styles['section_2__block-2__row-1__content']} ${mediaStyles['section_2__block-2__row-1__content']}`
											: `${styles['section_2__block-2__row-2__content']} ${mediaStyles['section_2__block-2__row-2__content']}`
									}
								>
									{item === 1
										? [1, 2, 3].map(itemJ => {
												return (
													<div
														className={`${styles['section_2__block-2__row-1__content__wrapper']} ${mediaStyles['section_2__block-2__row-1__content__wrapper']}`}
													>
														{itemJ === 1 ? (
															<span>Прочтите и вы поймете 1</span>
														) : itemJ === 2 ? (
															<span>Прочтите и вы поймете 2</span>
														) : (
															<span>Прочтите и вы поймете 3</span>
														)}

														<img
															src={`/about_lessons/section2/block2/${itemJ}.png`}
															alt=''
														/>
													</div>
												);
												{
													/* section_2__block-2__row-1__content__wrapper ENd  */
												}
										  })
										: [1, 2, 3, 4].map(() => {
												return (
													<div
														className={`${styles['section_2__block-2__row-2__content__wrapper']} ${mediaStyles['section_2__block-2__row-2__content__wrapper']}`}
													>
														<p>Прочтите, и Вы поймете</p>
													</div>
												);
										  })}
								</div>
							</div>
						);
					})}
				</div>
				{/* section_2__block-2 END  */}
			</div>
			{/* section_2__wrapper END  */}
		</section>
	);
};
