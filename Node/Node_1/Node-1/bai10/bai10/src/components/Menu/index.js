function Menu() {
    const css = {

    }
    const arraymenu = [
        "Quag1a",
        "Quag2a",
        "Quag3a",
        "Quag4a",
        "Quag5a",
    ];

    return (
        <>
            {/* <ul>
                <li>Trang chu</li>
                <li>Mu nu 1</li>
                <li>Quan 1213</li>
            </ul> */}
            <div class="box box_menu">
                {arraymenu.map((item, index) => {
                    console.log(index);
                    return (
                        <li key={index}>{item}</li>
                    );
                })}
            </div>
        </>
    )
}

export default Menu;