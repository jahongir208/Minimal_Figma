let btnOpen = document.querySelector(".btn")
let btnClose = document.querySelector(".close")
let list = document.querySelector(".list")


btnOpen.addEventListener("click", () => {
    function open() {
        list.style.display="block"
        

    }
    open()
})
btnClose.addEventListener("click",()=>{
    function close(){
        list.style.display='none'
    }
    close()
})




