"use client";
import { useRouter } from "next/navigation";
export default function AdminUserList(props) {
  const { users } = props;
  const router = useRouter();
  const handleLogoutAdmin = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.baseAPI}/admin/logout`, {
      method: "POST",
    });
    const data = await res.json();
    if (data.status) {
      router.push("/login");
    }
  };
  return (
    <div>
      <button onClick={(e) => handleLogoutAdmin(e)}>Logout admin</button>
      <ul>
        {users &&
          users.map((user) => {
            return (
              <li key={user.id}>
                <p>Id: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Image: {user.image}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
