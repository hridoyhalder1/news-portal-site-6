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
            <div class="col">${category.category_name}</div>
        `;
        categoryContainer.appendChild(categoryDiv);
    })
}
loadCategory();