$(document).ready(function() {
	var name;
	var email;
	var counterElement=0;
	name = $.session.get('name');
	var img = '<img src="image/ribbit.gif" id="img" />';

$("#btnMng").click(function() {
	name = $("#name").val();
	email = $("#email").val();
	console.log(name);
	console.log(email);
	console.log('22222222222');
	if(name == null || name == ""){
		alert('Please enter user name. Do not leave it blank before proceed to the next field.');
	}
	if(email == null || email == ""){
		alert('Please enter your email. Do not leave it blank before proceed to the next field.');
	}
	$.session.set('name', name);
	$.session.set('email', email);
	$(location).attr('href', 'playgroundMng.html');
});

$("#btnAdd").click(function() {
	counterElement++;
	//$.cookie('test', counterElement, { expires: 7 });
	console.log(counterElement);
	
	$(img).appendTo('#elements');
	$(img).appendTo('#TA');
});
$("#btnRmv").click(function() {
	if (counterElement != 0){
		counterElement--;
	}
	//$.cookie('test', counterElement, { expires: 7 });
	console.log(counterElement);
	$('#img').remove();
});

$("#btnUser").click(function() {
	name = $("#name").val();
	email = $("#email").val();
	console.log(name);
	console.log(email);
	console.log('11111111111');
	if(name == null || name == ""){
		alert('Please enter user name. Do not leave it blank before proceed to the next field.');
	}
	if(email == null || email == ""){
		alert('Please enter your email. Do not leave it blank before proceed to the next field.');
	}
	$.session.set('name', name);
	$.session.set('email', email);
	window.location.href = 'playgroundUser.html';
});

console.log(name);
var userName = name;
var sees = '';	
var countClick=0;
$("#btnPost").click(function() {
countClick = countClick+2;
var add = $("#add").val();
$.session.set('msg', add);
sees = sees+$.session.get('msg')+';';
// console.log(add);
$('<p>'+userName+ ': '+add+'</p>').appendTo('#msg').css('color','blue');
$("#add").val('');
$('#points').text(countClick).css('color','red');
console.log(sees);
console.log(countClick);

});

/*

$.post("register.php", {
name1: name,
email1: email,
password1: password
}, function(data) {
if (data == 'You have Successfully Registered.....') {
$("form")[0].reset();
}
alert(data);
});
}
*/

});
