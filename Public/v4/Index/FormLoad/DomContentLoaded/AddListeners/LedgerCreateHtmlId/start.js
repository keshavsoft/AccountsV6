import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('LedgerCreateHtmlId');

    htmlElement.addEventListener('click', clickFuncToRun);
};

export { funcToRun };
