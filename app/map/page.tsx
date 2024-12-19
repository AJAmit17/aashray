"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { Resource } from "@prisma/client";

//@ts-ignore
const Map = dynamic(() => import("@/components/shared/map"), { ssr: false });

export default function MapPage() {
    const [resources, setResources] = useState([]);
    const [selectedType, setSelectedType] = useState<Resource | null>(null);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await fetch(`/api/resources${selectedType ? `?type=${selectedType}` : ''}`);
                const data = await response.json();
                setResources(data);
            } catch (error) {
                console.error("Failed to fetch resources:", error);
            }
        };

        fetchResources();
    }, [selectedType]);

    return (
        <div className="space-y-6">
            <Card className="p-6">
                <h1 className="text-2xl font-bold mb-4">Emergency Resources Map</h1>
                <div className="h-[600px] w-full">
                    <Map
                        //@ts-ignore
                        resources={resources} />
                </div>
            </Card>
        </div>
    );
}