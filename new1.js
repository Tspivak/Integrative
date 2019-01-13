$(document).ready(function() {
$("#register").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var type = $("#type").val();

console.log(type);
$.session.set('name', name);
$.session.set('email', email);
$.session.set('type', type);
console.log(type);

if(type="user"){
$(location).attr('href', 'playgroundUser.html');
} else {
$(location).attr('href', 'playgroundMng.html');
}
});
var userName = $("#name").val();
var sees = '';	
$("#btn").click(function() {

var add = $("#add").val();
$.session.set('msg', add);
sees = sees+$.session.get('msg')+';';
// console.log(add);
$('<p>'+userName + ': '+add+'</p>').appendTo('#msg');
$("#add").val('');
console.log(sees);
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
