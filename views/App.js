/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function loaded(){
    document.getElementById('login').addEventListener('click', login);
    document.getElementById("closeError").addEventListener("click", closeError);
}

function login(){
        username = $("#username").val();
        password = $("#password").val();
        let user = {username: username, password: password};
        let userJson = JSON.stringify(user);
	console.log(userJson);
        fetch('https://proyectoredes1.australiacentral.cloudapp.azure.com/login', {
            method: 'Post',
            body: userJson
        })
        .then(response => {
		console.log('dESPUES post');
            if(response.ok){
		console.log('response ok');
                window.location.href = 'inicio';
            }else{
		console.log('chotz');
		window.location.href = 'error';
            }
        });
}

function error(){
    $('#add-modalerror').modal('show');
}

function closeError(){
    $('#add-modalerror').modal('hide');
} 

$(loaded);
