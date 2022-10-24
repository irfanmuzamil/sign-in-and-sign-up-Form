// ------------------------sign up
var signUplist = []
function  gotoSignIn(){     
    
    var signUpData= {
        first_name: document.getElementById("firstName").value,
        last_name: document.getElementById("lastName").value,
        mail: document.getElementById("Email").value,
        mobile_phone: document.getElementById("mobilePhone").value,
        new_password: document.getElementById("newPass").value,

    }
    signUplist.push(signUpData)
    alert("Check console to API data")
    console.log(signUplist)

    var forms =document.getElementById("resetSignUpForm")
    forms.reset()
}

// ------------------------sign In

var signInlist =[]
function gotoSignUp(){

    var signInData= {
        mail: document.getElementById("email").value,
        password: document.getElementById("pass").value,
    }
    signInlist.push(signInData)
    alert("Check console for API data")
    console.log(signInlist)

    var forms =document.getElementById("resetSignInForm")
    forms.reset()
}
// direct send to the second page

function sendtoSignInPage(){
    document.getElementById("signUp").style.display="none"
    document.getElementById("signIn").style.display="block"
}
function sendtoSignUpPage(){
    document.getElementById("signUp").style.display="block"
    document.getElementById("signIn").style.display="none"
}









