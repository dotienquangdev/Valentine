import { get } from "../untils/reques";

export const getListCategory = async () => {
    // const response = await fetch("http://localhost:3002/categories");
    const result = await get("caregory");
    return result;
}
