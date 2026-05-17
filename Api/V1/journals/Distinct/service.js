import { kschema } from "@keshavsoft/kschema";

const fromJsonPath = ({ inTableName }) => {
    const tableName = inTableName;

    return kschema.table(tableName).query.aggregate.distinct("AccountName");
};

export { fromJsonPath };