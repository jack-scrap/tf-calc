let buff = "";
let tok = [];

function drawScr() {
	buff = serialExpr(tok);

	$("#scr").text(buff);
}

$(document).ready(function() {
	// screen
	drawScr();

	for (let i = 0; i < 9; i++) {
		$("#keyPad").append(`<div class="btn no">${i + 1}</div>`);
	}
	$("#keyPad").append(`<div class="btn no">${0}</div>`);

	$("#keyPad").append("<div class='btn metal'><img src='res/icon/scrap.png' /></div>");
	$("#keyPad").append("<div class='btn metal'><img src='res/icon/rec.png' /></div>");
	$("#keyPad").append("<div class='btn metal'><img src='res/icon/ref.png' /></div>");

	$("#keyPad").append("<div class='btn' id='enter'>Enter</div>");
	$("#keyPad").append("<div class='btn' id='clr'>CLR</div>");

	// ctrl
	$(".no").mousedown(function() {
		tok.push($(this).text());

		drawScr();
	});

	$("#clr").mousedown(function() {
		tok = [];

		drawScr();
	});
});
