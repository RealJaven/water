function check_log_out(){
    
    if (!sessionStorage.getItem('login_flag')){
        alert('No account has signed in!')
    }
    else {
        sessionStorage.removeItem('login_flag');
        alert('Sign out succeed!!')
    }
}

function downloadmap(){
    alert('Map downloaded!')
}