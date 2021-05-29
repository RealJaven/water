function downloadmap(){
        alert('Map downloaded!')
    }

    function update(el, val){
        el.innerHTML = val;
        if (el.id == 'demo'){
            dynamic_change(val);
        }
        
        // document.getElementById('demo').innerHTML = val;
    }

    function open_commentbox(val){
        document.getElementById("commentbox").style.display = 'block'
    }
    
    function exit_commentbox(val){
        document.getElementById("commentbox").style.display = 'none'
    }

    function close_commentbox(val){
        if (!sessionStorage.getItem('login_flag')){
            document.getElementById("commentbox").style.display = 'none'
            alert("You haven't logged in yet!")
        }
        else {
            document.getElementById("commentbox").style.display = 'none'
            alert('Your comment has been recorded!')
        }
        
    }

    function dynamic_change(val){
        var item_array = [document.getElementById("item_1"),
                          document.getElementById("item_2"),
                          document.getElementById("item_3"),
                          document.getElementById("item_4"),
                          document.getElementById("item_5")]
        var distance_array = [67, 142, 155, 215, 468]
        
        for (var i =0; i < 5; i++){
            if (val >= distance_array[i]){
                item_array[i].style.display = 'block';
            }
            else{
                item_array[i].style.display = 'none';
            }
        }

    }