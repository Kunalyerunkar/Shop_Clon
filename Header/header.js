document.querySelector("#cart").addEventListener("click",show);
function show(event){
    event.preventDefault();
    document.querySelector("#navbarSection1").style.visibility="visible";
}
document.querySelector("#cross").addEventListener("click",show1);
function show1(event){
    event.preventDefault();
    document.querySelector("#navbarSection1").style.visibility="hidden";
}

document.querySelector("#menu").addEventListener("click",show2);
function show2(event){
    event.preventDefault();
    document.querySelector("#menuSection").style.visibility="visible";
}
document.querySelector("#menu").addEventListener("dblclick",show3);
function show3(event){
    event.preventDefault();
    document.querySelector("#menuSection").style.visibility="hidden";
}



