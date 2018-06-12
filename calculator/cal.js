function myfunc(){
	document.getElementById('exp').value += this.value;
}


function clearfn(){
	document.getElementById('exp').value = '';
}

function evalExp(){
	document.getElementById('exp').value = eval(document.getElementById('exp').value);
}

document.getElementById('1').onclick = myfunc;
document.getElementById('2').onclick = myfunc;
document.getElementById('3').onclick = myfunc;
document.getElementById('4').onclick = myfunc;
document.getElementById('5').onclick = myfunc;
document.getElementById('6').onclick = myfunc;
document.getElementById('7').onclick = myfunc;
document.getElementById('8').onclick = myfunc;
document.getElementById('9').onclick = myfunc;
document.getElementById('0').onclick = myfunc;
document.getElementById('+').onclick = myfunc;
document.getElementById('-').onclick = myfunc;
document.getElementById('/').onclick = myfunc;
document.getElementById('*').onclick = myfunc;

document.getElementById('c').onclick = clearfn;
document.getElementById('=').onclick = evalExp;


