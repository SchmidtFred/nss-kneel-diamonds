import { amISelected, getSizes, setSize } from "./dataAccess.js";

const sizes = getSizes();

document.addEventListener("change", (event) => {
	if (event.target.name === "size") {
		setSize(parseInt(event.target.value));
	}
});

export const DiamondSizes = () => {
	let html = "<ul>";

	// Use .map() for converting objects to <li> elements
	const listItems = sizes.map((size) => {
		let checked = "";
		if (amISelected("sizeId",size.id)) {
			checked = "checked"
		}
		return `<li>
            <input type="radio" name="size" value="${size.id}" ${checked}/> ${size.carets}
        </li>`;
	});

	html += listItems.join("");
	html += "</ul>";

	return html;
};
