let diapositives = [
    "https://via.placeholder.com/300x200?text=diapo2",
    "https://via.placeholder.com/300x200?text=diapo3",
    "https://via.placeholder.com/300x200?text=diapo4",
    "https://via.placeholder.com/300x200?text=diapo5",
];

let index = 0 ;
document.querySelector(".diaporama").setAttribute("src", diapositives[0]);

setInterval(function(){
    console.log(index);
    if(index >= diapositives.length - 1 ){
        index = 0;
    }else {
        index = index + 1 ;
    }

    document.querySelector(".diaporama").setAttribute("src", diapositives[index]);
}, 1500 );