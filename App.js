/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function loaded(){
    document.getElementById('login').addEventListener('click', login);
    document.getElementById("closeError").addEventListener("click", closeError);
}

function login(){
    if($("#username").val() === "" || $("#password").val() === "" ){
        window.location.href = 'error.html';
    }else{
        username = $("#username").val();
        password = $("#password").val();
        let user = {username: username, password: password};
        let userJson = JSON.stringify(user);
        fetch('http://localhost:3000/login', {
            method: 'Post',
            body: userJson
        })
        .then(response => {
            if(response.ok){
                window.location.href = 'inicio.html';
            }else{
                window.location.href = 'error.html';
            }
        });
                
    }
}

function error(){
    $('#add-modalerror').modal('show');
}

function closeError(){
    $('#add-modalerror').modal('hide');
} 

$(loaded);