
function Login() {
    const isLogin = true;
    const isLogin1 = false;

    return (
        <>
            {isLogin ? (
                <>
                    <div>
                        Log_In
                    </div>
                </>
            ) : (
                <>
                    <div>
                        Log_Out
                    </div>
                </>
            )}
            {/* //Toan tu 3 ngoi */}
            {
                isLogin1 && isLogin1 ? (
                    <>
                        <div>
                            Avata
                        </div>
                    </>
                ) : (
                    <>Hi chao cau</>
                )}
        </>
    )
}
export default Login;