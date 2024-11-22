function Footer() {
    const arrFooter = [
        "Trang chu",
        "san pham",
        "Tin tuc",
        "Gioi thieu",
        "Lien he"
    ];

    return (
        <>
            <ul>
                {arrFooter.map((item, index) => {
                    console.log(item, index)
                    return (
                        <li key={index}>{item}</li>
                    )
                })}

            </ul>
        </>
    )
}
export default Footer;