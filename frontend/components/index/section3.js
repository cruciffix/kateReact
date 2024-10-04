export const Section3 = ({ styles, mediaStyles }) => {
	return (
		<section className={`${styles['section_3']} ${mediaStyles['section_3']}`}>
			<div
				className={`${styles['section_3__wrapper']} ${mediaStyles['section_3__wrapper']}`}
			>
				<div
					className={`${styles['sections_headline']} ${mediaStyles['sections_headline']}`}
				>
					<h3>Об уроках</h3>
					<span>Прочтите, и Вы поймете, как будете учиться</span>
				</div>
				{/* sections_headline END  */}
				<div
					className={`${styles['section_3__content']} ${mediaStyles['section_3__content']}`}
				>
					<div
						className={`${styles['section_3__column-1']} ${mediaStyles['section_3__column-1']}`}
					>
						<div
							className={`${styles['section_3__column-1__item']} ${styles['section_3__column-1__item-1']} ${mediaStyles['section_3__column-1__item']} ${mediaStyles['section_3__column-1__item-1']}`}
						>
							<div
								className={`${styles['section_3__item__text']} ${mediaStyles['section_3__item__text']}`}
							>
								<span>Будет текст</span>
								<p>
									Тут будет текст Тут будет текст Тут будет Тут будет текст Тут
									будет текс
								</p>
							</div>
						</div>
						{/* END section_3__column1__item  */}

						<div
							className={`${styles['section_3__column-1__item']} ${styles['section_3__column-1__item-2']} ${mediaStyles['section_3__column-1__item']} ${mediaStyles['section_3__column-1__item-2']}`}
						>
							<div
								className={`${styles['section_3__item__text']} ${mediaStyles['section_3__item__text']}`}
							>
								<span>Будет текст</span>
								<p>
									Тут будет текст Тут будет текст Тут будет Тут будет текст Тут
									будет текс Тут будет текст Тут будет текст Тут будет
								</p>
							</div>
						</div>
						{/* END section_3__column1__item  */}
					</div>
					{/* section_3__column END  */}
					<div
						className={`${styles['section_3__column-2']} ${mediaStyles['section_3__column-2']}`}
					>
						<div
							className={`${styles['section_3__column-1__item']} ${styles['section_3__column-2__item-1']} ${mediaStyles['section_3__column-1__item']} ${mediaStyles['section_3__column-2__item-1']}`}
						>
							<div
								className={`${styles['section_3__item__text']} ${mediaStyles['section_3__item__text']}`}
							>
								<span>Будет текст</span>
								<p>
									Тут будет текст Тут будет текст Тут будет Тут будет текст Тут
									будет тексТут будет текст Тут будет текст Тут будет Тут будет
									текст Тут будет текс Тут будет
								</p>
							</div>
						</div>
						{/* END section_3__column1__item  */}

						{/* END section_3__column1__item  */}
					</div>
					{/* section_3__column END */}
					<div
						className={`${styles['section_3__column-3']} ${styles['section_3__column-3']}`}
					>
						<div
							className={`${styles['section_3__column-1__item']} ${styles['section_3__column-3__item-1']} ${mediaStyles['section_3__column-1__item']} ${mediaStyles['section_3__column-3__item-1']}`}
						>
							<div
								className={`${styles['section_3__item__text']} ${mediaStyles['section_3__item__text']}`}
							>
								<span>Будет текст</span>
								<p>Тут будет текст Тут буд текст Тут буд текст Тут буд текст</p>
							</div>
						</div>
						{/* END section_3__column1__item  */}

						<div
							className={`${styles['section_3__column-1__item']} ${styles['section_3__column-3__item-2']} ${mediaStyles['section_3__column-1__item']} ${mediaStyles['section_3__column-3__item-2']}`}
						>
							<div
								className={`${styles['section_3__item__text']} ${mediaStyles['section_3__item__text']}`}
							>
								<span>Будет текст</span>
								<p>
									Тут будет текст Тут будет текст Тут будет Тут будет текст Тут
									будет текс Тут будет текст Тут будет текст Тут будет
								</p>
							</div>
						</div>
						{/* END section_3__column1__item */}
					</div>
					{/* section_3__column END */}
				</div>
				{/* section_3__content END  */}
			</div>

			{/* section_3__wrapper END  */}
		</section>
	);
};
