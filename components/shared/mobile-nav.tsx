"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { UserButton, SignInButton, useAuth } from "@clerk/nextjs";

interface Route {
    href: string;
    label: string;
    icon: any;
}

interface MobileNavProps {
    routes: Route[];
}

export function MobileNav({ routes }: MobileNavProps) {
    const pathname = usePathname();
    const router = useRouter();
    const { isSignedIn } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
                <SheetHeader className="p-6 border-b">
                    <SheetTitle className="text-xl font-bold">Aashray</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-4">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:bg-muted px-6 py-3",
                                pathname === route.href
                                    ? "bg-muted"
                                    : "text-muted-foreground"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="flex items-center gap-x-2">
                                <route.icon className="h-5 w-5" />
                                <span>{route.label}</span>
                            </div>
                        </Link>
                    ))}
                    <div className="px-6 py-3 border-t mt-auto">
                        {isSignedIn ? (
                            <div className="flex items-center gap-x-2">
                                <UserButton afterSignOutUrl="/" />
                                <span className="text-sm font-medium">Account</span>
                            </div>
                        ) : (
                            <SignInButton mode="modal">
                                <Button variant="default" className="w-full">
                                    Sign In
                                </Button>
                            </SignInButton>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
