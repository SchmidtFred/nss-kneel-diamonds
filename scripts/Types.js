import { amISelected, getTypes, setType } from "./dataAccess.js";

const types = getTypes();

document.addEventListener("change", (event) => {
	if (event.target.name === "type") {
		setType(parseInt(event.target.value));
	}
});

export const Types = () => {
	let html = '<ul class="typesList">';

	const listItems = types
		.map((type) => {
			let checked = "";
			if (amISelected("typeId",type.id)) {
				checked = "checked"
			}
			return `<li>
            <input type="radio" name="type" value="${type.id}" ${checked}/>${type.type}
            </li>`;
		})
		.join("\n");

	html += listItems + "</ul>";

	return html;
};
