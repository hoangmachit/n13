import "../../../../public/admin/assets/vendor/fonts/boxicons.css";
import "../../../../public/admin/assets/vendor/css/core.css";
import "../../../../public/admin/assets/vendor/css/theme-default.css";
import "../../../../public/admin/assets/css/demo.css";
import "../../../../public/admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../../../../public/admin/assets/vendor/libs/apex-charts/apex-charts.css";
import "../../../../public/admin/assets/vendor/fonts/boxicons.css";
import "../../../../public/admin/assets/vendor/fonts/boxicons.css";

import Provider from "../../Provider";
import AdminFooter from "../../components/admin/AdminFooter";
import AdminSideBar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import Script from "next/script";
export default async function AdminLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="/admin/assets/vendor/js/helpers.js"></Script>
        <Script src="/admin/assets/js/config.js"></Script>
      </head>
      <body>
        <div className="light-style layout-menu-fixed">
          <Provider>
            <div className="layout-wrapper layout-content-navbar">
              <div className="layout-container">
                <AdminSideBar />
                <div className="layout-page">
                  <AdminNavbar />
                  <div className="content-wrapper">
                    {children}
                    <AdminFooter />
                    <div className="content-backdrop fade"></div>
                  </div>
                </div>
              </div>
              <div className="layout-overlay layout-menu-toggle"></div>
            </div>
          </Provider>
        </div>
        <Script src="/admin/assets/vendor/libs/jquery/jquery.js"></Script>
        <Script src="/admin/assets/vendor/libs/popper/popper.js"></Script>
        <Script src="/admin/assets/vendor/js/bootstrap.js"></Script>
        <Script src="/admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></Script>
        <Script src="/admin/assets/vendor/js/menu.js"></Script>
        <Script src="/admin/assets/vendor/libs/apex-charts/apexcharts.js"></Script>
        <Script src="/admin/assets/js/main.js"></Script>
        <Script src="/admin/assets/js/dashboards-analytics.js"></Script>
        <Script src="/admin/assets/vendor/libs/jquery/jquery.js"></Script>
        <Script src="/admin/assets/vendor/libs/popper/popper.js"></Script>
      </body>
    </html>
  );
}
