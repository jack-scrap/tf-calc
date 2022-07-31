function ref(scrap) {
	let whole = scrap / 9;
	whole = Math.floor(whole);

	let dec = scrap % 9;
	dec = parseInt(dec.toFixed());

	let res = whole + (dec / 10) + (dec / 100);
	res = res.toFixed(2);

	return res;
}
