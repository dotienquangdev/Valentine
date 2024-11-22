function Footer() {
    const css = {
        color: "blue",

    }

    const click = (e) => {
        console.log(e.target);
        e.target.innerHTML;
        // e.preventDefalt();
    }

    const change = (e) => {
        console.log(e.target.value);
    }
    const focus = (e) => {
        e.target.classList.add("input_active");
        console.log(e.target.value);
    }
    const blur = (e) => {
        e.target.classList.remove("input_active");
        console.log(e.target.value);
    }
    const handleSubmit = (e) => {
        //Ngăn chặn sự kiện reset lại trang web
        e.preventDefault();
        console.log(e.target[0].value);
    }
    return (

        <>
            <div class="box box_footer" style={css}>
                Footer
                <form onSubmit={handleSubmit}>

                    <input className="active" type="text"
                        placeholder="Nhap du lieu"
                        onChange={change}
                        onFocus={focus}
                        onBlur={blur}
                    />
                    <button onClick={click}>Click me</button>
                </form>
            </div>
        </>
    )
}

export default Footer