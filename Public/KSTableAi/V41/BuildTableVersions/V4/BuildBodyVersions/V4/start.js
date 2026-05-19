import { buildRow } from "./buildRow.js";

const buildBody = ({ inDataToShow, inTableBody, inShowSerial = false,
    inVisibleColumnsConfig
}) => {
    const dataToShow = inDataToShow;
    const tableBody = inTableBody;

    tableBody.innerHTML = '';

    dataToShow.forEach((item, index) => {
        const row = buildRow({
            item, index, inVisibleColumnsConfig,
            inShowSerial
        });

        tableBody.appendChild(row);
    });
};

export { buildBody };