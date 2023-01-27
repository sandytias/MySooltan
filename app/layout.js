import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
         <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/dashboard'>Dasboard</Link></li>
          <li><Link href='/settings'>Settings</Link></li>
          <li><Link href='/cari'>Cari orang</Link></li>
         </ul>
        {children}
      </body>
    </html>
  )
}
