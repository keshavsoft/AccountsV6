import createFooterRow from "./CreateFooterRow/start.js";

const startFunc = ({ inContainerEl, inDom, options, inVisibleColumnsConfig,
    inTrClassName, inThSerialClassName, inData, inShowSerial }) => {
    const containerEl = inContainerEl;

    const tr = createFooterRow({
        options, inVisibleColumnsConfig,
        inTrClassName, inThSerialClassName,
        inData, inShowSerial
    });
    // debugger;
    const localTableFooter =
        inDom.getTableFooter(inContainerEl);

    localTableFooter.innerHTML = "";

    localTableFooter.appendChild(tr);
};

export default startFunc;