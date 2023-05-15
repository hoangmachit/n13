import Link from "next/link";
import SignInButton from "../components/auth/SignInButton";
import SignOutButton from "../components/auth/SignOutButton";
export const metadata = {
  title: 'Coconala.com',
  description: 'Generated by create next app',
}
export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/admin'}>Admin</Link>
        </li>
        <li>
          <Link href={'/login'}>Admin Login</Link>
        </li>
        <li>
          <Link href={'/mypage'}>My Page</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </main>
  )
}
