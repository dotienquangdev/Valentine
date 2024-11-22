// fetch('https://dummyjson.com/products/1')
fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(data => {
        let htmls = "";
        data.forEach(item => {
            htmls += `
            <div class"category-item">${item}</div>
        `;
        });
        console.log(htmls);
        const divCategory = document.querySelector("#category");
        divCategory.innerHTML = htmls;
    })