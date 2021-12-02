import { database } from "./database.js";



export const getMetals = () => {
	return database.metals.map((metal) => ({ ...metal }));
};

export const getSizes = () => {
	return database.sizes.map((size) => ({ ...size }));
};

export const getStyles = () => {
	return database.styles.map((style) => ({ ...style }));
};

export const getTypes = () => {
    return database.types.map((type) => ({...type}));
};

export const getOrders = () => {
	return database.customOrders.map((order) => ({ ...order }));
};

export const setMetal = (id) => {
	database.orderBuilder.metalId = id;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setSize = (id) => {
	database.orderBuilder.sizeId = id;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setStyle = (id) => {
	database.orderBuilder.styleId = id;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setType = (id) => {
    database.orderBuilder.typeId = id;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const addCustomOrder = () => {
	//Copy the current state of user choices
	const newOrder = { ...database.orderBuilder };

	// Add the next pk to the object.
	const lastIndex = database.customOrders.length - 1;
	newOrder.id = database.customOrders[lastIndex].id + 1;

	//Add a timestamp to the new order
	newOrder.timestamp = Date.now();

	//add the new order object to custom orders array's staqte
	database.customOrders.push(newOrder);

	//Reset the temporary state for user choices (reset our order builder)
	database.orderBuilder = {};

	//Broadcast a notifcation that permanent state has changed
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

//determines if the id that has been input not only exists but also matches with the id of the property
export const amISelected = (fkToFind, id) => {
	if (database.orderBuilder[fkToFind] === id) {
		return true;
	} else {
		return false;
	}
}