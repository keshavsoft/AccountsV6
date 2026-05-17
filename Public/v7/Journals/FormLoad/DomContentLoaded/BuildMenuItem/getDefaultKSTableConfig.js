export const getDefaultKSTableConfig = () => {
    return {
        containerId: 'kSTableContainer',

        tableName: "",

        mode: "create",

        layout: {
            verticalPosition: "top",
            type: "table",
        },

        endPoints: {
            create: "",
            update: "",
            delete: "",
            read: "",
            find: ""
        },

        options: {
            firstRow: {
                showSearch: true
            },

            vertical: {
                showVertical: true,
                isDisabled: false,
                showSaveButton: true
            },

            dataList: {
                show: true,
            },

            table: {
                isDisabled: false,
                showTable: true,
                showRowOptions: false,
                showSerial: true,
                showFooter: false,

                footer: {
                    showDataList: true
                }
            },

            focus: {
                priority: ["vertical", "footer", "search"]
            }
        },

        columnsConfig: [],

        uiClasses: {
            form: {
                formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
                buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
                rowClass: 'flex items-center space-x-4',
                labelClass: 'w-24 text-sm font-medium',
                inputClass: 'flex-1 border rounded px-3 py-2'
            }
        },

        callbacks: {
            table: {
                onDelete: async ({ toDeletePk }) => {
                    const fromDelete = await startFetchAsGet({
                        inQuery: {
                            ParentPk: toDeletePk
                        }
                    });

                    return await fromDelete;
                }
            }
        }
    };
};
