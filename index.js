const number=document.querySelectorAll('[data-number]')
const operand=document.querySelectorAll('[data-operand]')
const equalskey=document.querySelector('[data-equal]')
const backspace=document.querySelector('.delete')
let op=''
let n1=""
let n2=""
backspace.addEventListener('click',()=>{     //slice from 1st to second last element of display and replace it
const up_disp=document.querySelector('.up') //with original display such that last element is deleted
const sliced_disp=up_disp.textContent.slice(0,-1) //but dont do it when length of display is 1
if(up_disp.textContent[-1]=='+' && up_disp.textContent.length>1){
    op==''
    up_disp.textContent=sliced_disp
}
else if(op!='' && up_disp.textContent.length>1){
    n2=n2.slice(0,-1)
    up_disp.textContent=sliced_disp
}
else if(op=='' && up_disp.textContent.length>1){
    n1=n1.slice(0,-1)
    up_disp.textContent=sliced_disp
}
else if(up_disp.textContent.length==1)up_disp.textContent='0'  


             

})
number.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(op!='')  // if operator already used then it must be n2 so we store it as string
        {
            n2=n2.concat(button.textContent)
        }
        up_display(button.textContent) //it will append in an up display for each number
    })
})
operand.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(op==''){      //if operator never used then obviously it is n1 so store it
        const up_container=document.querySelector('.up')
         n1=up_container.textContent
         op=button.textContent
        }
        else if(op!=''){   // if operator used already then calculate previous 
            let a=calculate(n1,op,n2)
            op=button.textContent
            n2=''
            n1=a
        }
        up_display(button.textContent) // it will append in an up display for each operand
    })
})
equalskey.addEventListener('click',()=>{
    calculate(n1,op,n2)
    n1=""
    n2=''
    op=''
})




function up_display(value){
    const up_container=document.querySelector('.up')  // displays value
    if(value in number && up_container.textContent==0)up_container.textContent=value
    else up_container.append(value)    
}
function calculate(n1,op,n2){
    const up_container=document.querySelector('.up')
    if(op=='+'){
        up_container.textContent=parseInt(n1)+parseInt(n2)
        return parseInt(n1)+parseInt(n2)
       
    }
    else if(op=='-'){
        up_container.textContent=parseInt(n1)-parseInt(n2)
        return parseInt(n1)-parseInt(n2)
    }
    else if(op=='x'){
      up_container.textContent=parseInt(n1)*parseInt(n2)
      return parseInt(n1)*parseInt(n2)
    }
    else if(op=='/'){
        up_container.textContent=parseInt(n1)/parseInt(n2)
        return parseInt(n1)/parseInt(n2)
    }
}