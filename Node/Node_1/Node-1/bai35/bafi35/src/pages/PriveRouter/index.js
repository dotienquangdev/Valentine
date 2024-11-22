import { Navigate, Outlet } from "react-router-dom";

function PriveRouter() {
    const isLogin = true;

    return (
        <>
            {isLogin ? (<Outlet />) : (<Navigate to="/login" />)}
            {/* export default PriveRouter; */}
            {/* <Outlet /> */}
        </>
    )
}
export default PriveRouter;