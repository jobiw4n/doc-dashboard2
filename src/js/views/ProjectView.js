import View from "./View.js";
import { sourceData } from "../utils/sourceUtils.js";

export default class extends View {
  constructor(params) {
    super(params);
    this.productId =  window.location.hash.replace("#", "").split("/")[1]
    // this.productId = params.id;
    this.setTitle(`Project: ${this.productId}`);
  }

  async getHtml() {
    const project = await getProject(this.productId);
    // this.setTitle(project.name);
    return /*html*/ `
        <h1 id="d-name">${this.productId} - ${project.title}</h1>
        <div class="row">  
            <div class="col-sm-7 col-12">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Sponsor</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      ${project.sponsor}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Applicant </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      ${project.applicant}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Route or Bridge </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      ${project.route_id}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Municipality</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      ${project.municipality}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Primary Project Category</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      ${project.project_cat}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Project Subtype</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      ${project.project_subtype}
                    </div>
                  </div>
                </div>
                
              </div>    
          </div>
        </div> 
        <div class="row">           
          <div class="col-sm-12 col-lg-12">
            <div class="card mb-3 mt-3">
              <div class="card-header">
                <h4>Project Summary</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">What is the desired result from this project? </h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.desired_result}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">What problem does project address?</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.project_need}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Project Scope</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.scope}
                  </div>
                </div>
                <hr>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Project Cost</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <table class="table table-sm table-hover table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Phase</th>
                          <th scope="col">Cost (in Million $)</th>
                          <th scope="col">Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Preliminary Engineering</td>
                          <td>${project.pe_cost}</td>
                          <td>${project.pe_year}</td>
                        </tr>
                        <tr>
                          <td>Final Design</td>
                          <td>${project.fd_cost}</td>
                          <td>${project.fd_year}</td>
                        </tr>
                        <tr>
                          <td>Right-of-way</td>
                          <td>${project.row_cost}</td>
                          <td>${project.row_year}</td>
                        </tr>
                        <tr>
                          <td>Utilities</td>
                          <td>${project.utl_cost}</td>
                          <td>${project.utl_year}</td>
                        </tr>
                        <tr>
                          <td>Construction</td>
                          <td>${project.con_cost}</td>
                          <td>${project.con_year}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th scope="row">Total Cost</th>
                          <td><strong>${project.tot_cost}</strong></td>
                          <td></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Project Documents</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${getLinks(project.files)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <!--  eval data -->
        <div class="row">           
          <div class="col-sm-12 col-lg-12">
            <div class="card mb-3 mt-3">
              <div class="card-header">
                <h4>Criteria Responses</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Is project an existing Major Regional Project (MRP)?</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.mrp}
                    <br>
                    <strong>If yes:</strong> ${project.mrp_yes}
                    <br>
                    <strong>If no, does it meet threshhold?:</strong> ${project.mrp_no}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Will project impact existing traffic?</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.traffic_impact}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Traffic Impact Additional Detail</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.traffic_impact_note}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Where is the proposed project referenced or supported in existing planning document(s)?</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.plan}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Name of plan reference above</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.plan_name}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Asset Improvements</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.asset_imp}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Safety Strategies</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.safety_strategies_two}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Will project involve adding a new traffic signal?</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.signalize}
                    <br><strong>If yes, where:</strong>
                    ${project.signalize_location}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Green design elements</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ${project.green_design}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>          
        `;
  }

  async onLoadCallback() {
    // relatedSourceTable(this.productId);
  }
}

const getProject = async (id) => {
  if (localStorage["projects"]) {
    return JSON.parse(localStorage["projects"])[id];
  } else {
    const projects = await sourceData("projects");
    return projects[id];
  }
};

const getLinks = (links) => {
  let _htmlfrag = ""
  if (links.length){
    links = links.split(",")
    links.forEach((link,i) => {
      _htmlfrag +=`
        <a href=${link} title="supporting document" data-toggle="tooltip" class="text-decoration-none" target="_blank">
          <span class="badge rounded-pill bg-primary">
            Document ${i+1}
          </span>
        </a>
      `
    });
  } 

  return _htmlfrag
};