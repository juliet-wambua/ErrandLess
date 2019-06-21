class User{
    constructor( username, email, password ){
        this.username = username;
        this.email = email;
        this.password = password;
    }
};


function Signup_form(){
    let sign_up_form = `
        <form  onsubmit="event.preventDefault(); axeit();" id='usf'>
            <label for="full_name">Full Name</label>
            <input name="full_name" type="text" id="f_name">
            <br>
            <label for="email">Email</label>
            <input type="email" name="email" id="mail">
            <br>
            <label for="password">Password</label>
            <input type="password" name="password" id="pass">
            <br>
            <label for="con_pass">confirm password</label>
            <input type="password" name="con_pass" id="c_pass">
            <br>
            <button onclick="">Sign up</button>
        </form>
    `;
    let app = document.getElementById('sur');
    app.parentNode.removeChild(app);
    $('#s_f').append(sign_up_form);
};

let users_list = [];

function axeit(){
    let full_name = $( '#f_name' ).val();
    let email = $( '#mail' ).val();
    let password = $( '#pass' ).val();
    let confirm_pass = $( '#c_pass' ).val();

    // create a user instance;
    let new_user = new User( full_name, email, password );
    users_list.push(new_user);
    let app = document.getElementById('usf');
    app.parentNode.removeChild(app);
    console.log(users_list)
    $('body').prepend(`<button id="sur" onclick="Signup_form()">Make An Account  </button>`)
    sessionStorage.clear();
    sessionStorage.setItem('users',JSON.stringify(users_list));
    console.log( showresults())
};

function showresults(){
    var results = JSON.parse(sessionStorage.users);
    console.log('results', results);
    results.forEach((item,index,array)=>{
        let itemed = `user ${item.username} has email ${item.email}`
        $('#data').append(itemed);
    })
};