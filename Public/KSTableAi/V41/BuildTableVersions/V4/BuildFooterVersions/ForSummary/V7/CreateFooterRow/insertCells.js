import createFooterCell from "./CreateFooterCell/start.js";

const startFunc = ({ inVisibleColumns, tr }) => {
    inVisibleColumns.forEach(key => {
        tr.appendChild(createFooterCell({
            inKey: key
        }));
    });
};

export { startFunc };