const number=document.querySelectorAll('[data-number]')
const operand=document.querySelectorAll('[data-operand]')
const equalskey=document.querySelector('[data-equal]')
const backspace=document.querySelector('.delete')

backspace.addEventListener('click',()=>{     //slice from 1st to second last element of display and replace it
const up_disp=document.querySelector('.up') //with original display such that last element is deleted
const sliced_disp=up_disp.textContent.slice(0,-1) //but dont do it when length of display is 1
if(up_disp.textContent.length>1)up_disp.textContent=sliced_disp 
else if(up_disp.textContent.length==1)up_disp.textContent='0'  
             

})
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