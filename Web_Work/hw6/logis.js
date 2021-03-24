const queryString = window.location.search;
 	console.log(queryString);

 	const urlParams = new URLSearchParams(queryString);
 	const UsernameCon = urlParams.get('username');
	 console.log(UsernameCon);
 	const passwordCon = urlParams.get('password');
	
window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("mylogin");
 	form.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.forms["mylogin"]["username"];
    var password = document.forms["mylogin"]["password"];
	if(username.value != UsernameCon || password.value != passwordCon)
	{
		alert(" พบความผิดพลาด กรุณาตรวจสอบอีกครั้ง ");
		return false;
	}
	else
	{
		alert("รหัสถูกต้อง");
		
	}
}