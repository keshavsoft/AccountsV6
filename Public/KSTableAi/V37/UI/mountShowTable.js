// /UI/mountTableUI.js

import buildHeader from "../BuildTableVersions/V4/BuildHeaderVersions/V3/index.js";
import { buildBody } from "../BuildTableVersions/V4/BuildBodyVersions/V3/start.js";
import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForSummary/V8/start.js";
import createForm from "../BuildSearchForm/V1/createForm.js";

import { buildFullUI } from "./compose/buildFullUI.js";

const startFunc = ({
    containerEl,
    dataStore,
    dom,
    services,
    options,
    endPoints,
    columnsConfig,
    uiClasses,
    callbacks,
    inConfig,
    inShowFooter = false
}) => {
    // debugger
    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName,
        inIsShowHeaderRow: true
    });
    // debugger;
    const visibleColumns = dataStore.getVisibleColumns();
    const visibleColumnsConfig = dataStore.getVisibleColumnsConfig();
    const searchableColumnsConfig = dataStore.getSearchableColumnsConfig();

    const data = dataStore.getData();
    const showSerial = options.table.showSerial;
    const serialWidth = options.table.serialWidth;

    buildHeader({
        inContainerEl: containerEl,
        inDom: dom,
        inThClassName: uiClasses?.thead?.thClass,
        inTrClassName: uiClasses?.thead?.trClass,
        inThSerialClassName: uiClasses?.thead?.thSerialClass,
        inVisibleColumnsConfig: visibleColumnsConfig,
        inShowSerial: showSerial,
        inSerialWidth: serialWidth
    });

    buildBody({
        inDataStore: dataStore,
        inContainerEl: containerEl,
        inDom: dom,
        inVisibleColumnsConfig: visibleColumnsConfig,
        inShowSerial: showSerial
    });

    if (inShowFooter) {
        buildFooter({
            inContainerEl: containerEl,
            inDom: dom,
            options,
            inVisibleColumnsConfig: visibleColumnsConfig,
            inData: data,
            inShowSerial: showSerial,
        });
    };

    searchFunc({ inContainerEl: containerEl });

    const searchForm = createForm({
        inVisibleColumnsConfig: searchableColumnsConfig,
    });
    debugger;

    containerEl.appendChild(searchForm);
};

const searchFunc = ({ inContainerEl }) => {
    const searchInput = inContainerEl.querySelector(".tableSearchClass ");
    const rows = inContainerEl.querySelectorAll("tbody tr");

    searchInput.addEventListener("keyup", (event) => {
        const searchValue = event.target.value.toLowerCase();

        rows.forEach((row) => {
            const rowText = row.innerText.toLowerCase();

            if (rowText.includes(searchValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            };
        });
    });
};

export default startFunc;

