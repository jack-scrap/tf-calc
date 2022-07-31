const metal = {
	'scrap': 1,
	'rec': 1 * 3,
	'ref': 1 * 3 * 3
};

function ref(scrap) {
	let whole = scrap / metal['ref'];
	whole = Math.floor(whole);

	let dec = scrap % metal['ref'];
	dec = parseInt(dec.toFixed());

	let val = whole + (dec / 10) + (dec / 100);
	val = val.toFixed(2);

	return val;
}
