function Login() {
    const isLogin = true;


    // cách 1
    /* if (isLogin === true) {
         return (
             <>
                 <div>
                     Thông tin người dùng, nút log_out
                 </div>
             </>
         )
     } else {
         return (
             <>
                 <div>
                     Nút đăng nhập, Nút đăng ký
                 </div>
             </>
         )
     }
     */
    // cách 2
    return (
        <>
            {isLogin === true ? (
                <>
                    <div>
                        Thông tin người dùng, nút log_out
                    </div>
                </>
            ) : (
                <>
                    <div>
                        Nút đăng nhập, Nút đăng ký
                    </div>
                </>
            )}
            {isLogin && <div>Avatar</div>}
        </>
    )
}
export default Login;