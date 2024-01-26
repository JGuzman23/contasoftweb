import { Routes } from '@angular/router';
import { HeaderSidebarComponent } from './component/header-sidebar/header-sidebar.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ClientsComponent } from './component/clients/clients.component';
import { O606Component } from './component/operations/o606/o606.component';
import { O607Component } from './component/operations/o607/o607.component';
import { ConciliacionComponent } from './component/operations/conciliacion/conciliacion.component';
import { DefaultComponent } from './component/default/default.component';
import { FacturacionComponent } from './component/ef/facturacion/facturacion.component';

import { ContactComponent } from './component/contact/contact.component';
import { CreateconciliacionComponent } from './modals/createconciliacion/createconciliacion.component';
import { AccountComponent } from './component/useraccount/account/account.component';
import BankComponent from './component/bank/bank.component';
import { IncomeComponent } from './component/invoices/income/income.component';
import { BillsComponent } from './component/invoices/bills/bills.component';



export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'', component:HomeComponent},
    {path:'dashboard',
     loadComponent:()=> import('./component/sidebar/sidebar.component').then(c=>c.SidebarComponent),
     children:[
        {path:'', component:DefaultComponent},
        {path:'clients', component:ClientsComponent},
        {path:'contact', component:ContactComponent},
        {path:'bank', component:BankComponent},
        {path:'conciliacion', component:ConciliacionComponent},
        {path:'efactura', component:FacturacionComponent},
        {path:'606', component:O606Component},

        {path:'607', component:O607Component},
        {path:'gastos', component:BillsComponent},
        {path:'ingresos', component:IncomeComponent},
       

     ]
    },
    {path:'account', component:AccountComponent},
   
    {path:'singup', component:RegisterComponent}
];

