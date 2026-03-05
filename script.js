const button = document.getElementById("button");
const texte = document.getElementById("texte");
const h3 = document.getElementById("h3");
const h4 = document.getElementById("h4");

button.onclick = function(){

    if(texte.value === "ivanovitch"){

        h4.style.display = "block";
          h3.style.display = "none";
    
    }
    else if(texte.value === 0){

         h3.style.display = "none";
          h4.style.display = "none";
    }

    else{
  h3.style.display = "block";
    h4.style.display = "none";

    }

}

