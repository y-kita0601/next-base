'use client'
import "../globals.css";
import Sidebar from "@/app/components/admin/layout/sidebar";
import {useState} from "react";
import Header from "@/app/components/admin/layout/header";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const [currentPage, setCurrentPage] = useState('content')

    return (
        <>
            <div className="flex h-screen flex-col">
                <Header/>
                <div className="flex flex-1 overflow-hidden">
                <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                    <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
                    {children}
                    </main>
                </div>
            </div>
        </>
    );
}
