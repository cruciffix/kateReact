import React from 'react';

export function Test({ section4, styles }) {
	React.useEffect(() => {
		let test = document.querySelector('.' + styles.classForTestModule);
		debugger;
	}, [section4]);

	return (
		<div className={styles.testWrapper}>
			{section4.map(item => {
				return <div className={styles.classForTestModule}>Привет</div>;
			})}
		</div>
	);
}
