let passBox = document.getElementById('passBox')
let range = document.getElementById('range')
let rangevalue = document.getElementById('rangevalue')
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let genBtn = document.getElementById('genBtn')
let copybtn = document.querySelector('span')


rangevalue.innerHTML = range.value
// Generate btn logic
genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

// rangebtn logic
range.addEventListener('change', ()=>{
    rangevalue.innerHTML = range.value;
})

let uperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerC = 'abcdefghijklmnopqrstuvwxyz'
let numsC = '0123456789'
let symbolsC = '!@$%^&*~'

lowercase.addEventListener('input', ()=>{
    lowercase.checked? genBtn.disabled = false: genBtn.disabled = true;
})
uppercase.addEventListener('input', ()=>{
    uppercase.checked? genBtn.disabled = false: genBtn.disabled = true;
})
numbers.addEventListener('input', ()=>{
    numbers.checked? genBtn.disabled = false: genBtn.disabled = true;
})
symbols.addEventListener('input', ()=>{
    symbols.checked? genBtn.disabled = false: genBtn.disabled = true;
})


//copyBtn logic

copybtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(passBox.value)
    copybtn.innerHTML = "check"
    setTimeout(() => {
        copybtn.innerHTML = "content_copy"
    }, 500);
})

function generatePassword(){   
    let genp = ""
    let str = ""
    genp += lowercase.checked? lowerC : "" ;
    genp += uppercase.checked? uperC : "" ;
    genp += numbers.checked? numsC : "" ;
    genp += symbols.checked? symbolsC : "" ;
    
    let i = 1;
    while( i <= range.value){ 
        str += genp.charAt(Math.floor(Math.random() * genp.length))
        i++
    }
    return str
}



