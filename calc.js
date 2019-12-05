function calc() {

	let length = parseInt(document.querySelector("#length-drop-tri").value);
	let angle = parseInt(document.querySelector("#ang").value);

	let res = length / (Math.tan(angle * Math.PI / 180));

	let dropHeight = res;

	alert(res);
	alert(60 - dropHeight);

}

function manualCalc(rampAngle, distance) {

	let res = distance / (Math.tan(rampAngle * Math.PI / 180));

	let dropHeight = res;

	console.log(`Travel Height: ${dropHeight}in`);
	console.log(`Rope Length: ${60 - dropHeight}in`);
	console.log(`Rope Length For Clearence: ${60 - dropHeight - 1.5}in`); // subtract half bucket height to ensure it doesnt hit too soon

}