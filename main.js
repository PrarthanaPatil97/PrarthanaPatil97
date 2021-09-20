/*
	WEB 303
	Starting file for Assignment 1 
	{Prarthana Purav Patil}
*/



$(document).ready(function(){
	$("#salary").keyup(function(){
		myfun();
	});
	$("#percent").keyup(function(){
		myfun();
	});
});


function myfun(){
	var salary = $("#salary").val();
	var percent = $("#percent").val();
	var spend = (salary * percent) / 100;
	var temp = spend.toFixed(2);
	$("#spend").text('$'+temp);
}
