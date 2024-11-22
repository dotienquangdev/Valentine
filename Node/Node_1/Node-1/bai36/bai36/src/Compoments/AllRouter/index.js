import { useRoutes } from "react-router-dom";
import { routes } from "../../router";

function ALlRoute() {
    const elements = useRoutes(routes);
    // console.log(elements)
    return (
        <>
            {elements}
        </>
    )
}
export default ALlRoute;