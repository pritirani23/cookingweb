function  onClickMenu(){
    document.getElementById("menu").classList.toggle("icon")
    document.getElementById("nav").classList.toggle("change")
}



let open  = document.querySelector(".open")    // TARGETING button

let box   = document.querySelector(".box") // TARGETING Elements

let close  = document.querySelector(".close")    // TARGETING button


open.addEventListener('click', function(){
    // console.log("click is working")
    box.classList.add("active")
})


close.addEventListener('click', function(){
    //console.log("click is working")
    box.classList.remove("active")
})
  
