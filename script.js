
function checkmail(){
    var input = document.getElementById("in-email").value;
    var mes = document.getElementById("er-ms");
    var ic = document.getElementById("er-ic");

    if( (input.includes("@") == true && input.includes(".com")==true) || input==""){
        mes.style.display="none";
        ic.style.display="none";
    }
    else{
        mes.style.display="block";
       ic.style.display="block";
    }
}