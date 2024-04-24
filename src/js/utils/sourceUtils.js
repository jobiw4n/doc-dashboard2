import { fetchSheetData } from "./gsheets";

const fetchSourceData = async (sheet) => {
  let data = await fetchSheetData(
    "113on4O7dS6gVpA_BW2wJYAef4gMTwqwUN5QgrgoimL0",
    sheet
  );

  return data;
};

const sourceDict = {
  projects_table: "Project Lookup",
  projects: "Project Lookup",
};

const sourceData = async (type) => {
  let rows = await fetchSourceData(sourceDict[type]);
  let callback = await store[sourceDict[type]](rows, type);

  return JSON.parse(localStorage[callback]);
};

const store = {
  'Project Lookup': async (rows, type) => {
    let projects = {};
    let table_data = [];

    rows.map((row) => {
      projects[row.project_id] = {
        id: row.project_id,
        title: row.title || "",
        submit_time: row.submit_time || "",
        sponsor: row.sponsor || "",
        applicant: row. applicant || "",
        route_id: row.route_id || "",
        municipality: row.municipality || "",
        desired_result: row.desired_result || "",
        project_need: row.project_need || "",
        scope: row.scope || "",
        priority: row.priority || "",
        project_cat: row.project_cat || "",
        project_subtype: row.project_subtype || "",
        pe_cost: "$  "+row.pe_cost || "",
        fd_cost: "$  "+row.fd_cost || "",
        utl_cost: "$  "+row.utl_cost || "",
        row_cost: "$  "+row.row_cost || "",
        con_cost: "$  "+row.con_cost || "",
        mrp: row.mrp || "",
        mrp_yes: row.mrp_yes || "",
        mrp_no: row.mrp_no || "",
        traffic_impact: row.traffic_impact || "",
        traffic_impact_note: row.traffic_impact_note || "",
        plan: row.plan || "",
        plan_name: row.plan_name || "",
        asset_imp: row.asset_imp || "",
        safety_strategies: row.safety_strategies || "",
        safety_strategies_two: row.safety_strategies_two || "",
        signalize: row.signalize || "",
        signalize_location: row.signalize_location || "",
        green_design: row.green_design || "",
        files: row.files || "",
        county: row.county || "",
        email: row.email || "",
        links: row.files || "",
        pe_year: row.pe_year || "",
        fd_year: row.fd_year || "",
        utl_year: row.utl_year || "",
        row_year: row.row_year || "",
        con_year: row.con_year || "",
        tot_cost: "$  "+row.tot_cost || "",
      };

      table_data.push({
        id: row.project_id,
        title: row.title || "",
        sponsor: row.sponsor || "",
        applicant: row. applicant || "",
      });
    });

    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("projects_table", JSON.stringify(table_data));

    return type;
  }
};

export { sourceData };
