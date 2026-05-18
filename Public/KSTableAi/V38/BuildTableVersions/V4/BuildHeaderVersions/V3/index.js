import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";

const startFunc = ({ inContainerEl, inDom, options, inThClassName,
    inTrClassName, inThSerialClassName, inVisibleColumnsConfig,
    inShowSerial, inSerialWidth }) => {

    const containerEl = inContainerEl;

    const tr = createHeaderRow({
        options, inThClassName,
        inTrClassName, inThSerialClassName,
        inVisibleColumnsConfig,
        inShowSerial, inSerialWidth
    });

    const tableHeader = inDom.getTableHeader(containerEl);

    tableHeader.innerHTML = "";

    tableHeader.appendChild(tr);
};

export default startFunc;