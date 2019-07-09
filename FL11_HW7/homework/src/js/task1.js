var login;
var password;
var old_pass;
var new_pass;
var new_pass_repeat;
var choice;

login=prompt("Enter login", null);
if (login==null){
    alert("Canceled");
}
else if (login.length<6){
    alert("I don't know any emails having name length less than 6 symbols");
}
else if (login=="user@gmail.com" || login=="admin@gmail.com"){
    password=prompt("Enter password", null);
    if (password==null){
        alert("Canceled");
    }
    else if(login=="user@gmail.com" && password=="UserPass" || login=="admin@gmail.com" && password=="AdminPass"){
        alert("Welcome");
    }
    else{
        alert("Wrong password");
    }
}
else{
    alert("I don’t know you");
}



choice=confirm("Do you want to change your password?");
if (choice==false){
    alert("You have failed the change.");
}
else{
    old_pass=prompt("Enter your old password", null);
    if (old_pass==null){
        alert("Canceled");
    }
    else if (login=="user@gmail.com" && password=="UserPass" || login=="admin@gmail.com" && password=="AdminPass"){
        new_pass=prompt("Enter new password", null);
        if (new_pass.length<5){
            alert("It’s too short password. Sorry.");
        }
        else{
            new_pass_repeat=prompt("Enter new password again");
            if (new_pass==new_pass_repeat){
                alert("You have successfully changed your password");
            }
            else{
                alert("You wrote the wrong password");
            }
        }
    }
    else{
        alert("Wrong password");
    }
}