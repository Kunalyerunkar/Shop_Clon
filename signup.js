
let userarr = JSON.parse(localStorage.getItem('userdata')) || [];
let form = document.querySelector('form')

document.querySelector('form').addEventListener('submit',createacc)
function createacc(){
    event.preventDefault()
    if(form.pass1.value == form.pass2.value){
        console.log('b')
        let obj = {
            name : form.fname.value,
            lname : form.lname.value,
            email : form.email.value,
            pass1 : form.pass1.value,
            // pass2 : form.pass2.value,
            mob : form.mob.value
           
        }
        console.log('a')
        // if('checked'==form.box.value){
            
        // }
        userarr.push(obj)
        localStorage.setItem('userdata',JSON.stringify(userarr))
        window.location.href= 'login.html'

    }else{
        alert('password is not match')
    }

    
    
}