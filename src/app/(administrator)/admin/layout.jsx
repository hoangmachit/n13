import Provider from "../../Provider";
import AdminHeader from "../../components/admin/Header";
import AdminFooter from "../../components/admin/Footer";
import AdminUserList from "../../components/admin/Users/List";
import { getUsers } from "../../../../libraries/prisma/users";

// export const dynamic = 'force-dynamic'
export const revalidate = 0;
async function getData() {
  const { users } = await getUsers();
  if (!users) {
    throw new Error("Failed to fetch data");
  }
  return users;
}
export default async function AdminLayout({ children }) {
  const users = await getData();
  return (
    <html lang="en">
      <body>
        <Provider>
          <AdminHeader />
          {children}
          <AdminUserList users={users} />
          <AdminFooter />
        </Provider>
      </body>
    </html>
  );
}
