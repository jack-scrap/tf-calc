const ws = " ";

function eval(tok) {
	let res = tok[0];

	if (!tok.length) {
		return err("No tokens");
	}

	if (tok.length > 1 && !(tok.length % 2)) {
		return err(`Inappropriate number of tokens (${tok.length})`);
	}

	let i = 1;
	while (i < tok.length - 1) {
		if (typeof tok[i] != "string") {
			return err(`Unexpected token '${tok[i]}' at position ${i}`);
		}

		if (typeof tok[i + 1] != "number") {
			return err(`Unexpected token '${tok[i + 1]}' at position ${i + 1}`);
		}

		let rhs = tok[i + 1];

		switch (tok[i]) {
			case "+":
				res += rhs;

				break;

			case "-":
				res -= rhs;

				break;

			case "*":
				res *= rhs;

				break;

			case "/":
				res *= rhs;

				break;
		}

		i += 1 + 1;
	}

	return res;
}
