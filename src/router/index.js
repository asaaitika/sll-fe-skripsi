import { createRouter, createWebHistory } from 'vue-router'

// Design System Routes
const loginChildRoutes = (prefix) => [
  {
    path: '',
    name: prefix + '.admin',
    meta: { auth: false, name: 'Login Admin' },
    component: () => import('@/views/auth/default/AdminLogin.vue')
  },
  {
    path: 'login-employee',
    name: prefix + '.employee',
    meta: { auth: false, name: 'Login Employee' },
    component: () => import('@/views/auth/default/EmployeeLogin.vue')
  }
]

// Manage Admin Routes
const manageAdminChildRoutes = (prefix) => [
  {
    path: 'dashboard',
    name: prefix + '.dashboard',
    meta: { auth: true, name: 'Dashboard Admin' },
    component: () => import('@/views/admin/manage/DashboardPage.vue')
  },
  {
    path: 'employee',
    name: prefix + '.employee',
    meta: { auth: true, name: 'Manage Employee' },
    component: () => import('@/views/admin/manage/EmployeePage.vue')
  },
  {
    path: 'attendance',
    name: prefix + '.attendance',
    meta: { auth: true, name: 'Manage Attendance' },
    component: () => import('@/views/admin/manage/AttendancePage.vue')
  },
  {
    path: 'payroll',
    name: prefix + '.payroll',
    meta: { auth: true, name: 'Manage Payroll' },
    component: () => import('@/views/admin/manage/PayrollPage.vue')
  },
  {
    path: 'approval',
    name: prefix + '.approval',
    meta: { auth: true, name: 'Manage Approval' },
    component: () => import('@/views/admin/manage/ApprovalPage.vue')
  },
]

// Employee Routes
const employeeChildRoutes = (prefix) => [
  {
    path: 'live-attendance',
    name: prefix + '.liveattendance',
    meta: { auth: true, name: 'Live Attendance' },
    component: () => import('@/views/employee/LiveAttendancePage.vue')
  },
  {
    path: 'time-off',
    name: prefix + '.timeoff',
    meta: { auth: true, name: 'Time Off' },
    component: () => import('@/views/employee/TimeOffPage.vue')
  },
  {
    path: 'my-slip',
    name: prefix + '.myslip',
    meta: { auth: true, name: 'MySlip' },
    component: () => import('@/views/employee/MySlipPage.vue')
  },
  {
    path: 'attendance-log',
    name: prefix + '.attendancelog',
    meta: { auth: true, name: 'Attendance Log' },
    component: () => import('@/views/employee/AttendanceLogPage.vue')
  },
]

// Auth Default Routes
const authChildRoutes = (prefix) => [
  {
    path: 'login-karyawan',
    name: prefix + '.loginkaryawan',
    meta: { auth: false, name: 'Login Karyawan' },
    component: () => import('@/views/auth/default/LoginPage.vue')
  },
  {
    path: 'login-hrd',
    name: prefix + '.loginhrd',
    meta: { auth: false, name: 'Login HRD' },
    component: () => import('@/views/auth/default/AdminLogin.vue')
  },
  {
    path: 'signin',
    name: prefix + '.signin',
    meta: { auth: false, name: 'SignIn' },
    component: () => import('@/views/auth/default/SignIn.vue')
  },
  {
    path: 'register',
    name: prefix + '.register',
    meta: { auth: false, name: 'Register' },
    component: () => import('@/views/auth/default/SignUp.vue')
  },
  {
    path: 'reset-password',
    name: prefix + '.reset-password',
    meta: { auth: false, name: 'Reset Password' },
    component: () => import('@/views/auth/default/ResetPassword.vue')
  },
  {
    path: 'varify-email',
    name: prefix + '.varify-email',
    meta: { auth: false, name: 'Varify Email' },
    component: () => import('@/views/auth/default/VarifyEmail.vue')
  },
  {
    path: 'lock-screen',
    name: prefix + '.lock-screen',
    meta: { auth: false, name: 'Lock Screen' },
    component: () => import('@/views/auth/default/LockScreen.vue')
  }
]

// Dashboard routes
const dashboardRoutes = (prefix) => [
  {
    path: '',
    name: prefix + '.dashboard',
    meta: { auth: true, name: 'Dash', isBanner: false },
    component: () => import('@/views/dashboards/IndexPage.vue')
  }
]

// Default routes
const defaultChildRoutes = (prefix) => [
  {
    path: '',
    name: prefix + '.dashboard',
    meta: { auth: true, name: 'Home', isBanner: true },
    component: () => import('@/views/dashboards/IndexPage.vue')
  },
  // Spacial Pages
  {
    path: '/billing',
    name: prefix + '.billing',
    meta: { auth: true, name: 'Billing', isBanner: true },
    component: () => import('@/views/spacial-pages/BillingPage.vue')
  },
  {
    path: '/calender',
    name: prefix + '.calender',
    meta: { auth: true, name: 'Calender', isBanner: true },
    component: () => import('@/views/spacial-pages/CalenderPage.vue')
  },
  {
    path: '/kanban',
    name: prefix + '.kanban',
    meta: { auth: true, name: 'Kanban', isBanner: true },
    component: () => import('@/views/spacial-pages/KanbanPage.vue')
  },
  {
    path: '/pricing',
    name: prefix + '.pricing',
    meta: { auth: true, name: 'Pricing', isBanner: true },
    component: () => import('@/views/spacial-pages/PricingPage.vue')
  },
  {
    path: '/timeline',
    name: prefix + '.timeline',
    meta: { auth: true, name: 'Timeline', isBanner: true },
    component: () => import('@/views/spacial-pages/TimelinePage.vue')
  },
  {
    path: '/rtl-support',
    name: prefix + '.rtlsupport',
    meta: { auth: true, name: 'RTL-Support', isBanner: true },
    component: () => import('@/views/spacial-pages/RtlSupport.vue')
  },
  // Users Pages
  {
    path: '/user-list',
    name: prefix + '.user-list',
    meta: { auth: true, name: 'User List', isBanner: true },
    component: () => import('@/views/user/ListPage.vue')
  },
  {
    path: '/user-add',
    name: prefix + '.user-add',
    meta: { auth: true, name: 'User Add', isBanner: true },
    component: () => import('@/views/user/AddPage.vue')
  },
  {
    path: '/user-profile',
    name: prefix + '.user-profile',
    meta: { auth: true, name: 'User Add', isBanner: true },
    component: () => import('@/views/user/ProfilePage.vue')
  },
  {
    path: '/privacy-setting',
    name: prefix + '.user-privacy-setting',
    meta: { auth: true, name: 'Privacy Setting', isBanner: true },
    component: () => import('@/views/user/PrivacySetting.vue')
  },
  // Widgets Pages
  {
    path: '/widget-basic',
    name: prefix + '.widget-basic',
    meta: { auth: true, name: 'Widget Basic', isBanner: true },
    component: () => import('@/views/widgets/WidgetBasic.vue')
  },
  {
    path: '/widget-chart',
    name: prefix + '.widget-chart',
    meta: { auth: true, name: 'Widget Chart', isBanner: true },
    component: () => import('@/views/widgets/WidgetChart.vue')
  },
  {
    path: '/widget-card',
    name: prefix + '.widget-card',
    meta: { auth: true, name: 'Widget Card', isBanner: true },
    component: () => import('@/views/widgets/WidgetCard.vue')
  },
  // Map Pages
  {
    path: '/map-google',
    name: prefix + '.map-google',
    meta: { auth: true, name: 'Google Map', isBanner: true },
    component: () => import('@/views/maps/GooglePage.vue')
  },
  {
    path: '/map-vector',
    name: prefix + '.map-vector',
    meta: { auth: true, name: 'Vector Map', isBanner: true },
    component: () => import('@/views/maps/VectorPage.vue')
  },
  // Form Pages
  {
    path: '/elements',
    name: prefix + '.elements',
    meta: { auth: true, name: 'Elements', isBanner: true },
    component: () => import('@/views/forms/ElementsPage.vue')
  },
  {
    path: '/validation',
    name: prefix + '.validation',
    meta: { auth: true, name: 'Validation', isBanner: true },
    component: () => import('@/views/forms/ValidationPage.vue')
  },
  {
    path: '/wizard',
    name: prefix + '.wizard',
    meta: { auth: true, name: 'Wizard', isBanner: true },
    component: () => import('@/views/forms/WizardPage.vue')
  },
  // Table Pages
  {
    path: '/bootstrap-table',
    name: prefix + '.bootstrap-table',
    meta: { auth: true, name: 'Botstrap Table', isBanner: true },
    component: () => import('@/views/tables/BootstrapTable.vue')
  },
  {
    path: '/datatable',
    name: prefix + '.data-table',
    meta: { auth: true, name: 'Data Table', isBanner: true },
    component: () => import('@/views/tables/DataTable.vue')
  },
  // Icons Pages
  {
    path: '/icons/solid',
    name: prefix + '.icons.solid',
    meta: { auth: true, name: 'Solid Icon', isBanner: true },
    component: () => import('@/views/icons/SolidIcon.vue')
  },
  {
    path: '/icons/outlined',
    name: prefix + '.icons.outlined',
    meta: { auth: true, name: 'Outlined Icon', isBanner: true },
    component: () => import('@/views/icons/OutlinedIcon.vue')
  },
  {
    path: '/icons/dual-tone',
    name: prefix + '.icons.dual-tone',
    meta: { auth: true, name: 'Dual Tone Icon', isBanner: true },
    component: () => import('@/views/icons/DualToneIcon.vue')
  },
  // Extra Pages
  {
    path: '/privacy-policy',
    name: prefix + '.privacy-policy',
    meta: { auth: true, name: 'Privacy Policy', isBanner: true },
    component: () => import('@/views/extra/PrivacyPolicy.vue')
  },
  {
    path: '/terms-and-conditions',
    name: prefix + '.terms-and-conditions',
    meta: { auth: true, name: 'Terms and Conditions', isBanner: true },
    component: () => import('@/views/extra/TermsAndConditions.vue')
  },
  {
    path: '/admin-permissions',
    name: prefix + '.admin-permissions',
    meta: { auth: true, name: 'Admin Permissions', isBanner: true },
    component: () => import('@/views/admin/AdminPage.vue')
  }
]

const errorRoutes = (prefix) => [
  // Error Pages
  {
    path: '404',
    name: prefix + '.404',
    meta: { auth: true, name: 'Error 404', isBanner: true },
    component: () => import('@/views/errors/Error404Page.vue')
  },
  {
    path: '500',
    name: prefix + '.500',
    meta: { auth: true, name: 'Error 500', isBanner: true },
    component: () => import('@/views/errors/Error500Page.vue')
  },
  {
    path: 'maintenance',
    name: prefix + '.maintenance',
    meta: { auth: true, name: 'Maintenance', isBanner: true },
    component: () => import('@/views/errors/MaintenancePage.vue')
  }
]

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../layouts/guest/BlankLayout.vue'),
    children: loginChildRoutes('login')
  },
  // Manage Admin Pages
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: manageAdminChildRoutes('admin')
  },
  // Employee Pages
  {
    path: '/employee',
    name: 'employee',
    component: () => import('../layouts/menu-styles/HorizontalLayout.vue'),
    children: employeeChildRoutes('employee')
  },
  // Default Pages
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: defaultChildRoutes('default')
  },
  // Menu Styles
  {
    path: '/horizontal',
    name: 'horizontal',
    component: () => import('../layouts/menu-styles/HorizontalLayout.vue'),
    children: dashboardRoutes('horizontal')
  },
  {
    path: '/dual-horizontal',
    name: 'dual-horizontal',
    component: () => import('../layouts/menu-styles/DualHorizontalLayout.vue'),
    children: dashboardRoutes('dual-horizontal')
  },
  {
    path: '/dual-compact',
    name: 'dual-compact',
    component: () => import('../layouts/menu-styles/DualCompactLayout.vue'),
    children: dashboardRoutes('dual-compact')
  },
  {
    path: '/boxed',
    name: 'boxed',
    component: () => import('../layouts/menu-styles/BoxedLayout.vue'),
    children: dashboardRoutes('boxed')
  },
  {
    path: '/boxed-fancy',
    name: 'boxed-fancy',
    component: () => import('../layouts/menu-styles/BoxedFancyLayout.vue'),
    children: dashboardRoutes('boxed-fancy')
  },

  // Auth Skins
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/guest/BlankLayout.vue'),
    children: authChildRoutes('auth')
  },
  // Errors Pages
  {
    path: '/errors',
    name: 'errors',
    component: () => import('../layouts/guest/BlankLayout.vue'),
    children: errorRoutes('errors')
  }
]

const router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})

export default router
