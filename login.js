console.log("p");
function login()
{
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;



    if(name=='world' && password=='123')
    {
       location.href("https://www.google.com");
    }
    else{
        window.alert("login unsuccessfully");
    }
}
