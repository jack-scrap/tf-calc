const ws = " ";

function eval(buff) {
	let tok = [];
	let i = 0;
	while (i < buff.length) {
		let no = Number(buff[i]);

		let _ = "";
		if (Number.isInteger(no)) {
			while (Number.isInteger(buff[i])) {
				_ += buff[i];

				i++;
			}

			tok.push(_);
		}

		i++;
	}

	return tok;

	// let res = tok[0];

// 	if (!tok.length) {
// 		return err("No tokens");
// 	}

// 	if (tok.length > 1 && !(tok.length % 2)) {
// 		return err(`Inappropriate number of tokens (${tok.length})`);
// 	}

// 	let i = 1;
// 	while (i < tok.length - 1) {
// 		if (typeof tok[i] != "string") {
// 			return err(`Unexpected token '${tok[i]}' at position ${i}`);
// 		}

// 		if (typeof tok[i + 1] != "number") {
// 			return err(`Unexpected token '${tok[i + 1]}' at position ${i + 1}`);
// 		}

// 		let rhs = tok[i + 1];

// 		switch (tok[i]) {
// 			case "+":
// 				res += rhs;

// 				break;

// 			case "-":
// 				res -= rhs;

// 				break;

// 			case "*":
// 				res *= rhs;

// 				break;

// 			case "/":
// 				res *= rhs;

// 				break;
// 		}

// 		i += 1 + 1;
// 	}

	return res;
}
