import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', loadComponent: ()=> import('./pages/login/login.component').then(m=> m.LoginComponent) },
  { path: 'admin', loadComponent: ()=> import('./pages/default/default.component').then(m=> m.DefaultComponent), 
  children: [
    // ----- Dashboard ----- //
    { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES) },

    // ------ Profiles ------- //
    { path: 'users', loadChildren: () => import('./pages/user/user.routes').then(m => m.USER_ROUTES) },
    { path: 'customers', loadChildren: () => import('./pages/customer/customer.routes').then(m => m.CUSTOMER_ROUTES) },
    
    // ------- Products ------- //
    { path: 'parentcategories', loadChildren: () => import('./pages/parentcategory/parentcategory.routes').then(m => m.PARENTCATEGORY_ROUTES) },
    { path: 'childcategories', loadChildren: () => import('./pages/childcategory/childcategory.routes').then(m => m.CHILDCATEGORY_ROUTES) },
    { path: 'products', loadChildren: () => import('./pages/product/product.routes').then(m => m.PRODUCT_ROUTES) },

    // ------- Orders -------- //
    { path: 'orders', loadChildren: () => import('./pages/order/order.routes').then(m => m.ORDER_ROUTES) },
    { path: 'transactions', loadChildren: () => import('./pages/transaction/transaction.routes').then(m => m.TRANSACTION_ROUTES) },

    // ------- Settings ------ //
    { path: 'settings', loadComponent: () => import("./pages/setting/setting.component").then(m => m.SettingComponent),
    children: [
      { path: 'taxdelivery-charges', loadChildren: () => import("./pages/setting/components/common/common.routes").then(m=> m.COMMON_ROUTES) },
      { path: 'cms', loadChildren: () => import("./pages/setting/components/common/common.routes").then(m=> m.COMMON_ROUTES) },
      { path: 'pincodes', loadChildren: () => import("./pages/setting/components/common/common.routes").then(m=> m.COMMON_ROUTES) },
      { path: 'sliders', loadChildren: () => import("./pages/setting/components/common/common.routes").then(m=> m.COMMON_ROUTES) },
      { path: 'contact-details', loadChildren: () => import("./pages/setting/components/common/common.routes").then(m=> m.COMMON_ROUTES) },
      { path: 'social-links', loadChildren: () => import("./pages/setting/components/common/common.routes").then(m=> m.COMMON_ROUTES) },
    ]
  },


  ]},
 
  
];
