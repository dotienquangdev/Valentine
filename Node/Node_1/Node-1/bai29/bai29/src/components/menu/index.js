function Menu() {
    const arrayMenu = [
        "Trang chu",
        "San pham",
        "Tin tuc",
        "Gioi thieu",
        "Lien he",
    ];
    return (
        // map Lặp qua từng phần tử của mảng
        <>
            <ul>
                {arrayMenu.map((item, index) => {
                    console.log(item, index);
                    return (
                        <li key={index}>{item}</li>
                    );
                })};
            </ul>
        </>
    )
}
export default Menu;