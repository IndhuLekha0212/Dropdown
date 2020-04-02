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
public states= [
  'Andhra Pradesh - Hyderabad',
  'Arunachal Pradesh - Itanagar',
  'Assam - Dispur',
  'Bihar - Patna',
  'Goa - Panaji',
  'Gujarat - Gandhinagar',
  'Haryana - Chandigarh',
  'Himachal Pradesh - Shimla',
  'Jammu & Kashmir - Srinagar',
  'Karnataka - Bangalore',
  'Kerala - Thiruvananthapuram',
  'Madhya Pradesh - Bhopal',
  'Maharashtra - Mumbai',
  'Manipur - Imphal',
  'Meghalaya - Shillong',
  'Mizoram - Aizawl',
  'Nagaland - Kohima',
  'Orissa - Bhubaneswar',
  'Punjab - Chandigarh',
  'Rajasthan - Jaipur',
  'Sikkim - Gangtok',
  'Tamil Nadu - Chennai',
  'Tripura - Agartala',
  'Uttar Pradesh - Lucknow',
  'West Bengal - Kolkata',
  'Chhattisgarh - Raipur',
  'Uttarakhand - Dehradun',
  'Jharkhand - Ranchi',
  'Telangana – Hyderabad'
]
}
