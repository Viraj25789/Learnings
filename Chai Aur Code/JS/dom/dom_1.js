/*
// space and next liine also node


document.getElementById('title')
<h1 id="title" class="heading">DOM LEARNING ON CAC</h1>

document.getElementById('title').id
'title'

document.getElementById('title').class
undefinrd
document.getElementById('title').className
'heading'
// classname is behind the seen

document.getElementById('title').getAttributes()
// type error
document.getElementById('title').getAttributes('class')
'heading'

document.getElementById('title').setAttributes('class','new')
undefined  / origional delet and new is appear, if want both then write both in '' in setattribute.

// all same for class
document.getElementByClassName('heading')
HTMLCollection [h1#title.heading, title: hi#title.heading]

const title = document.getElementById('title')
undefine(not error)
title / for easy access.

title.style.background-coclor="black"
title.style.coclor="brown"
all num and px values in ""or''



// in h2 make span and style span's display content none then content not visible.

title.innerText           // show only visible text only
'DOM LEARNING ON CAC'

title.textContent          // shows all text also it hide or non visible anything text only.
'DOM LEARNING ON hello CAC'

title.innerHTML           // show all thing in that tag what we write in (span here) 
// 'DOM LEARNING ON <span> hello </span> CAC'



// query selectors (select any thing) 
// / for first occurance only / select first ele.

document.querySelector('h1')
<h1 id=​"title" class=​"heading">​DOM LEARNING ON CAC​</h1>​
document.querySelector('h2')
null
document.querySelector('#title')     // id
document.querySelector('.heading')  // class
document.querySelector('input[type='password'])

const ulist = document.querySelector('ul') // ul*3 li
ulist.document.querySelector('li')         // select 1st li only
ulist.document.querySelector('li').style.color="red"        
// chaining also for all



// nodelist , htmlcoolection are not pure arrays, if there in prototype mention to use arrays func. then use other wise not.


// query selector all

document.querySelectorAll('li')
NodeList(3) [li,li,li] (// prototyes and more) / look like arr not array.

const new = document.querySelectorAll('li')
new.style.color="green"     // no possible this 
new[0].style.color="green"     // mention ele. [_] / possible

new.forEach(function (l) {
        l.style.background-color="red"
})
// foreach mention in nodelist prototype // all li change



// for all nodelist
// nodelist > foreach
// nodelist > array convert > 



// ul > 4 li (all class='list-li') >/ul
// 
const new = document.getElementByClassName('list-li')
new
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item,]

// no for each use here / HTMLCollection /  in prototype no mention foreach / so convert in array then operation.


// HTMLCollection to array

Array.from(new)
(4) [li.list-item, li.list-item, li.list-item, li.list-item,] (prototype of array all use.)

new.forEach(function(li){
    li.style.color='red'
})
// change 










*/