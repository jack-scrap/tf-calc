var buff = '';

var keyPrice;

function drawScr() {
	$('#scr').text(buff);
}

$(document).ready(function() {
	fetch("schema.json")
  	.then((response) => {
			return response.json();
  	})
  	.then((json) => {
			keyPrice = json['currencies']['keys']['price']['value'];
  	});

	// screen
	drawScr();

	for (let i = 0; i < 9; i++) {
		$('#no').append(`<div class='btn no'>${i + 1}</div>`);
	}
	$('#no').append(`<div class='btn no'>${0}</div>`);

	$('#op').append('<div class="btn op"><span>+</span</div>')
	$('#op').append('<div class="btn op"><span>-</span</div>')
	$('#op').append('<div class="btn op"><span>*</span</div>')
	$('#op').append('<div class="btn op"><span>/</span</div>')

	$('#pure').append('<div class="btn pure" id="scrap"><span><img src="res/icon/scrap.png" /></span></div>');
	$('#pure').append('<div class="btn pure" id="rec"><span><img src="res/icon/rec.png" /></span></div>');
	$('#pure').append('<div class="btn pure" id="ref"><span><img src="res/icon/ref.png" /></span></div>');
	$('#pure').append('<div class="btn pure" id="key"><span><img src="res/icon/key.png" /></span></div>');

	$('#no').append('<div class="btn" id="enter"><span>Enter</span></div>');
	$('#no').append('<div class="btn" id="clr"><span>CLR</span></div>');

	// ctrl
	$('.no').mousedown(function() {
		let i = $(this).index() + 1;

		buff += i.toString();

		drawScr();
	});

	$('#scrap').mousedown(function() {
		let val = metal['scrap'];

		buff += val.toString();

		drawScr();
	});

	$('#rec').mousedown(function() {
		let val = metal['rec'];

		buff += val.toString();

		drawScr();
	});

	$('#ref').mousedown(function() {
		let val = metal['ref'];

		buff += val.toString();

		drawScr();
	});

	$('#key').mousedown(function() {
		let val = keyPrice;

		buff += val;

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
