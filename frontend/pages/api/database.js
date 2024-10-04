export async function getMenuItem() {
	const response = await fetch('http://localhost:3003/menu');
	const data = await response.json();

	return data.menu;
}
export async function getSection2Item() {
	const response = await fetch('http://localhost:3003/section2');
	const data = await response.json();
	return data.data;
}
export async function getSection6Messengers() {
	const response = await fetch('http://localhost:3003/section6');
	const data = await response.json();
	return data.data;
}

export async function getSection8Rating() {
	const response = await fetch('http://localhost:3003/section8');
	const data = await response.json();
	return data.data;
}

export async function getSection4Stages() {
	const response = await fetch('http://localhost:3003/section4');
	const data = await response.json();
	return data.data;
}

export async function getSection7Items() {
	const response = await fetch('http://localhost:3003/section7');
	const data = await response.json();
	return data.data;
}
