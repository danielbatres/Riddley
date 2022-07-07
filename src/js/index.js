import { literatura } from "./app.js";
import { comic } from "./app.js";

const liter = document.getElementById("literatura");

function main() {
    liter
        ? literatura()
        : comic();
}

main();