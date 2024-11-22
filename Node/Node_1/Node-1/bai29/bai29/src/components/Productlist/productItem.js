function ProducItem(props) {
    const { item } = props;

    return (
        <>
            <div className="product_item">
                <div className="product_id">{item.id}</div>
                <img src={item.image} alt={item.name}></img>
                <div className="product_name">{item.name}</div>
                <div className="product_price">Giá: {item.price}</div>
            </div>
        </>
    )
}
export default ProducItem;