window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var Password = document.forms["myForm"] ["password"];
    var RetypePassword = document.forms["myForm"] ["Retypepassword"];
    
    if(Password.value != RetypePassword.value){
        return false;
    }
    
}