import { buildRow } from "./buildRow.js";

const buildBody = ({ inDataStore, inContainerEl, inDom, inShowSerial = false,
    inVisibleColumnsConfig
}) => {
    const containerEl = inContainerEl;

    const dataToShow = inDataStore.getData();
    const tableBody = inDom.getTableBody(containerEl);

    tableBody.innerHTML = '';
    // debugger;
    dataToShow.forEach((item, index) => {
        const row = buildRow({
            item, index, inVisibleColumnsConfig,
            inShowSerial
        });

        tableBody.appendChild(row);
    });
};

export { buildBody };