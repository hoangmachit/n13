export const metadata = {
  title: "Administrator",
  description: "Generated by Next.js",
};
import Link from "next/link";
export default async function Admin() {
  return (
    <>
      <h2>Admin Page</h2>
      <Link href={"/admin/configs"}>Go to configs</Link>
    </>
  );
}
