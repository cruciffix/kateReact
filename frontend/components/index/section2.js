import clsx from 'clsx';
import React from 'react';
export const Section2 = ({ styles, mediaStyles, items }) => {
	const [flag, setFlag] = React.useState(true);
	let arrState = [true, true, true, true];

	React.useEffect(() => {
		let section2Wrapper = document.getElementById('section2Wrapper');
		let test = section2Wrapper
			.querySelectorAll('.' + styles['section_2__open'])
			.forEach(item => {
				item.hidden = true;
			});

		function foo(event) {
			let target = event.target;

			if (event.target.classList[0] !== styles['see__more']) return;

			let currentIndexHeadline =
				+target.classList[2][target.classList[2].length - 1];

			let section2Divs = document.querySelectorAll(
				'.' + styles['section_2__open']
			);

			target.textContent = 'Свернуть';

			// let flagHidden;
			section2Divs.forEach((item, index) => {
				if (currentIndexHeadline === index + 1) {
					if (arrState[currentIndexHeadline] === false) {
						item.hidden = true;
						arrState[currentIndexHeadline] = item.hidden;
						target.textContent = 'Узнать что же там...';

						setFlag(!flag);
						return;
					}
					item.hidden = false;
					arrState[currentIndexHeadline] = item.hidden;
					// flagHidden = item.hidden;
				}

				setFlag(!flag);
			});
		}
		section2Wrapper.addEventListener('click', foo);

		return () => {
			section2Wrapper.removeEventListener('click', foo);
		};
	}, [items]);

	function toggleContent(item, index) {
		return (
			<>
				<div>
					<span
						className={clsx(
							`${styles['see__more']} ${mediaStyles['see__more']}`,
							index === 0
								? 'section_2__1'
								: index === 1
								? 'section_2__2'
								: index === 2
								? 'section_2__3'
								: 'section_2__4'
						)}
						id='seeMore'
					>
						Узнать что же там...
					</span>
				</div>
				<div
					className={`${styles['section_2__open']} ${mediaStyles['section_2__open']}`}
				>
					<p
						className={`${styles['section_2__description']} ${mediaStyles['section_2__description']}`}
					>
						{item.description}
					</p>
				</div>
			</>
		);
	}

	return (
		<section className={`${styles['section_2']} ${mediaStyles['section_2']}`}>
			<div
				className={`${styles['section_2__wrapper']} ${mediaStyles['section_2__wrapper']}`}
				id='section2Wrapper'
			>
				{/* <% items[0].forEach(el => { %> */}

				{items.map((item, index) => {
					return (
						<div
							key={item + '_' + index}
							className={`${mediaStyles['section_2__item_wrapper__container']}`}
						>
							<div
								className={`${`${styles['section_2__item_wrapper']} ${mediaStyles['section_2__item_wrapper']} ${mediaStyles['number_item']}`}`}
							>
								<img src={`/section2/item` + (index + 1) + '.png'} alt='' />
								<hr />
								<h3>{item.headline}</h3>

								{/* END close__open */}
							</div>

							<div
								className={`${`${styles['section_2__item_wrapper']} ${mediaStyles['section_2__item_wrapper']}`} ${
									styles['section_2__content_description']
								}  ${mediaStyles['section_2__content_description']} ${
									mediaStyles['number_item']
								}`}
							>
								<div>{toggleContent(item, index)}</div>

								{/* END close__open */}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
