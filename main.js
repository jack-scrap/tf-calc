let buff = '';

function drawScr() {
	$('#scr').text(buff);
}

$(document).ready(function() {
	// screen
	drawScr();

	for (let i = 0; i < 9; i++) {
		$('#no').append(`<div class='btn no'>${i + 1}</div>`);
	}
	$('#no').append(`<div class='btn no'>${0}</div>`);

	$('#op').append('<div class="btn op">+</div>')
	$('#op').append('<div class="btn op">-</div>')
	$('#op').append('<div class="btn op">*</div>')
	$('#op').append('<div class="btn op">/</div>')

	$('#pure').append('<div class="btn pure" id="scrap"><img src="res/icon/scrap.png" /></div>');
	$('#pure').append('<div class="btn pure" id="rec"><img src="res/icon/rec.png" /></div>');
	$('#pure').append('<div class="btn pure" id="ref"><img src="res/icon/ref.png" /></div>');
	$('#pure').append('<div class="btn pure" id="key"><img src="res/icon/key.png" /></div>');

	$('#no').append('<div class="btn" id="enter">Enter</div>');
	$('#no').append('<div class="btn" id="clr">CLR</div>');

	// ctrl
	$('.no').mousedown(function() {
		let i = $(this).index() + 1;

		buff += i.toString();

		drawScr();
	});

	$('#scrap').mousedown(function() {
		let val = metal['scrap'];

		buff += no.toString();

		drawScr();
	});

	$('#rec').mousedown(function() {
		let val = metal['rec'];

		buff += no.toString();

		drawScr();
	});

	$('#ref').mousedown(function() {
		let val = metal['ref'];

		buff += no.toString();

		drawScr();
	});

	$('.op').mousedown(function() {
		buff += $(this).text();

		drawScr();
	});

	$('#clr').mousedown(function() {
		buff = '';

		drawScr();
	});

	$('#enter').mousedown(function() {
		let res = eval(buff);

		let fmt = ref(res);

		buff = fmt + ' ref';

		drawScr();
	});
});
