$(document).ready(function() {
	for (let i = 0; i < 1 + 9; i++) {
		$("#keyPad").append(`<div class="btn">${i}</div>`);
	}

	$("#keyPad").append("<div class='btn'>Enter</div>");
});
