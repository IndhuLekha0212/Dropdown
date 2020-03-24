import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  title = 'project';
  public name ="Status";
  public selects =['Agreement sent','Pending Approval','T and C approved','Disbursed','Assigned to Credit Analysis','Analysis in progress','Agreement Signed',
                    'T and C under Finailization','Application Rejected','Agreement in Progress'];
}
