var a="";
function input(val){
    a+=val.toString();
    document.getElementById("screen").value=a;
}
function output(){
    otp=eval(document.getElementById("screen").value=a);
    document.getElementById("screen").value=otp;
    a="";
}
function clr(){
    var clr=document.getElementById("screen").value.slice(0,-1);
    document.getElementById("screen").value=clr;
    a=a.slice(0,-1);
}
function ac(){
    document.getElementById("screen").value="";
    a=""
}
function pom(){
    var minus="-"
    var pom=minus.concat(document.getElementById("screen").value);
    document.getElementById("screen").value=pom;
    a=minus.concat(a);
}