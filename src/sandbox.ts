import {Invoice} from './classes/Invoice.js' // js not ts even though it's called ts so the browser could understand it
import {Payment} from './classes/Payment.js'
import {hasFormatter} from './interfaces/hasFormatter.js' 
import {Render} from './classes/render.js'

// .........................................................................................................
// ------------------- Query Selecting The Elements We Need -----------------------------------------------
// .......................................................................................................

// the "!" means I'm sure even if TypeScript can't find it
const form = document.querySelector('form')!; 
// const form = document.querySelector('.new-item-form') as HTMLFormElement; 


// select tag
const select = document.querySelector('#type') as HTMLSelectElement;

// inputs
const input1 = document.querySelector('#tofrom') as HTMLInputElement;
const input2 = document.querySelector('#details') as HTMLInputElement;
const input3 = document.querySelector('#amount') as HTMLInputElement;


// console.log("form: " + form.children); 
// console.log("select: " + select); 
// console.log("form: " + form); 
// console.log("form: " + form); 




// .........................................................................................................
// ------------------- Instantiating Objects & Using Interfaces With Classes -----------------------------------------------
// .......................................................................................................



// form.addEventListener("submit", (e: Event) => {
//     e.preventDefault();

//     let doc: hasFormatter; // variable with data type hasFormatter and in the future will be an object that has hasFormatter as an interface
    
//     if (select.value === "invoice") {
//         doc = new Invoice(input1.value, input2.value, input3.valueAsNumber);
//     }
//     else {
//         doc = new Payment(input1.value, input2.value, input3.valueAsNumber);
//     }
//     console.log(doc); // either condition consoles it
// })


// .........................................................................................................
// ------------------- Rendering In HTML Template -----------------------------------------------
// .......................................................................................................


let itemList = document.querySelector('.item-list') as HTMLUListElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: hasFormatter; // variable with data type hasFormatter and in the future will be an object that has hasFormatter as an interface
    
    if (select.value === "invoice") {
        doc = new Invoice(input1.value, input2.value, input3.valueAsNumber);
    }
    else {
        doc = new Payment(input1.value, input2.value, input3.valueAsNumber);
    }
    console.log(doc); // either condition consoles it
    
    let rendering = new Render(select.value, doc );
    let output = rendering.renderIt();

})



