import { ReactNode } from "react";
import Image from "next/image";

export default function AuthLayout({ children }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-cover bg-center">
            {children}
        </div>
    );
}
