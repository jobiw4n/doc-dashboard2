import $ from "jquery";
import dt from "datatables.net-bs5";
import { sourceData } from "../utils/sourceUtils";

export default async () => {
  let products = $("#table").DataTable({
    data: localStorage["projects_table"]
      ? JSON.parse(localStorage["projects_table"])
      : await sourceData("projects_table"),
    columns: [
      {
        data: "id",
        title: "ID",
        width: "7%",
      },
      { data: "title", title: "Project Title", width: "40%" },
      { data: "sponsor", title: "Sponsor"},
      { data: "applicant", title: "Applicant Name"},
      { data: "id", title: "Details", 
        render: function (data, type,row) {
          return quickLinks(data, row.id)
        }
    }


    ],
    // order: [[2, "asc"]],
    pageLength: 20,
    bLengthChange: false,
    dom: '<"toolbar">frtip',
    stateSave: true,
  });


};

const quickLinks = function (source, id) {
  let _htmlfrag = "";

  // build weblink icon
  _htmlfrag += `
    <a href="#project/${id}" title="view project detail" data-toggle="tooltip" class="text-decoration-none">View detail
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
      </svg>
    </a>
  `;
  
  return _htmlfrag;
};

