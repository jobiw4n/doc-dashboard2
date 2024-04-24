import View from './View.js';
import projectTable from '../components/projectTable.js';

export default class extends View {
  constructor(params) {
    super(params);
    this.setTitle('PA TIP Candidates');
  }

  async getHtml() {
    return /*html*/ `
      <h1>Project Candidates</h1>
      <p>
        This is a ready-only viewer of PA FY25 TIP candidate projects submitted by parnter agencies. This data is for internal use only and should not be shared. 
      </p>
      <div class="row">            
        <!--main table--> 
        <div class="col-sm-12 col-lg-12">
            <table id="table" class="table table-striped table-bordered"> 
              <!-- insert a table yo -->
            </table>
            <div id="Filters">
                
            </div>
        </div>
      </div>
    `;
  }

  async onLoadCallback() {
    projectTable();
  }
}
