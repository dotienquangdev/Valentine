import "./tabs.css";
import { useEffect, useState } from "react";

function Tabs() {
	const [data, setData] = useState([]);
	const [tabActive, setTabActive] = useState("products");

	useEffect(() => {
		fetch(`https://dummyjson.com/${tabActive}`)
			.then(res => res.json())
			.then(data => {
				setData(data[tabActive]);
				// console.log(data.products);
			})
	}, [tabActive]);

	const handleChangeTab = (e) => {
		setTabActive(e);
	}

	console.log(data);
	return (
		<>

		</>
	)
}
export default Tabs;