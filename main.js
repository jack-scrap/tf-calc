$(document).ready(function() {
	for (let i = 0; i < 9; i++) {
		$("#keyPad").append(`<div class="btn">${i + 1}</div>`);
	}
	$("#keyPad").append(`<div class="btn">${0}</div>`);

	$("#keyPad").append("<div class='btn' id='enter'>Enter</div>");
	$("#keyPad").append("<div class='btn' id='clr'>CLR</div>");
});
