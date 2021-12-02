import { getTypes, setType } from "./database.js";

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
			return `<li>
            <input type="radio" name="type" value="${type.id}" />${type.type}
            </li>`;
		})
		.join("\n");

	html += listItems + "</ul>";

	return html;
};
