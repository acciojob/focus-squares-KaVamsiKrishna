const squares = document.querySelectorAll('.square');
squares.forEach((val1)=>{
    val1.addEventListener('mouseenter',()=>{
        squares.forEach((val2)=>{
            if(val1 !== val2){
                val2.style.backgroundColor = "#6F4E37"
            }
        })
    })
})
squares.forEach((val1)=>{
    val1.addEventListener('mouseleave',()=>{
        squares.forEach((val2)=>{
            if(val1 !== val2){
                val2.style.backgroundColor = "#E6E6FA"
            }
        })
    })
})