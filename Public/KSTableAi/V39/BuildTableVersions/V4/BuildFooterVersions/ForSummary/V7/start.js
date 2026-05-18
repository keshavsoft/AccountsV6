import createFooterRow from "./CreateFooterRow/start.js";

const startFunc = ({ inContainerEl, inDom, options, inVisibleColumns,
    inTrClassName, inThSerialClassName }) => {
    const containerEl = inContainerEl;

    const tr = createFooterRow({
        options, inVisibleColumns,
        inTrClassName, inThSerialClassName
    });
    debugger;
    const localTableFooter =
        inDom.getTableFooter(inContainerEl);

    localTableFooter.innerHTML = "";

    localTableFooter.appendChild(tr);
};

export default startFunc;