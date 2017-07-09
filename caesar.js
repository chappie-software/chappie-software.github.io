/* Сам Цезарь */

function сaesar(text, key, decode) {
	
    var textLetter, keyLetter, result = "", conv = decode ? -1 : 1;
    key = key ? key : " ";
    for (textLetter = keyLetter = 0; textLetter < text.length; textLetter++, keyLetter++) {
        if (keyLetter >= key.length) keyLetter = 0; result += String.fromCharCode( text.charCodeAt(textLetter) + conv * key.charCodeAt(keyLetter) );
 
    }
    return result;
}

code_button.onclick = function() {
    text_code.value = сaesar(text.value, key.value)
}

decode_button.onclick = function() {
    text_decode.value = сaesar(text_code.value, key.value, true)
}

/* ============================================================ */
/* ============================================================ */
/* ============================================================ */

/* Дополнение: расшифровка без ключа */

auto_decode_button.onclick = function() {
	document.getElementById('auto_text_decode').value = "";
	var auto_key = 0;
	var auto_dekey = document.getElementById('auto_num_lesson_decode').value;
	while (0 < auto_dekey) {
		document.getElementById('auto_num_decode').value = auto_dekey;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		auto_dekey -= 1;
		document.getElementById('auto_num_decode').value = "";
	}
}

special_auto_decode.onclick = function() {
	document.getElementById('auto_text_decode').value = "";
	var special_key1 = "qwerty";
	var special_key2 = "123";
	var special_key3 = "squ33gee";
	var special_key4 = "qaz";
	var special_key5 = "12345";
	var special_key6 = "qwerty123";
	var special_key7 = "daoss";
	var special_key8 = "123qwerty";
	var special_key9 = "qaz123";
	var special_key10 = "123qaz";
	
		document.getElementById('auto_num_decode').value = special_key1;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		document.getElementById('auto_num_decode').value = "";
		
		document.getElementById('auto_num_decode').value = special_key2;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		document.getElementById('auto_num_decode').value = "";
		
		document.getElementById('auto_num_decode').value = special_key3;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		document.getElementById('auto_num_decode').value = "";
		
		document.getElementById('auto_num_decode').value = special_key4;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		document.getElementById('auto_num_decode').value = "";
		
		document.getElementById('auto_num_decode').value = special_key5;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		document.getElementById('auto_num_decode').value = "";
		
		document.getElementById('auto_num_decode').value = special_key6;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		document.getElementById('auto_num_decode').value = "";
		
		document.getElementById('auto_num_decode').value = special_key7;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		document.getElementById('auto_num_decode').value = "";
		
		document.getElementById('auto_num_decode').value = special_key8;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		document.getElementById('auto_num_decode').value = "";
		
		document.getElementById('auto_num_decode').value = special_key9;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		document.getElementById('auto_num_decode').value = "";
		
		document.getElementById('auto_num_decode').value = special_key10;
		auto_text_decode.value += сaesar(text_code.value, auto_num_decode.value, true);
		auto_text_decode.value += "\r\n";
		document.getElementById('auto_num_decode').value = "";
}

/* ============================================================ */
/* ============================================================ */
/* ============================================================ */

/* Очистка поля */

code_clear.onclick = function() {
    document.getElementById('key').value = "";
	document.getElementById('text').value = "";
	document.getElementById('text_code').value = "";
	document.getElementById('text_decode').value = "";
	document.getElementById('auto_num_lesson_decode').value = "";
	document.getElementById('auto_text_decode').value = "";
	document.getElementById('auto_num_decode').value = "";
}

/* ============================================================ */
/* ============================================================ */
/* ============================================================ */

/* Скрытие/ Возвращение CHAPPiE */

function hide(){
    document.getElementById("auto_hidden").style.display = "none";
    visible = false;
	document.getElementById("logo").innerHTML="<div onclick='not_hide()'>CHAPPiE disguise</div>";
}

function not_hide(){
	document.getElementById("auto_hidden").style.display = "block";
	visible = true;
	document.getElementById("logo").innerHTML="CHAPPiE software";
}

/* ============================================================ */
/* ============================================================ */
/* ============================================================ */