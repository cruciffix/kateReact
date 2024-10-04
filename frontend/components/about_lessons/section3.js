import React from 'react';

export const Section3 = ({ styles, mediaStyles }) => {
	let [counter, setCounter] = React.useState(0);

	React.useEffect(() => {
		let wrapperHeadline = document.querySelectorAll(
			'.' + styles['time_lessons_teacher__block']
		);

		// Дотягиваемся до h3 через wrapperHeadline

		wrapperHeadline.forEach((item, index) => {
			let h3 = item.querySelector('h3');
			if (index === 0) {
				if (+h3.textContent <= 2600) {
					h3.textContent = counter;
					if (+h3.textContent >= 2600) h3.textContent = 2600 + '+';
				}
			} else if (index === 1) {
				if (+h3.textContent <= 1200) h3.textContent = counter;
				if (+h3.textContent >= 1200) h3.textContent = 1200 + '+';
			} else {
				h3.textContent = 1;
			}

			if (counter < 2600) setCounter(counter + 1);
		});
	}, [counter]);

	return (
		<section className={`${styles['section_3']} ${mediaStyles['section_3']}`}>
			<div
				className={`${styles['section_3__wrapper']} ${mediaStyles['section_3__wrapper']}`}
			>
				{[1, 2].map(itemI => {
					return (
						<div
							className={
								itemI === 1
									? `${styles['section_3__row_1']} ${mediaStyles['section_3__row_1']}`
									: `${styles['section_3__row_2']} ${mediaStyles['section_3__row_2']}`
							}
						>
							{itemI === 1 ? (
								<div
									className={`${styles['section_3__wrpper-time_lessons_teacher']} ${mediaStyles['section_3__wrpper-time_lessons_teacher']}`}
								>
									{[1, 2, 3].map(itemJ => {
										return (
											<div
												className={`${styles['time_lessons_teacher__block']} ${mediaStyles['time_lessons_teacher__block']}`}
											>
												<h3
													className={
														styles[`time_lessons_teacher__block_h3-${itemI}`]
													}
												>
													0
												</h3>
												<span
													className={
														styles[`time_lessons_teacher__block_span-${itemJ}`]
													}
												>
													Занятий
												</span>
												<p
													className={
														styles[`time_lessons_teacher__block_p-${itemJ}`]
													}
												>
													У меня оче нь бол ьшой опfbыт какsvsrvsrb капец! У
													меняb очsrvнь erebg большой опыт как srкапец!fvfv
													очень большой опыт как капец!f
												</p>
											</div>
										);
										{
											/* time_lessons_teacher__block END  */
										}
									})}
								</div>
							) : (
								[1, 2, 3].map(itemI => {
									return (
										itemI === 1 && (
											<>
												<div
													className={`${styles['section_3__wrapper-advantages']} ${mediaStyles['section_3__wrapper-advantages']}`}
												>
													{[1, 2].map(itemJ => {
														return itemJ === 1 ? (
															<div
																className={`${
																	styles['section_3__advantages_block']
																} ${
																	styles['section_3__advantages_block-' + itemJ]
																} ${
																	mediaStyles[
																		'section_3__advantages_block-' + itemJ
																	]
																}`}
															>
																<div
																	className={`${styles['section_3__advantages__button-text']} ${mediaStyles['section_3__advantages__button-text']}`}
																>
																	<div
																		className={`${styles['section_3__button-text-first']} ${mediaStyles['section_3__button-text-first']}`}
																	>
																		<span
																			className={`${styles['section_3__text_1']} ${mediaStyles['section_3__text_1']}`}
																		>
																			Заботливые
																		</span>
																		<span
																			className={`${styles['section_3__text_2']} ${mediaStyles['section_3__text_2']}`}
																		>
																			Учителя
																		</span>
																	</div>

																	<a href=''>Это кнопка какая-то</a>
																</div>
																{/* section__advantages__button-text END  */}

																<div
																	className={`${styles['section_3__img-text']} ${mediaStyles['section_3__img-text']}`}
																>
																	<img
																		src='/about_lessons/section3/2.png'
																		alt=''
																	/>
																	<p>
																		Самый внимательный замечательный и лучший
																		репетитор за последние 1000 лет!
																	</p>
																</div>
															</div>
														) : (
															<div
																className={`${
																	styles['section_3__advantages_block']
																} ${
																	styles['section_3__advantages_block-' + itemJ]
																} ${
																	mediaStyles[
																		'section_3__advantages_block-' + itemJ
																	]
																}`}
															>
																<div
																	className={`${styles['section_3__advantages__connection']} ${mediaStyles['section_3__advantages__connection']}`}
																>
																	<h4 style={{ color: itemJ === 2 && '#fff' }}>
																		Всегда на связи
																	</h4>
																	<p>
																		Круто же, когда человек, с которым ты
																		занимаешься, всегда отвечает во время
																	</p>
																	<img
																		src='/about_lessons/section3/2.png'
																		alt=''
																	/>
																</div>
															</div>
														);
													})}
												</div>

												<div
													className={`${styles['section_3__wrapper-advantages']} ${mediaStyles['section_3__wrapper-advantages']}`}
												>
													{[3, 4].map(itemI => {
														return (
															<div
																className={`${
																	styles['section_3__advantages_block']
																} ${
																	styles[`section_3__advantages_block-${itemI}`]
																} ${
																	mediaStyles[
																		`section_3__advantages_block-${itemI}`
																	]
																}`}
															>
																<div
																	className={`${styles['section_3__advantages__circeficate-live_lessons']} ${mediaStyles['section_3__advantages__circeficate-live_lessons']}`}
																>
																	{itemI === 3 ? (
																		<>
																			<div>
																				<h5>Государственный аттестат</h5>
																				<p
																					className={`${styles['section_3__advantages__p-first']} ${mediaStyles['section_3__advantages__p-first']}`}
																				>
																					Опять же, тут будет какая-нибудь
																					информация, которая соотносится с
																					заголовком Государственный аттестат
																				</p>
																			</div>

																			<img
																				src='/about_lessons/section1/1.png'
																				alt=''
																			/>
																		</>
																	) : (
																		<>
																			<div
																				className={`${styles['section_3__advantages__underheadline']} ${mediaStyles['section_3__advantages__underheadline']}`}
																			>
																				<h5>Живые миниуроки</h5>
																				<div
																					className={`${styles['section_3__advantages__wrapper_count-p']} ${mediaStyles['section_3__advantages__wrapper_count-p']}`}
																				>
																					<div>
																						<span>24</span>
																						<p
																							className={`${styles['section_3__advantages__p-last']} ${mediaStyles['section_3__advantages__p-last']}`}
																						>
																							Младшей школы
																						</p>
																					</div>

																					<div>
																						<span>234</span>
																						<p
																							className={`${styles['section_3__advantages__p-last']} ${mediaStyles['section_3__advantages__p-last']}`}
																						>
																							Старшей школы
																						</p>
																					</div>
																				</div>
																			</div>
																			<img
																				src='/about_lessons/section1/1.png'
																				alt=''
																			/>
																		</>
																	)}
																</div>
															</div>
														);
													})}
												</div>
											</>
										)
									);
								})
							)}
						</div>
					);
					{
						/* section_3__row END  */
					}
				})}
			</div>
		</section>
	);
};
