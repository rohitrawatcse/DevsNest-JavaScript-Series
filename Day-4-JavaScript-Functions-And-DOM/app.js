     // document.title, window, document.head
        //document.getElementById
        // document.getElementsByClassName

        const para = document.createElement("p");
        para.textContent = "this is created using DOM API";
        para.classList.add("one");
        para.classList.add("second-class");
        para.classList.remove("second-class");
        para.setAttribute("id","js-para");
        console.log(para.getAttribute("id"));

        document.body.appendChild(para);
        const span = document.createElement("span"); // dom node
        span.id = "span-id";
        span.className = "blue red";
        span.textContent = "this is span created using <em>dom.createElement</em>"
        // span.innerHTML = "this is span created using <em>dom.createElement</em><span>another span</span>"
        span.style.backgroundColor="yellow";
        para.appendChild(span);

        const hobbies = ["coding","swimming","jogging"];
       const list = document.createElement("ul");
        for(let hobby of hobbies){
            list.innerHTML+="<li class='blue'>" + hobby + "</li>"
        }

        document.body.appendChild(list)

        console.log(document.getElementById("first-para").textContent);

        console.log(document.getElementsByClassName("blue"));

        console.log(document.querySelector("p")) // return first para

        console.log(document.querySelectorAll("p")) //return all para


        console.log(document.querySelectorAll("p"))
        console.log(document.querySelectorAll("ul"))

        console.log(document.querySelectorAll("#first-para"))
        console.log(document.querySelectorAll(".one"))




        //  function compareNumber(firstNumber,secondNumber){
        //     if(firstNumber>secondNumber){

        //         console.log(firstNumber + " is greater than " + secondNumber);
        //     }else if(firstNumber<secondNumber){
        //         console.log(firstNumber + " is lesser than " + secondNumber);
        //     }else{
        //         console.log(firstNumber + " is equal to " + secondNumber);
        //     }
        //  }

    //    compareNumber(10,56) // calling our function
    //    compareNumber(100,56) // calling our function
    //    compareNumber(56,56) // calling our function

    //    function print(){
    //     console.log("this is printed in the console")
    //    }
    //    print()

    //    function addNumber(firstNumber,secondNumber){
    //     return firstNumber+secondNumber
    //    }
    //    let result = addNumber(10,15)
    //    console.log(result)
       
       //function expression
    //    const sub = function subtractNumber(firstNumber,secondNumber){
    //     return firstNumber-secondNumber
    //    }

    //    const resultsub = sub(12,10);
    //    console.log(resultsub)


    // const person = {
    //     firstName:'Rohit',
    //     lastName:'Rawat',
    //     print:function(){
    //         console.log("this function is property of an object")

    //     }
    // };
    // person.print();


    // coding convention in JAVASCRIPT

    // camelCase, 







       
















        



