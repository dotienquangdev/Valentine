function ProductItem(props) {
    const { item } = props;
    return (
        <>
            <div className="product_item" key={item.id}>
                <img className="product_image" src={item.image} alt={item.name} />
                <h3 className="product_Name">{item.name}</h3>
                <div className="product_price">Giá: {item.price}</div>
            </div>
        </>
    )
}

export default ProductItem;