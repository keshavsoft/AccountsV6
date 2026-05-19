export const callKSTable = async (config) => {
    if (window.KSTable?.initTableOnly) {
        console.log("loaded from cdn");

        return window.KSTable.initTableOnly(config);
    };

    const { initShowTable } =
        await import("../../../../../KSTableAi/V41/entry.js");

    return initShowTable(config);
};