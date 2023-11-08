import React  from "react";
import Link from "next/link";

interface DashBoardLayoutProps {
    children: React.ReactNode
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = (props) => {
    return (
      <div>
         <nav className="bg-white text-black py-4 px-5 flex justify-between item-center">
            <h3 className="text-xl">Logo</h3>
            <ul className="flex item-center gap-8">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Login</li>
            </ul>
         </nav>
         <div className="flex">
            <div className="h-screen bg-white w-[15vw] text-black text-2xl">
                <ul className="pt-5 flex flex-col gap-5 px-3">
                    <li><Link href="/dashboard">Dasboard</Link></li>
                    <li><Link href="/dashboard/todos">Todos</Link></li>
                    <li><Link href="/dashboard/users">Users</Link></li>
                    <li><Link href="/dashboard/profile">Profile</Link></li>
                </ul>
            </div>
            <div className="p-4" max-h-screen overflow-auto>{props.children}</div>
         </div>
      </div>
    )
}

export default DashBoardLayout;