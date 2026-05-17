import { getKSTableConfig } from "./getKSTableConfig.js";
import { callKSTable } from "./callKSTable.js";

export const orchestrateMenuClick = async (event) => {
    event.preventDefault();

    const currentTarget = event.currentTarget;
    // debugger;
    const config = await getKSTableConfig({
        tableName: currentTarget.dataset.tableName
    });

    await callKSTable(config);
};