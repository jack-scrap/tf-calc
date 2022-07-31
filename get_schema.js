const fetch = require('node-fetch');
const fs = require('fs');

const confName = 'conf.json';
const schemaName = 'schema.json';

let key;
try {
	const buff = fs.readFileSync(confName);

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

			fs.writeFileSync(schemaName, serial);
		} catch (err) {
			console.error(err);
		}
	});
