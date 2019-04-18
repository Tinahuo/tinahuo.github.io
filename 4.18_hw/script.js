function square(){
    var square=document.getElementById('square-input').value
	var result=square**2
    alert("The result of squaring the number "+square+" is "+result+".")
}

function halfNumber(){
    var half=document.getElementById('half-input').value 
    alert("Half of "+ half+" is "+half/2+".")
}

function percentOf(){
    var number1=document.getElementById('percent1-input').value 
    var number2=document.getElementById('percent2-input').value
	var percent= number1/number2*100
	var rounded = percent.toFixed(2);
    alert(number1+" is "+rounded+"% of "+number2+".")
}

function areaOfCirle(){
    var radius=document.getElementById('area-input').value
	var area=radius**2*3.1415926
	var rounded2 = area.toFixed(2);
    alert("The area for a circle with "+radius+" is "+ rounded2+".")
}