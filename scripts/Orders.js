import { getOrders, getMetals, getSizes, getStyles, getTypes } from "./dataAccess.js";

const buildOrderListItem = (order, metals, styles, sizes, types) => {
	//find and grab the ids of the different elements of the order
	const foundMetal = metals.find((metal) => metal.id === order.metalId);
	const foundStyle = styles.find((style) => style.id === order.styleId);
	const foundSize = sizes.find((size) => size.id === order.sizeId);
	const foundType = types.find((type) => type.id === order.typeId);

	const totalCost = foundType.priceMultiplier * (foundMetal.price + foundStyle.price + foundSize.price);
	const costString = totalCost.toLocaleString("en-US", {
		style: "currency",
		currency: "USD"
	});

	return `<li>
        Order #${order.id} costs ${costString}
    </li>`;
};

export const Orders = () => {
	/*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const metals = getMetals();
    const styles = getStyles();
    const sizes = getSizes();
	const types = getTypes();
	const orders = getOrders();


	let html = "<ul>";

	const listItems = orders.map(order => buildOrderListItem(order, metals, styles, sizes, types));

	html += listItems.join("");
	html += "</ul>";

	return html;
};
