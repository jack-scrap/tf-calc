function ref(scrap) {
	let whole = scrap / 9;
	whole = Math.floor(whole);

	let dec = scrap % 9;
	dec = parseInt(dec.toFixed());

	return whole + (dec / 10) + (dec / 100);
}
