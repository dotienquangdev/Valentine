import { useEffect, useState } from "react";
import "./index.css"

function UseEffect2() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [pageActive, setPageActive] = useState(0);
  const [quantityPage, setQuantityPage] = useState(0);

  useEffect(() => {
    fetch
      (
        `https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`
      )
      .then(res => res.json())
      .then(data => {
        console.log(data.products);
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
      })
  }, [pageActive]);

  console.log(data);

  const handleClick = (e) => {
    setPageActive(e);
  }
  console.log(quantityPage);
  console.log([...Array(quantityPage)]);
  return (

    <>

      <div className="product_list">

        {data.map(item => (

          <div className="product_item" key={item.id}>

            <div className="product_image cangiua" >
              {item.brand}
            </div>

            <div className="product_image cangiua" >
              <img src={item.thumbnail} alt={item.title} />
            </div>

            <h3 className="product_title cangiua">
              {item.title}
            </h3>

            <div className="product_priced cangiua">
              <b>
                <i>
                  <del>
                    Giá gốc: {item.price}$
                  </del>
                </i>
              </b>
            </div>
            <div className="product_priced">
              <b>
                <i>

                  Giảm giá: {item.discountPercentage}$
                </i>
              </b>
            </div>
            <div className="product_price cangiua">
              <b>
                <i>
                  {(item.price - item.discountPercentage)}$
                </i>
              </b>
            </div>

          </div>

        ))}

      </div>

      <ul className="pagination">
        {[...Array(quantityPage)].map((item, index) => (
          <li key={index} onClick={() => { handleClick(index) }}>{index + 1}</li>
        ))}

      </ul>

    </>

  )
}

export default UseEffect2