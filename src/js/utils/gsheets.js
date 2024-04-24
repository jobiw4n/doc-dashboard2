const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../../../config/creds.json");

const fetchSheetData = async (sheetID, sheetName) => {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(sheetID);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  console.log(sheetName)
  const rows = await doc.sheetsByTitle[sheetName].getRows();

  return rows;
};

export { fetchSheetData };
