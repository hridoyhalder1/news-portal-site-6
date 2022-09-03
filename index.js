const loadCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data  = await res.json();
    displayCategory(data.data);
}
const displayCategory = categorys =>{
    const categoryContainer = document.getElementById('category-container');
}
loadCategory();