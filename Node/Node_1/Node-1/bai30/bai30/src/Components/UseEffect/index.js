import { useEffect } from "react";
function UseEffect() {
    // let listItem = document.querySelectorAll("ul li");
    // console.log(listItem);
    //useEffect được dùng để sử lý logic khi data dược thay đổi
    // và Componel sau khi được render ra dao diện lần đầu thì gọi tới hàm callback;
    useEffect(() => {
        let listItem = document.querySelectorAll("ul li");
        console.log(listItem)
    })

    return (
        <>
            <ul>
                <li>Muc 1</li>
                <li>Muc 2</li>
                <li>Muc 3</li>
                <li>Muc 4</li>
            </ul>
        </>
    )
}

export default UseEffect;