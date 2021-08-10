import { minifyRecords, resourcesTable } from "../../libs/airtable";

const getResources = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const airtableData = [];
      resourcesTable
        .select({
          view: "All Resources",
          sort: [{ field: "Created", direction: "desc" }],
        })
        .eachPage(
          (records, fetchNextPage) => {
            records.forEach((record) => {
              const recordData = {
                id: record.id,
                fields: record.fields,
              };
              airtableData.push(recordData);
            });
            fetchNextPage();
          },
          (error) => {
            if (error) {
              console.error(error);
              reject({ error });
              return;
            }
            resolve(airtableData);
            const minifiedRecords = minifyRecords(airtableData);
            res.statusCode = 200;
            res.json(minifiedRecords);
          }
        );
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.json({ msg: "Something went wrong with the resource request." });
    }
  });
};

export default getResources;
