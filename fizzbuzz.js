
$(document).ready(function (){



//vars that will append li with fizzBuzz number to DOM
	var newLi = document.createElement('li');
	newLi.setAttribute('id', 'numLi');

	
//prints fizzBuzz loop
var loop = function () {

	//gets number entered in form
	var num = document.getElementById('num');
	var enteredNum = + num.value;

		//runs loop if number in form is a whole number
		if (isNaN(enteredNum)){
			alert("That's not a number ya dingus!");
		}

		else{

			for (var i = 1; i <= enteredNum; i++) {	

				if (enteredNum % 1 !== 0){

					alert("Enter a whole number, silly pants!");
					break;
				}

				else if ((i%3==0)&&(i%5==0)){
			
					newLi.innerHTML = 'fizzBuzz!!!';
				}

				else if (i%5==0){
			
					newLi.innerHTML = 'buzz';
				}

				else if (i%3==0){
			
					newLi.innerHTML= 'fizz';	
				}

				else {
			
					newLi.innerHTML = i;	
				}	

			//appends fizzbuzz number to ul
			document.getElementById('printOut').appendChild(newLi.cloneNode(true));
			console.log (i);
			}

		}
}

//adds onClick event listener to button
document.getElementById('fizzEnter').addEventListener('click', loop);

});