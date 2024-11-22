// const API_DOMAIN = "http://localhost:3002/";
// //http://localhost:3002/products
// export const get = async (path) => {
//     const response = await fetch(API_DOMAIN + path)
//     const result = await response.json();
//     return result;
// }

// export const post = async (path, options) => {
//     const response = await fetch(API_DOMAIN + path, {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(options)
//     });
//     const result = await response.json();
//     return result;
// }

// export const del = async (path) => {
//     const response = await fetch(API_DOMAIN + path, {
//         method: "DELETE",
//     });
//     const result = await response.json();
//     return result;
// }

// export const patch = async (path, options) => {
//     const response = await fetch(API_DOMAIN + path, {
//         method: "PATCH",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "aliication/json"
//         },
//         body: JSON.stringify(options),
//     })
//     const result = await response.json();
//     return result;
// }





const API_DOMAIN = "http://localhost:3002/";  // Thay đổi sang HTTP nếu không dùng HTTPS

export const get = async (path) => {
    const response = await fetch(API_DOMAIN + path);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
}

export const post = async (path, options) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(options)
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
}

export const del = async (path) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
}

export const patch = async (path, options) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"  // Sửa lỗi chính tả
        },
        body: JSON.stringify(options),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
}