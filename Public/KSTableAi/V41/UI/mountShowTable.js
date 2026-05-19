import buildHeader from "../BuildTableVersions/V4/BuildHeaderVersions/V3/index.js";
import { buildBody } from "../BuildTableVersions/V4/BuildBodyVersions/V3/start.js";
// import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForSummary/V8/start.js";
import createForm from "../BuildSearchForm/V1/createForm.js";
import buildDataLists from "../BuildDataLists/V1/addToDom.js";

import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForSummary/V8/CreateFooterRow/V3/start.js";

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

    // debugger;
    const visibleColumns = dataStore.getVisibleColumns();
    const visibleColumnsConfig = dataStore.getVisibleColumnsConfig();
    const searchableColumnsConfig = dataStore.getSearchableColumnsConfig();

    const data = dataStore.getData();
    const showSerial = options.table.showSerial;
    const serialWidth = options.table.serialWidth;

    const dataListArray = dataStore.getDataList("AccountName");

    const dataListColumns = dataStore.getDataListColumns();

    const showTotals = options.table.showTotals;
    const showBalance = options.table.showBalance;
    const showFilterVerticalForm = options.showFilterVerticalForm;
    const showSearch = options.firstRow.showSearch;
    const showTotalsForSearch = options?.table?.showTotalsForSearch;
    const showBalanceForSearch = options?.table?.showBalanceForSearch;
    const showFooterRows = options?.table?.showFooterRows;

    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName,
        inIsShowHeaderRow: showSearch
    });

    // debugger;
    if (showSearch) {
        // for search vertical
        searchFunc({ inContainerEl: containerEl });
    };

    if (showFilterVerticalForm) {
        const searchForm = createForm({
            inVisibleColumnsConfig: visibleColumnsConfig,
            inSearchableColumnsConfig: searchableColumnsConfig,
            inServices: services,
            inConfig
        });

        containerEl.prepend(searchForm);
    };

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
            inTableFooter: dom.getTableFooter(containerEl),
            options,
            inVisibleColumnsConfig: visibleColumnsConfig,
            inData: data,
            inShowSerial: showSerial,
            inShowTotals: showTotals,
            inShowBalance: showBalance,
            inShowTotalsForSearch: showTotalsForSearch,
            inShowBalanceForSearch: showBalanceForSearch,
            inShowFooterRows: showFooterRows
        });
    };

    // debugger;
    buildDataLists({
        inContainerEl: containerEl,
        inDataStore: dataStore,
        inDom: dom,
        inData: data,
        inDataListColumns: searchableColumnsConfig
    });

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

