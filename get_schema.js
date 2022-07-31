const fetch = require('node-fetch');
const fs = require('fs');

const fName = 'schema.json';

let key;
try {
	const buff = fs.readFileSync('conf.json');

	const json = JSON.parse(buff);

	key = json['key'];
} catch (err) {
	console.error(err);
}

const url = 'https://backpack.tf/api/IGetCurrencies/v1/?key=' + key;

fetch(url)
	.then((res) => {
		return res.json();
	})
	.then((json) => {
		try {
			const serial = JSON.stringify(json.response);

			fs.writeFileSync(fName, serial);
		} catch (err) {
			console.error(err);
		}
	});
