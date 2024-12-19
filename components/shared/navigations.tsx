"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, Map, MessageSquare, Phone, Shield } from "lucide-react";
import { MobileNav } from "./mobile-nav";

export function Navigation() {
    const pathname = usePathname();

    const routes = [
        {
            href: "/",
            label: "Home",
            icon: Home,
        },
        {
            href: "/map",
            label: "Emergency Map",
            icon: Map,
        },
        {
            href: "/resources",
            label: "Resources",
            icon: Shield,
        },
        {
            href: "/alerts",
            label: "Alerts",
            icon: AlertTriangle,
        },
        {
            href: "/chat",
            label: "AI Assistant",
            icon: MessageSquare,
        },
        {
            href: "/emergency",
            label: "Emergency",
            icon: Phone,
        },
    ];

    return (
        <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <div className="flex items-center gap-2">
                            <MobileNav routes={routes} />
                            <Link href="/" className="text-xl font-bold">
                                Aashray
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center gap-x-2">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        pathname === route.href
                                            ? "text-black dark:text-white"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    <Button
                                        variant={pathname === route.href ? "default" : "ghost"}
                                        className="w-full justify-start"
                                    >
                                        <route.icon className="h-4 w-4 mr-2" />
                                        <span className="hidden lg:inline">{route.label}</span>
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </div>
        </nav>
    );
}