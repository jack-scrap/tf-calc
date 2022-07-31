const ws = " ";

function serial(tok) {
	let buff = "";
	for (let i = 0; i < tok.length; i++) {
		buff += tok[i];

		if (i < tok.length - 1) {
			buff += ws;
		}
	}

	return buff;
}
