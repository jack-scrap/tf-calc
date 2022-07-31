const ws = ' ';

function token(buff) {
	let c = 0;
	let tok = [];
	while (c < buff.length) {
		// number
		if (!isNaN(buff[c])) {
			let _ = '';
			while (!isNaN(buff[c])) {
				_ += buff[c];

				c++;
			}

			tok.push(_);

			continue;
		}

		// operator
		if (isNaN(buff[c])) {
			let _ = '';
			while (isNaN(buff[c])) {
				_ += buff[c];

				c++;
			}

			tok.push(_);

			continue;
		}
	}

	return tok;
}

function eval(buff) {
	// deserialize
	let tok = token(buff);

	let res = parseInt(tok[0]);

	if (!tok.length) {
		return err('No tokens');
	}

	if (tok.length > 1 && !(tok.length % 2)) {
		return err(`Inappropriate number of tokens (${tok.length})`);
	}

	let i = 1;
	while (i < tok.length - 1) {
		if (
			tok[i] != '+' &&
			tok[i] != '-' &&
			tok[i] != '*' &&
			tok[i] != '/'
		) {
			return err(`Unexpected token '${tok[i]}' at position ${i}`);
		}

		if (isNaN(tok[i + 1])) {
			return err(`Unexpected token '${tok[i + 1]}' at position ${i + 1}`);
		}

		let rhs = parseInt(tok[i + 1]);

		switch (tok[i]) {
			case '+':
				res += rhs;

				break;

			case '-':
				res -= rhs;

				break;

			case '*':
				res *= rhs;

				break;

			case '/':
				res *= rhs;

				break;
		}

		i += 1 + 1;
	}

	return res;
}
