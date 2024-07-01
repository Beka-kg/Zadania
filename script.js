let like1 = document.getElementById('like1')
like1.style.color = 'grey'
like1.onclick = function addItem () {
    if (like1.style.color === 'grey') {
        like1.style.color = 'red'
    }
    else{
        like1.style.color = 'grey'
    }
}

/////////


let noLike1 = document.getElementById('noLike1')
let cross1 = document.getElementById('cross1')
noLike1.onclick = function addBlock1 () {
    cross1.remove()
}

/////////

const num1 = document.getElementById('num1')
const incroment1 = document.getElementById('incroment1')
const dekroment1 = document.getElementById('dekroment1')
const price1 = document.getElementById('price1')
let number1 = 1
let getPrice1 = 199
incroment1.onclick = function addIncroment () {
    number1++
    num1.innerHTML = number1
    getPrice1 = 199 * number1
    price1.innerHTML = getPrice1
    itogo = itogo + 199
    allPriceNumber.innerHTML = itogo
}
dekroment1.onclick = function adddecroment () {
    if (number1 > 0) {
       number1--
       num1.innerHTML = number1
       getPrice1 = getPrice1 - 199
       price1.innerHTML = getPrice1
       itogo = itogo - 199
       allPriceNumber.innerHTML = itogo
       if (number1 === 0) {
            cross1.remove()
       } 
    }
}



/////////////////////////////////////////////////////////////////////////

let like2 = document.getElementById('like2')
like2.style.color = 'grey'
like2.onclick = function addItem () {
    if (like2.style.color === 'grey') {
        like2.style.color = 'red'
    }
    else{
        like2.style.color = 'grey'
    }
}

/////////

let noLike2 = document.getElementById('noLike2')
let cross2 = document.getElementById('cross2')
noLike2.onclick = function addBlock2 () {
    cross2.remove()
}

/////////


const num2 = document.getElementById('num2')
const incroment2 = document.getElementById('incroment2')
const dekroment2 = document.getElementById('dekroment2')
const price2 = document.getElementById('price2')
let number2 = 1
let getPrice2 = 299
incroment2.onclick = function addIncroment () {
    number2++
    num2.innerHTML = number2
    getPrice2 = 299 * number2
    price2.innerHTML = getPrice2
    itogo = itogo + 299
    allPriceNumber.innerHTML = itogo
}
dekroment2.onclick = function adddecroment () {
    if (number2 > 0) {
       number2--
       num2.innerHTML = number2
       getPrice2 = getPrice2 - 299
       price2.innerHTML = getPrice2
       itogo = itogo - 299
       allPriceNumber.innerHTML = itogo
       if (number2 === 0) {
            cross2.remove()
       } 
    }
}



/////////////////////////////////////////////////////////////////////////


let like3 = document.getElementById('like3')
like3.style.color = 'grey'
like3.onclick = function addItem () {
    if (like3.style.color === 'grey') {
        like3.style.color = 'red'
    }
    else{
        like3.style.color = 'grey'
    }
}
//////////////

let noLike3 = document.getElementById('noLike3')
let cross3 = document.getElementById('cross3')
noLike3.onclick = function addBlock3 () {
    cross3.remove()
}

//////////////
const num3 = document.getElementById('num3')
const incroment3 = document.getElementById('incroment3')
const dekroment3 = document.getElementById('dekroment3')
const price3 = document.getElementById('price3')
let number3 = 1
let getPrice3 = 399
incroment3.onclick = function addIncroment () {
    number3++
    num3.innerHTML = number3
    getPrice3 = 399 * number3
    price3.innerHTML = getPrice3
    itogo = itogo + 399
    allPriceNumber.innerHTML = itogo
}
dekroment3.onclick = function adddecroment () {
    if (number3 > 0) {
       number3--
       num3.innerHTML = number3
       getPrice3 = getPrice3 - 399
       price3.innerHTML = getPrice3
       itogo = itogo - 399
       allPriceNumber.innerHTML = itogo
       if (number3 === 0) {
            cross3.remove()
       } 
    }
}


/////////////////////////////////////////////////////////////////////



let allPriceNumber = document.getElementById('allPrice')
let itogo = 0 
itogo = getPrice1 + getPrice2 + getPrice3
allPriceNumber.innerHTML = itogo 


