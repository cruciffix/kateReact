import React from 'react';

export const Section6 = ({ styles, section6, mediaStyles }) => {
	const socialMessengers = ['wp', 'vk', 'tg'];

	function whenBeenOnline(name) {
		if (name != 'wp') {
			if (name == 'tg') {
				return <span>был(а) недавно</span>;
			} else {
				return <span>была в сети в 18.30</span>;
			}
		}
	}

	function videoIcon(name) {
		return (
			<>
				{name == 'wp' ? <img src='/section6/wp/video.png' alt='' /> : ''}

				<img
					src={`/section6/${name}/call.png`}
					alt=''
					className={`${styles['section_6__call']} ${mediaStyles['section_6__call']}`}
				/>

				<img src={`/section6/${name}/settings.png`} alt='' />
			</>
		);
	}

	function renderMessage(el, index) {
		let renderArr = [];

		function getClassMessengers(role, index) {
			if (index === 0) {
				if (role === 'kate') return styles['section_6__kate_wp'];
				return styles['section_6__student_wp'];
			} else if (index === 1) {
				if (role === 'kate') return styles['section_6__kate_vk'];
				return styles['section_6__student_vk'];
			} else {
				if (role === 'kate') return styles['section_6__kate_tg'];
				return styles['section_6__student_tg'];
			}
		}

		for (let i = 0; i < 10; i++) {
			if (el.kate.split('|').length > i && el.student.split('|').length > i) {
				renderArr.push(
					<div>
						<div
							className={`${styles['section_6__kate']} ${
								mediaStyles['section_6__kate']
							} ${getClassMessengers('kate', index)}`}
						>
							{el.kate.split('|')[i]}
							<span
								className={`${styles['section_6__time-ok__kate']} ${mediaStyles['section_6__time-ok__kate']}`}
							>
								<div>18.22</div>
							</span>
						</div>

						<div
							className={`${styles['section_6__student']} ${
								mediaStyles['section_6__student']
							} ${getClassMessengers('student', index)}`}
						>
							<div>
								<span>{el.student.split('|')[i]}</span>

								<span
									className={`${styles['section_6__timeOk__student']} ${styles['section_6__timeOk__student']}`}
								>
									<div>
										18.24
										<img src='/section6/ok.png' alt='' />
									</div>
								</span>
							</div>
						</div>
					</div>
				);
			}
		}
		return renderArr;
	}

	return (
		<section
			className={`${styles['section_6']} ${styles['section_6']}`}
			id='tgWpVk'
		>
			<div
				className={`${styles['section_6__wrapper']} ${styles['section_6__wrapper']}`}
			>
				<div
					className={`${styles['sections_headline']} ${styles['sections_headline']}`}
				>
					<h3>Мои социальные сети</h3>
					<span>Просто начните печатать сообщение, а после отправьте</span>
				</div>
				{/* sections_headline END */}

				<div
					className={`${styles['section_6__wrapper-social']} ${mediaStyles['section_6__wrapper-social']}`}
				>
					{section6.map((el, index) => {
						return (
							<div key={el + '_' + index}>
								<div
									className={`${styles['section_6__messenger']} ${mediaStyles['section_6__messenger']}`}
								>
									<a href={el.link} target='_blank' rel='noopener noreferrer'>
										<img
											src={
												'/section6/' +
												socialMessengers[index] +
												'/' +
												socialMessengers[index] +
												'.png'
											}
											alt=''
										/>
									</a>
								</div>
								{/* section_6__messenger  */}

								<div
									className={`${styles['section_6__soc-mes_content']} ${mediaStyles['section_6__soc-mes_content']}`}
								>
									<div
										className={`${styles['section_6__content-header']} ${mediaStyles['section_6__content-header']}`}
										style={{
											backgroundColor: `#${
												index === 0
													? 'FFFFFF'
													: index === 1
													? 'DBFFE7'
													: '527CA4'
											}`,
										}}
									>
										<img
											src={`/section6/${socialMessengers[index]}/back.png`}
											alt=''
											className={`${styles['section_6__icon_img']} ${mediaStyles['section_6__icon_img']}`}
										/>

										<div
											className={`${styles['section_6__content__ava-name-been']} ${mediaStyles['section_6__content__ava-name-been']}`}
											id={`section_6__content-${socialMessengers[index]}`}
										>
											<img src='/section6/ava.png' alt='' />
											<div
												className={`${styles['section_6__content-name-been']} ${mediaStyles['section_6__content-name-been']}`}
											>
												<span
													className={`${styles['section_6__content__name']} ${mediaStyles['section_6__content__name']}`}
												>
													Екатерина
												</span>
												<div
													className={`${styles['section_6__content__been']} ${mediaStyles['section_6__content__been']}`}
													style={
														socialMessengers[index] == 'vk'
															? { color: '#8F8F8F' }
															: { color: '#A8CAE3' }
													}
												>
													{whenBeenOnline(socialMessengers[index])}
												</div>
											</div>
										</div>

										<div
											className={`${styles['section_6__wrapper-icon']} ${mediaStyles['section_6__wrapper-icon']}`}
										>
											{videoIcon(socialMessengers[index])}
										</div>
									</div>
									{/* section_6__content-header ENd  */}

									<div
										className={`${styles['section_6__content-body']} ${mediaStyles['section_6__content-body']}`}
										style={{
											backgroundImage: `url("/section6/${socialMessengers[index]}/bg.png")`,
											backgroundPosition: 'center center',
											backgroundSize: 'cover',
											backgroundRepeat: 'repeat-y',
										}}
									>
										{renderMessage(el, index)}
									</div>

									<div
										className={`${styles['section_6__content-footer']} ${mediaStyles['section_6__content-footer']}`}
									>
										<div
											className={`${styles['section_6__footer-wrapper']} ${mediaStyles['section_6__footer-wrapper']}`}
										>
											<div
												className={`${styles['section_6_footer-icons-text-area']} ${mediaStyles['section_6_footer-icons-text-area']}`}
											>
												<div
													className={`${styles['section_6__icons-left']} ${mediaStyles['section_6__icons-left']}`}
												>
													<img
														src={`/section6/${socialMessengers[index]}/smile.png`}
														alt=''
													/>

													{socialMessengers[index] === 'wp' ? (
														<img
															src={`/section6/${socialMessengers[index]}/plus.png`}
															alt=''
														/>
													) : (
														''
													)}
												</div>
												{/* section_6__icons-left END  */}

												<input type='text' placeholder='Написать сообщение' />
												{socialMessengers[index] === 'wp' ? (
													<div>
														<img
															src={`/section6/${socialMessengers[index]}/attach.png`}
															alt=''
														/>
													</div>
												) : (
													''
												)}

												{/* section_6__icons-right END  */}
											</div>
											{/* section_6_footer-icons-textArea END  */}

											<div
												className={`${styles['section_6__send-message']} ${mediaStyles['section_6__send-message']}`}
											>
												<a href=''>
													<img
														src={`/section6/${socialMessengers[index]}/send.png`}
														alt=''
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								{/* section_6__soc-mes_content END  */}
							</div>
						);
					})}
				</div>
				{/* section_6__wrapper-social END   */}
			</div>
		</section>
		// section_6 END
	);
};
