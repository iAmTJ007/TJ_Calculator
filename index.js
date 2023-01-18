const number=document.querySelectorAll('[data-number]')
const operand=document.querySelectorAll('[data-operand]')
number.forEach((button)=>{
    button.addEventListener('click',()=>{
        up_display(button.textContent) //it will append in an up display for each number
    })
})
operand.forEach((button)=>{
    button.addEventListener('click',()=>{
        up_display(button.textContent) // it will append in an up display for each operand
    })
})



function up_display(value){
    const up_container=document.querySelector('.up')  // displays value
    if(value in number && up_container.textContent==0)up_container.textContent=value
    else up_container.append(value)    
}