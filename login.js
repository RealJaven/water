function check_value(val)
{
    let username = document.getElementById("username_login").value
    let password = document.getElementById("password_login").value

    if (sessionStorage.getItem(username) == password){
        sessionStorage.setItem('login_flag', 1)
        alert('Login succeed!')
        window.location.href = 'home.html'
    }
    else{
        // TODO alert box
        alert('Login failed')
    }
}

function store_value(val)
{
    let username = document.getElementById("username_register").value
    let password = document.getElementById("password_register").value
    if (verification(username)){
        sessionStorage.setItem(username, password)
        alert('Registration succeed!')
        redirect_to_login()
    }
    else{
        // TODO alert box
        alert('Username already registered')
    }
}

function verification(username){
    if (sessionStorage.getItem(username)){
        return false // username already registered
    }
    else{
        return true // valid username
    }
}

function redirect_to_login(val){
    document.getElementById("registerbox").style.display = 'none'
    document.getElementById("loginbox").style.display = 'block'
}

function redirect_to_register(val){
    document.getElementById("registerbox").style.display = 'block'
    document.getElementById("loginbox").style.display = 'none'
}