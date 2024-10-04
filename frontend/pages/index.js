import React from 'react';

import headerStyles from '@/styles/Header.module.css';
import headerMediaStyles from '@/styles/HeaderMedia.module.css';
import indexStyles from '@/styles/Main.module.css';
import indexMediaStyles from '@/styles/IndexMedia.module.css';
import footerStyles from '@/styles/Footer.module.css';
import footerMediaStyles from '@/styles/FooterMedia.module.css';

import {
	getMenuItem,
	getSection2Item,
	getSection4Stages,
	getSection6Messengers,
	getSection7Items,
	getSection8Rating,
} from './api/database';

import { Header } from '@/components/header';

import { Section1 } from '@/components/index/section1';
import { Section2 } from '@/components/index/section2';
import { Section3 } from '@/components/index/section3';
import { Section4 } from '@/components/index/section4';
import { Section5 } from '@/components/index/section5';
import { Section6 } from '@/components/index/section6';
import { Section7 } from '@/components/index/section7';
import { Section8 } from '@/components/index/section8';

import { Footer } from '@/components/footer';
import { Modal } from '@/components/modal';

export default function Main() {
	let [menu, setMenu] = React.useState([]);
	let [section2Items, setSection2Items] = React.useState([]);
	let [section6, setSection6] = React.useState([]);
	let [section8, setSection8] = React.useState([]);
	let [section4, setSection4] = React.useState([]);
	let [section7, setSection7] = React.useState([]);

	React.useEffect(() => {
		getMenuItem().then(data => setMenu(data));

		getSection2Item().then(data => data && setSection2Items(data));
		getSection6Messengers().then(data => data && setSection6(data));
		getSection8Rating().then(data => data && setSection8(data));
		getSection4Stages().then(data => data && setSection4(data));
		getSection7Items().then(data => data && setSection7(data));
	}, []);

	return (
		<>
			<Modal styles={headerStyles} mediaStyles={headerMediaStyles} />
			<Header
				styles={headerStyles}
				mediaStyles={headerMediaStyles}
				menu={menu}
			/>

			<Section1 styles={indexStyles} mediaStyles={indexMediaStyles} />

			<Section2
				styles={indexStyles}
				mediaStyles={indexMediaStyles}
				items={section2Items}
			/>

			<Section6
				styles={indexStyles}
				mediaStyles={indexMediaStyles}
				section6={section6}
			/>

			<Section8
				styles={indexStyles}
				mediaStyles={indexMediaStyles}
				section8={section8}
			/>

			<Section5 styles={indexStyles} mediaStyles={indexMediaStyles} />

			<Section3 styles={indexStyles} mediaStyles={indexMediaStyles} />

			<Section4
				styles={indexStyles}
				mediaStyles={indexMediaStyles}
				section4={section4}
			/>

			<Section7
				styles={indexStyles}
				mediaStyles={indexMediaStyles}
				section7={section7}
			/>

			<Footer
				styles={footerStyles}
				mediaStyles={footerMediaStyles}
				section6={section6}
			/>
		</>
	);
}
