

function get_stddev(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += Math.pow(arr[i], 2);
	}
	return Math.sqrt(sum/(arr.length - 2));
}

var residuals = "-17.54492552 10.58951822 55.38907493 -373.7431338 365.1952477 -391.8328629 -316.4408211 83.83399086 68.25321004 -192.5287591 -509.6259118 231.2814002 -202.1095949 -1106.598737 -556.1768918 1867.951854 1778.022499 -17.50432411 -22.38428993 478.0593749 399.0074656 -11.28206999 -57.36381979 -386.1213385 -83.74002306 -4.968258843 -18.58003188 -370.9408942 -716.9809904 18.88404211".split(" ");

var residuals_arr = [];
for (var i = 0; i < residuals.length; i++) {
	residuals_arr.push(Number(residuals[i]));
}

console.log(get_stddev(residuals_arr));
