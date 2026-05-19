import { buildRow } from "./buildRow.js";

const buildBody = ({ inDataToShow, inTableBody, inShowSerial = false,
    inVisibleColumnsConfig
}) => {
    debugger;
    const dataToShow = inDataToShow;
    const tableBody = inTableBody;

    tableBody.innerHTML = '';
    // debugger;
    console.log("dataToShow : ", typeof dataToShow, Array.isArray(dataToShow));

    dataToShow.forEach((item, index) => {
        const row = buildRow({
            item, index, inVisibleColumnsConfig,
            inShowSerial
        });

        tableBody.appendChild(row);
    });
};

export { buildBody };