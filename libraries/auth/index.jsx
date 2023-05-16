import { getToken } from "next-auth/jwt";
const isAdminAuthenticated = async (token) => {
  let authenticated = false;
  if (!token) {
    return authenticated;
  }
  const res = await fetch(`${process.env.baseAPI}/admin/authenticated`, {
    method: "POST",
    body: JSON.stringify({ token: token }),
  });
  const result = await res.json();
  if (result.authenticated) {
    authenticated = true;
  }
  return authenticated;
};
const isMypageAuthenticated = async (request) => {
  let authenticated = false;
  const token = await getToken({
    req: request,
    secret: process.env.SECRET,
  });
  if (token) {
    authenticated = true;
  }
  return authenticated;
};
const isAdminLogout = async () => {
  const res = await fetch(`${process.env.baseAPI}/admin/logout`, {
    method: "POST",
  });
  const data = await res.json();
  return data;
};
export { isAdminAuthenticated, isMypageAuthenticated, isAdminLogout };
