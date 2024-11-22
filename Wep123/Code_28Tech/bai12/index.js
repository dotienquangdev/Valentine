// fetch('https://dummyjson.com/products/1')
// const fetchApi = (url) => {
//     const result = fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             return data;
//         });
//     // console.log(result);
//     return result;
// }

// fetchApi('https://dummyjson.com/products/categories')
//     .then(data => console.log(data))

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

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        console.log(data.products);
        let htmls = "";
        data.products.forEach(item => {
            htmls += `
                <div class="product-list" id="product">
                    <div class="product-item">
                        <img src="${item.thumbnail}" alt="${item.title}">
                        <h3>${item.title}</h3>
                        <p>${item.price}</p>
                    </div>
                </div>
            `
        })
        const divCategory = document.querySelector("#product");
        divCategory.innerHTML = htmls;
    })

//End Get Product

const fetApiAsynAwait = async (url) => {
    const response = await fetch(url);
    const result = response.json();
    console.log(result);
}

fetApiAsynAwait("https://dummyjson.com/product")
    .then(data => {
        // console.log(data.products);
        let htmls = "";
        data.products.forEach(item => {
            htmls += `
                <div class="product-list" id="product">
                    <div class="product-item">
                        <img src="${item.thumbnail}" alt="${item.title}">
                        <h3>${item.title}</h3>
                        <p>${item.price}</p>
                    </div>
                </div>
            `
        })
        const divCategory = document.querySelector("#product");
        divCategory.innerHTML = htmls;
    })

