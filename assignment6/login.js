window.onload = loginLoad;


function loginLoad(){
	var UsernameCurrent = document.getElementById("myLogin");
	UsernameCurrent.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var UsernameLogin = document.forms["myLogin"] ["username"];
	console.log(UsernameLogin.value);
	var PasswordLogin = document.forms["myLogin"] ["password"];
	console.log(PasswordLogin.value);

	const qureySting = window.location.search;
	console.log(qureySting);

	const urlParams = new URLSearchParams(qureySting);
	const UsernameRegister = urlParams.get('username')
	console.log(UsernameRegister);

	const PasswordRegister = urlParams.get('password');
	console.log(PasswordRegister);

	if(UsernameLogin.value != UsernameRegister || PasswordLogin.value != PasswordRegister){
		alert("Invald username or password");
		return false;
	}
}
			