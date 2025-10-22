import { Routes } from '@angular/router';
import { EmployeeListComponent } from './Pages/employee-list/employee-list.component';
import { EmployeeFormComponent } from './Pages/employee-form/employee-form.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';

export const routes: Routes = [
    { path:'' , redirectTo:'list' , pathMatch:'full' },
    { path:'list' , component:EmployeeListComponent , title:'Emp List' },
    { path:'new-employee' , component:EmployeeFormComponent },
    { path:'**' , component:NotfoundComponent }
];
