//  السؤال الاول 
let colors = [" yellow"," orange"," blue" ,"gold ", "silver ","white"];

function logger(){
   
    for(let i = 0; i < colors.length; i++ ) {
        console.log(colors[i])
    }
}
logger(colors)

// السؤال الثاني

let temperatures =[150,50,10,80,60];
let value = 60  
let temps2 = []
function hottestdays( array , TH , empty_arrey){
    for(let i=0 ; i < temperatures.length ; i++) {
        if(temperatures[i] > TH){
            empty_arrey.push(temperatures[i])
        }
    }
    return temps2;
}
 console.log( hottestdays(temperatures , value , temps2));

//  السؤال الثالث 
  
let books = [
    {
        name: "book1", ID: 1
    },
    {
        name: "book2", ID: 2
    },
    {
        name: "book3", ID: 3
    },
    {
        name: "book4", ID: 4
    },
];
 let bookId = 2;
function getBookId(bookId,books) {
    for(let i = 0 ; i < books.length ; i++) {
        if(books[i].ID == bookId) {
            return books[i];
        }
    }
}

console.log(getBookId(bookId, books)) ; 
 
// السؤال الرابع 
 
let userInput = "";
let outPut = [] ;
userInput = prompt("السلعه ");

while(userInput !== "انتهيت"){
    
    let price = prompt ("السعر");
    let quantity = prompt("الكميه");


     let object = {
         name : userInput,
         price: price ,
         quantity: quantity,
     };

     outPut.push(object);
     userInput = prompt("السلعه")
    }
let totalprice = 0 ;

for (let i =0 ; i < outPut.length ; i++) {
    console.log(
        outPut[i].quantity +
       " " +
       outPut[i].name +
       " "+ 
        outPut[i].quantity * outPut[i].price 
        );
       totalprice += outPut[i].quantity* outPut[i]
}
console.log(totalprice);
