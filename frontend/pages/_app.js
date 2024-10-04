import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />

			{/* Блок под модальное окно */}
			<div id='modal_window'></div>
		</>
	);
}
