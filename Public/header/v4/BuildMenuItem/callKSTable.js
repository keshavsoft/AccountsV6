export const callKSTable = async (config) => {
    if (window.KSTable?.initTableOnly) {
        return window.KSTable.initTableOnly(config);
    };

    const { initTableOnly } =
        await import("../../../KSTableAi/V32/entry.js");

    return initTableOnly(config);
};