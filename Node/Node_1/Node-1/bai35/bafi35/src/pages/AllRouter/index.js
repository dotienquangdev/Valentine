
import { useRoutes } from "react-router-dom";
import { router } from "../../router";



function ALlRoute() {
    const elements = useRoutes(router);
    return (
        <>
            {elements}
        </>
    )
}
export default ALlRoute;