const loadCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data  = await res.json();
    displayCategory(data.data.news_category);
}
const displayCategory = categorys =>{
    const categoryContainer = document.getElementById('category-container');
    categorys.forEach(category =>{
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
            <div id="category" class="col">
            <a href="#" class="text-decoration-none">${category.category_name}</a>
            </div>
        `;
        categoryContainer.appendChild(categoryDiv);
    })
}
loadCategory();


// card fetch

const loadCards = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data  = await res.json();
    displayCards(data.data);
}
const displayCards = cards =>{
    const cardsContainer = document.getElementById('cards-container');
    cards.forEach(card =>{
        // console.log(card);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML =`
        <div class="card mb-5">
            <img src="${card.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.details.slice(0, 200)}...</p>
            </div>
            <div >
                <div class="author p-3 ">
                    <img src ="${card.author.img}" class=" w-25 rounded-circle">
                    <h6 class="card-title">${card.author.name}</h6>
                    <p>Total View: ${card.total_view}</p>

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Details</button>
                </div>
            </div>
        </div>
        `;
        cardsContainer.appendChild(cardDiv);
    })
}
loadCards();

// spinner
    











// modal 
const loadModal = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data  = await res.json();
    displayModal(data.data);
}
const displayModal = modal =>{
    console.log(modal);
    const modalTitle= document.getElementById('exampleModalLabel');
    modalTitle.innerText = modal.details;
    const modalDetail = document.getElementById('modal-detail');
    modalDetail.innerHTML = `
        <p>${modal.details}</p>
    `;
}
loadModal();