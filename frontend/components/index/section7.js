export const Section7 = ({ section7, styles, mediaStyles }) => {
	return (
		<section className={`${styles['section_7']} ${mediaStyles['section_7']}}`}>
			<div
				className={`${styles['section_7__bg']} ${mediaStyles['section_7__bg']}}`}
			>
				<div
					className={`${styles['section_7__wrapper']} ${mediaStyles['section_7__wrapper']}}`}
				>
					<div
						className={`${styles['sections_headline']} ${mediaStyles['sections_headline']}}`}
					>
						<h3>Какой-то заголовок</h3>
						<span>Типо крутая надпись тут вот</span>
					</div>
					<div
						className={`${styles['section_7__wrapper-top']} ${mediaStyles['section_7__wrapper-top']}}`}
					>
						{section7.map((el, index) => {
							if (el.id == 1 || el.id == 2) {
								return (
									<div
										key={el + '_' + index}
										className={`${styles['section_7__wrapper-item']} ${mediaStyles['section_7__wrapper-item']}}`}
									>
										<div
											className={`${styles['section_7__item-text']} ${mediaStyles['section_7__item-text']}}`}
										>
											<h3>{el.headline}</h3>
											<p>{el.p}</p>
										</div>

										<img src={`/section7/image${el.id}.png`} alt='' />
									</div>
								);
							}
						})}
						{/* section_7__wrapper-item END  */}
					</div>

					<div
						className={`${styles['section_7__wrapper-down']} ${mediaStyles['section_7__wrapper-down']}}`}
					>
						{section7.map((el, index) => {
							if (el.id == 3 || el.id == 4) {
								return (
									<div
										key={el + '_' + index}
										className={`${styles['section_7__wrapper-item']} ${mediaStyles['section_7__wrapper-item']}}`}
									>
										<div
											className={`${styles['section_7__item-text']} ${mediaStyles['section_7__item-text']}}`}
										>
											<h3>{el.headline}</h3>
											<p>{el.p}</p>
										</div>

										<img src={`/section7/image${el.id}.png`} alt='' />
									</div>
								);
							}
						})}
						{/* section_7__wrapper-item END  */}
					</div>
					{/* section_7__wrapper-down END  */}
				</div>
				{/* section_7__wrapper END  */}
			</div>
			{/* section_7__bg ENd  */}
		</section>
	);
};
