var h3 = document.querySelector('.h3');
var calcBtn = document.getElementById('calcBtn');

calcBtn.addEventListener("click", function() {
	var small = document.getElementById('small').value;
	var medium = document.getElementById('medium').value;
	var large = document.getElementById('large').value;

	var sum = (Number(small)*7)+ 
			  (Number(medium)*9)+ 
			  (Number(large)*11)

	h3.textContent = 'De totale bedrag is: ' + sum; 
}) 
