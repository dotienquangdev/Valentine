import { useEffect, useState } from "react";

function Productstates() {
    const [product, setProduct] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {

        const fetchApi = () => {
            fetch("https://dummyjson.com/products")
                .then(res => res.json())
                .then(data => {
                    setProduct(data.products);
                    setLoad(false);
                })
        }

        setTimeout(() => {
            fetchApi();
        }, 5000)
        fetchApi();
    }, [])
    // console.log(product);
    return (
        <>
            {
                load ? (
                    <>Loading...
                        <br></br>
                    </>

                ) : (
                    (product || []).map(item => (
                        <li key={item.id}>{item.description}</li>
                    ))
                )
            }
        </>
    )
}
export default Productstates;