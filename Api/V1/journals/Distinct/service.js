import { kschema } from "@keshavsoft/kschema";

const fromJsonPath = ({ inTableName }) => {
    const tableName = inTableName;

    const array = kschema.table(tableName).query.aggregate.distinct("AccountName");
    const collection = array.map(str => ({ AccountName: str }));

    return collection;
};

export { fromJsonPath };