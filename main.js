let tok = [];

function drawScr() {
	let buff = serialExpr(tok);

	$("#scr").text(buff);
}

function ref(scrap) {
	let whole = scrap / 9;
	whole = parseInt(whole.toFixed());

	let dec = scrap % 9;
	dec = parseInt(dec.toFixed());

	return whole + (dec / 10) + (dec / 100);
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
	$("#no").append("<div class='btn' id='spc'>SPC</div>");

	// ctrl
	$(".no").mousedown(function() {
		tok.push(parseInt($(this).text()));

		drawScr();
	});

	$("#scrap").mousedown(function() {
		tok.push(1);

		drawScr();
	});

	$("#rec").mousedown(function() {
		tok.push(3);

		drawScr();
	});

	$("#ref").mousedown(function() {
		tok.push(9);

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

	$("#spc").mousedown(function() {
		tok.push(" ");

		drawScr();
	});

	$("#enter").mousedown(function() {
		let res = eval(tok);

		let fmt = ref(res);

		tok = [
			fmt + " ref"
		];

		drawScr();
	});
});
