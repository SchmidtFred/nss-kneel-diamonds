import { amISelected, getMetals, setMetal } from "./database.js";

const metals = getMetals();

document.addEventListener("change", (event) => {
	if (event.target.name === "metal") {
		setMetal(parseInt(event.target.value));
	}
});

export const Metals = () => {
	let html = "<ul>";

	// This is how you have been converting objects to <li> elements
	for (const metal of metals) {
		let checked = "";
		if (amISelected("metalId",metal.id)) {
			checked = "checked"
		}
		html += `<li>
            <input type="radio" name="metal" value="${metal.id}" ${checked}/> ${metal.metal}
        </li>`;
	}

	html += "</ul>";
	return html;
};
