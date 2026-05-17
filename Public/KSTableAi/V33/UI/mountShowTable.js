// /UI/mountTableUI.js

import buildHeader from "../BuildTableVersions/V4/BuildHeaderVersions/V3/index.js";
import { buildBody } from "../BuildTableVersions/V4/BuildBodyVersions/V3/start.js";
import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForSummary/V8/start.js";

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
        inTableName: inConfig.tableName
    });
    // debugger;
    const visibleColumns = dataStore.getVisibleColumns();
    const visibleColumnsConfig = dataStore.getVisibleColumnsConfig();
    const data = dataStore.getData();

    buildHeader({
        inContainerEl: containerEl,
        inDom: dom,
        inThClassName: uiClasses?.thead?.thClass,
        inTrClassName: uiClasses?.thead?.trClass,
        inThSerialClassName: uiClasses?.thead?.thSerialClass,
        inVisibleColumnsConfig: visibleColumnsConfig,
    });

    buildBody({
        inDataStore: dataStore,
        inContainerEl: containerEl,
        inDom: dom,
        inVisibleColumnsConfig: visibleColumnsConfig,
    });

    if (inShowFooter) {
        buildFooter({
            inContainerEl: containerEl,
            inDom: dom,
            options,
            inVisibleColumnsConfig: visibleColumnsConfig,
            inData: data
        });
    };
};

export default startFunc;