$(document).ready(function() {
	for (let i = 0; i < 9; i++) {
		$("#keyPad").append(`<div class="btn">${i + 1}</div>`);
	}
	$("#keyPad").append(`<div class="btn">${0}</div>`);

	$("#keyPad").append("<div class='btn metal'><img src='res/icon/scrap.png' /></div>");
	$("#keyPad").append("<div class='btn metal'><img src='res/icon/rec.png' /></div>");
	$("#keyPad").append("<div class='btn metal'><img src='res/icon/ref.png' /></div>");

	$("#keyPad").append("<div class='btn' id='enter'>Enter</div>");
	$("#keyPad").append("<div class='btn' id='clr'>CLR</div>");

	$("#clr").mousedown(function() {
		$('#scr').empty();
	});
});
