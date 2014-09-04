
$(document).ready(function (){



//vars that will append li with fizzBuzz number to DOM
	var newLi = document.createElement('li');
	newLi.setAttribute('id', 'numLi');

	
//prints fizzBuzz loop
var loop = function () {

	//gets number entered in form
	var num = document.getElementById('num');
	var startingNum = num.value;

	for (startingNum; startingNum <= 100; startingNum++) {	

	
		if ((startingNum%3==0)&&(startingNum%5==0)){
			
			newLi.innerHTML = 'fizzBuzz!!!';
		}

		else if (startingNum%5==0){
			
			newLi.innerHTML = 'buzz';
		}

		else if (startingNum%3==0){
			
			newLi.innerHTML= 'fizz';	
		}

		else {
			
			newLi.innerHTML = startingNum;	
		}

		document.getElementById('printOut').appendChild(newLi.cloneNode(true));
		console.log (startingNum);
	}
}



//adds onClick event listener to button
document.getElementById('fizzEnter').addEventListener('click', loop);

});