import { useEffect, useState } from "react";

function Home() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        console.log("oke")
    })
    return (
        <>
            Page Home
        </>
    )
}
export default Home;