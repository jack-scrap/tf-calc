let tok = [];

function drawScr() {
	let buff = serialExpr(tok);

	$("#scr").text(buff);
}

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

		switch (tok[i]) {
			case "+":
				res += tok[i + 1];

				break;

			case "-":
				res -= tok[i + 1];

				break;

			case "*":
				res *= tok[i + 1];

				break;

			case "/":
				res *= tok[i + 1];

				break;
		}

		i += 1 + 1;
	}

	return res;
}

$(document).ready(function() {
	// screen
	drawScr();

	for (let i = 0; i < 9; i++) {
		$("#no").append(`<div class="btn no">${i + 1}</div>`);
	}
	$("#no").append(`<div class="btn no">${0}</div>`);

	$("#op").append("<div class='btn op'>+</div>")
	$("#op").append("<div class='btn op'>-</div>")
	$("#op").append("<div class='btn op'>*</div>")
	$("#op").append("<div class='btn op'>/</div>")

	$("#pure").append("<div class='btn pure' id='scrap'><img src='res/icon/scrap.png' /></div>");
	$("#pure").append("<div class='btn pure' id='rec'><img src='res/icon/rec.png' /></div>");
	$("#pure").append("<div class='btn pure' id='ref'><img src='res/icon/ref.png' /></div>");
	$("#pure").append("<div class='btn pure' id='ref'><img src='res/icon/key.png' /></div>");

	$("#no").append("<div class='btn' id='enter'>Enter</div>");
	$("#no").append("<div class='btn' id='clr'>CLR</div>");

	// ctrl
	$(".no").mousedown(function() {
		tok.push(parseInt($(this).text()));

		drawScr();
	});

	$("#scrap").mousedown(function() {
		tok.push(0.11);

		drawScr();
	});

	$("#rec").mousedown(function() {
		tok.push(0.33);

		drawScr();
	});

	$("#ref").mousedown(function() {
		tok.push(1.0);

		drawScr();
	});

	$(".op").mousedown(function() {
		tok.push($(this).text());

		drawScr();
	});

	$("#clr").mousedown(function() {
		tok = [];

		drawScr();
	});

	$("#enter").mousedown(function() {
		let res = eval(tok);

		tok = [
			res
		];

		drawScr();
	});
});
