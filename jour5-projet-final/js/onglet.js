let boutons = document.querySelectorAll(".onglet button");
        console.log(boutons);
        let paragraphes = document.querySelectorAll(".onglet p");

        for(let i = 0 ; i < paragraphes.length ; i = i + 1){
            paragraphes[i].style["display"] = "none";
        }
        
    paragraphes[0].style["display"] = "block";

    for(let i = 0 ; i < boutons.length ; i = i + 1){
        
        boutons[i].addEventListener("click", function(){
            for(let i = 0 ; i < paragraphes.length ; i = i + 1){
                paragraphes[i].style["display"] = "none";
            }
            let index = this.dataset.position; // 3
            // let text = this.innerHTML ;
            // alert(text);
            paragraphes[index].style["display"] = "block";
        })
    }