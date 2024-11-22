import { useEffect, useReducer, useState } from "react";
const init = {
    products: [],
    loading: true
}
const reducer = (state, action) => {
    console.log(action.type);
    if (action.type === "SUCCESS") {
        return {
            products: action.products,
            loading: false
        };
    } else {
        return state
    }
}
function ProductReducer() {
    // const [product, setProduct] = useState();
    // const [load, setLoad] = useState(true);
    const [data, dispatch] = useReducer(reducer, init);

    useEffect(() => {
        const fetchApi = () => {
            fetch("https://dummyjson.com/products")
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: "SUCCESS",
                        products: data.products
                    })
                })
        }
        setTimeout(() => {
            fetchApi();
        }, 5000)
        fetchApi();
    }, [])
    // console.log(data);
    return (
        <>
            {
                data.loading ? (
                    <>Loading...
                        <br></br>
                    </>

                ) : (
                    (data.products).map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))
                )
            }
        </>
    )
}
export default ProductReducer;