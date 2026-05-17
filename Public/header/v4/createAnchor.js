export const createAnchor = (
    { inHtmlId = "", inHref = "#", cls = "", inTableName = "" }
) => {
    const a = document.createElement("a");
    a.id = inHtmlId;
    a.href = inHref;
    a.className = cls;

    if (inTableName) {
        a.dataset.tableName = inTableName
    };

    return a;
};