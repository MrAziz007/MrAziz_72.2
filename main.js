import { createHeader } from "./components/header";
import { createFooter } from "./components/footer";
import { reload } from "./libs/utils";
import { createGrid } from "./components/grid";
import { activeBtn } from "./components/activeBtn";

createHeader(document.querySelector('header'));
createFooter(document.querySelector('footer'));

activeBtn(document.querySelectorAll('.box1Btn'));
activeBtn(document.querySelectorAll('.box2Btn'));