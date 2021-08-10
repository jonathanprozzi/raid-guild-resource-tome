const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIR_API_KEY }).base(
  process.env.BASE_ID
);

const resourcesTable = base(process.env.RESOURCES_TABLE);

const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

export { resourcesTable, getMinifiedRecord, minifyRecords };
