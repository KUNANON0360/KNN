window.onload = pageLoad;
var Input_regis = [];

function pageLoad(){
	var form = document.getElementById("myform");
 	form.onsubmit = validateForm;
    
}

// function myFormfunction(){
//     alert("ถะ ถะ ถูกต้องนะค้าบ");
//     var pass = document.forms["myform"]["password"];
//     var repass = document.forms["myform"]["retypepassword"];
// }
function validateForm() {
    var pass = document.forms["myform"]["password"];
    var repass = document.forms["myform"]["retypepassword"];
    if(pass.value == repass.value)
    {
        // myFormfunction();
        alert("ผ่านการสมัครเรียบร้อย");
    }
    else if(pass.value != repass.value)
    {
        alert("รหัสผิด");
        
        return false;
    }
}
