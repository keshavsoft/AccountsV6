import { buildHeaderRow } from "../builders/buildHeaderRow.js";
import { buildDataListContainer } from "../builders/buildDataListContainer.js";
import { buildTableShell } from "../builders/buildTableShell.js";

export const buildFullUI = ({ containerEl, inTableName, inIsDataListNeeded = true,
    inIsTableNeeded = true, inIsShowHeaderRow = false }) => {
    const root = containerEl;
    root.className = "max-w-6xl mx-auto p-2";

    let children = [];

    if (inIsShowHeaderRow) {
        const { header } = buildHeaderRow({ inTitleText: inTableName });

        children.push(header);
    };

    if (inIsTableNeeded) {
        const { wrapper } = buildTableShell();

        children.push(wrapper);
    };

    if (inIsDataListNeeded) {
        const { container: dataList } = buildDataListContainer();
        children.push(dataList);
    };

    root.replaceChildren(...children);
};