import { initHeader } from "../../../../header/v4/initHeader.js";

const buildHeader = () => {
    const headerConfig = {
        items: [
            {
                text: "ShowAll",
                id: "ShowAllHtmlId",
                icon: [
                    "M4 6h16",
                    "M4 10h16",
                    "M4 14h10",
                    "M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
                ],
                tableName: "journals",
                onClick: () => {
                    console.log("aaaaaaaaaaaaaa");

                }
            }
        ]
    };

    initHeader(headerConfig);
};

export { buildHeader };