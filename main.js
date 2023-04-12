

let navIcon = document.querySelector('#navIcon');

let confirm = false;

navIcon.addEventListener('click',()=>{

  navIcon.classList.toggle('fa-rotate-180');
    
})

let mainNavbar = document.querySelector('#mainNavbar');

window.addEventListener('scroll', ()=>{

        if(window.scrollY > 0){

            mainNavbar.classList.remove('bg-transparent');
            mainNavbar.classList.add('background-blackC');

            mainNavbar.style.height = '100px';

            logoB.classList.remove('d-none');
            logoA.classList.add('d-none');
        } else{

            mainNavbar.classList.remove('background-blackC');
            mainNavbar.classList.add('bg-transparent');

            mainNavbar.style.height = '60px';

            logoA.classList.remove('d-none');
            logoB.classList.add('d-none');
        }
        



})

function createInterval(finalNumber, element){


    let counter = 0;

    let interval = setInterval(()=>{


        
        if(counter < finalNumber){
            
            counter++
            element.innerHTML = counter;

        } else{
            
            
            clearInterval(interval);

        }
        

    }, 1)




}
createInterval();

let firstspan = document.querySelector('#first-span');
let secondspan = document.querySelector('#second-span');
let thirdspan = document.querySelector('#third-span');
let fourthspan = document.querySelector('#fourth-span');

createInterval(2125, firstspan);
createInterval(1622, secondspan);
createInterval(258, thirdspan);
createInterval(16, fourthspan);



let h2Test = document.querySelector('#h2Test');

let intersectionCheck = true;

let observed = new IntersectionObserver(

    (entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting && intersectionCheck == true){

                createInterval(2125, firstspan);
                createInterval(1622, secondspan);
                createInterval(258, thirdspan);
                createInterval(16, fourthspan);

                intersectionCheck = false;
            }



        })


    }

)

observed.observe(h2Test);

// EVENTO MOUSE ENTER

// cattura dei camioncini
let camioncini = document.querySelectorAll('.fa-truck-fast');

// cattura delle card
let columns = document.querySelectorAll('.col-custom');

// variabile d'appoggio per far ritornare tutto alle origini
let columnsConfirm = false;

columns.forEach( (colonna, i)=>{
    

    // alla singola colonna attacco l'evento mouseenter

        colonna.addEventListener('mouseenter', ()=>{

        if(columnsConfirm == false){

            camioncini[i].classList.remove('text-secondaryC');
            camioncini[i].classList.add('text-accentC');

        
        } else {

               // alla seconda entrata
               camioncini[i].classList.remove('text-blackC'); 

                // e diventa per un attimo del colore di sfondo finché non parte il mouse leave


        }
           
    
        })

   

    // alla singola colonna attacco l'evento mouseleave

    colonna.addEventListener('mouseleave', ()=>{


        if(columnsConfirm == false){

            camioncini[i].classList.remove('text-accentC');
            camioncini[i].classList.add('text-blackC');

            columnsConfirm = true;

        } else {

            // alla seconda uscita 
            camioncini[i].classList.add('text-secondaryC');

            columnsConfirm = false;

        }

    })


});
