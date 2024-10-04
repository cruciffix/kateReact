import React from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import headerStyles from '@/styles/Header.module.css';
import headerMediaStyles from '@/styles/HeaderMedia.module.css';
import AboutLessonsStyles from '@/styles/AboutLessons.module.css';
import AboutLessonsMediaStyles from '@/styles/AboutLessonsMedia.module.css';
import footerStyles from '@/styles/Footer.module.css';
import footerMediaStyles from '@/styles/FooterMedia.module.css';

import { getMenuItem, getSection6Messengers } from './api/database';
import { Section1 } from '@/components/about_lessons/section1';
import { Section2 } from '@/components/about_lessons/section2';
import { Section3 } from '@/components/about_lessons/section3';

export default function AboutLessons() {
	let [menu, setMenu] = React.useState([]);
	let [section6, setSection6] = React.useState([]);

	React.useState(() => {
		getMenuItem().then(data => data && setMenu(data));
		getSection6Messengers().then(data => data && setSection6(data));
	});
	return (
		<>
			<Header
				styles={headerStyles}
				mediaStyles={headerMediaStyles}
				menu={menu}
			/>

			<Section1
				styles={AboutLessonsStyles}
				mediaStyles={AboutLessonsMediaStyles}
			/>

			<Section2
				styles={AboutLessonsStyles}
				mediaStyles={AboutLessonsMediaStyles}
			/>

			<Section3
				styles={AboutLessonsStyles}
				mediaStyles={AboutLessonsMediaStyles}
			/>

			<Footer
				styles={footerStyles}
				mediaStyles={footerMediaStyles}
				section6={section6}
			/>
		</>
	);
}
