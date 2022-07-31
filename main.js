let tok = [];

function drawScr() {
	let buff = serialExpr(tok);

	$("#scr").text(buff);
}

function eval(tok) {
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
		eval(tok);
	});
});
