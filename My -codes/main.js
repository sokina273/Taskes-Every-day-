let small_shoes = document.querySelectorAll(".small_shoes img") ;

let bigger_image = document.querySelector(".bigger_image img") ;
let shadow = document.querySelector(".shadow");
let shoes_word = document.querySelector(".shoes_word");


small_shoes.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        small_shoes.forEach((li2)=>{
            li2.classList.remove("active")
        })
        e.target.classList.add("active");
        e.target.style.borderColor = e.target.dataset.bg;
       bigger_image.src = e.target.src;
       shadow.style.background = e.target.dataset.bg;
       shoes_word.style.color = e.target.dataset.bg;

    })

})
