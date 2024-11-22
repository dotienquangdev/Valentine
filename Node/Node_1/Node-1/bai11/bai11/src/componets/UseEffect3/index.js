import { useEffect, useState } from "react";
// import { carts } from "../../data/carts";
import "./style.css";
function UseEffect3() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then(res => res.json())
      .then(data => {
        console.log(data.carts)
        setData(data.carts);
      })
  }, []);
  console.log(data);

  return (

    <>
      <ul className="product_list">
        {(data || []).map((item) => (

          <li className="product_none" key={item.id}>

            <span className="product_item" key={item.id}>
              {item.id}
            </span>

            <div className="country" key={item.id}>

              {(item.products || []).map((item) = (
                <div className="country_sub">

                  <div className="country_item" key={item.id}>
                    {/* key={item.id} */}
                    {item.quantity}
                  </div>

                  <div className="country_image" key={item.id}>
                    <img alt={item.title} src={item.thumbnail} />
                  </div>

                </div>

              ))}

            </div>

            <div className="product_image" >
              <img alt={item.title} src={item.thumbnail} />
            </div>

          </li >

        ))}
      </ul >
    </>

  )
}

export default UseEffect3;