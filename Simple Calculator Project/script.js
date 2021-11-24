function getHistory(){
	return document.getElementById('history-value').innerText;
}

function printHistory(num){
	document.getElementById('history-value').innerText=num;
}

function getOutput(){
	return document.getElementById('input-value').innerText;
}

function printOutput(num){
	if (num == "") {
		document.getElementById('input-value').innerText=num;
	}
	else{
		document.getElementById('input-value').innerText=getFormattedNumber(num);
	}
	
}

function getFormattedNumber(num){
	if (num == "-") {
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

function reverseFormattedNumber(num){
	return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click',function(){
		if (this.id == "clear") {
			printOutput("");
			printHistory("");
		}
		else if(this.id == "backspace"){
			var output= reverseFormattedNumber(getOutput()).toString();
			if (output) {
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			//console.log("hi");
			var output= getOutput();
			var history= getHistory();
			if (output == "" && history != "") {
				if (isNaN(history[history.length-1])) {
					history = history.substr(0,history.length-1);
				}
			}
			if (output != '' || history!= '') {
			output = output==""? output:reverseFormattedNumber(output);
			history = history + output;
			 if (this.id == "=") {
			 	console.log('hi');
			 	var result = eval(history);
			 	printOutput(result);
			 	printHistory("");
			 }
			 else{
			 	history= history+this.id;
			 	printHistory(history);
			 	printOutput("");
			 }
			}
		}
	});

}

var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click',function(){
		var output = reverseFormattedNumber(getOutput());
		if (output != NaN) {
			output = output + this.id;
			printOutput(output);
		}
	});

}



