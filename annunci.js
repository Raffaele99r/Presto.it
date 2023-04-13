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
// ANNUNCI
fetch('./annunci.json').then((response)=> response.json() ).then((data)=> {

    let categoryWrapper = document.querySelector('#categoryWrapper');

    let cardsWrapper = document.querySelector('#cardsWrapper');

    function setCategoryFilters(){

        let categories = data.map( (annuncio)=>annuncio.category );
    
        let uniqueCategories = [];
        categories.forEach( (category)=> {
    
            if( !uniqueCategories.includes(category)){
    
                uniqueCategories.push(category)
    
            }
    
        })
        
        uniqueCategories.forEach((category)=>{

            let div = document.createElement('div');

            div.classList.add('form-check')

            div.innerHTML= `
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                            <label class="form-check-label" for="flexRadioDefault1">
                              ${category}
                            </label>
            
            
            `;


            categoryWrapper.appendChild(div);
        })


    }
    setCategoryFilters();

    function showCards(array){
        
        array.forEach((element)=>{

            let div = document.createElement('div');

            div.classList.add('col-12', 'col-md-3', 'my-5');

            div.innerHTML = `
                            <div class="announcement-card">

                            <p class="h3">${element.category}</p>
                            <h3>${element.name}</h3>
                            <p>€ ${element.price}</p>

                             </div>

            
            `;

            cardsWrapper.appendChild(div);


        })



    }

    showCards(data);

    function filterbyCategory(categoria){

        let filtered = data.filter( (annuncio)=> annuncio.category == categoria );

        




    }
    

} )