"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Resource } from "@prisma/client";
import { Shield, Plus } from "lucide-react";
import ResourceList from "@/components/shared/resource-list";
import ResourceForm from "@/components/shared/resource-form";

export default function ResourcesPage() {
    const [resources, setResources] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedType, setSelectedType] = useState<Resource | null>(null);

    useEffect(() => {
        fetchResources();
    }, [selectedType]);

    const fetchResources = async () => {
        try {
            const response = await fetch(`/api/resources${selectedType ? `?type=${selectedType}` : ''}`);
            const data = await response.json();
            setResources(data);
        } catch (error) {
            console.error("Failed to fetch resources:", error);
        }
    };

    return (
        <div className="space-y-6">
            <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Shield className="h-6 w-6" />
                        <h1 className="text-2xl font-bold">Emergency Resources</h1>
                    </div>
                    <Button onClick={() => setIsFormOpen(true)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Resource
                    </Button>
                </div>

                <ResourceList resources={resources} onUpdate={fetchResources} />
            </Card>

            <ResourceForm
                open={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSuccess={fetchResources}
            />
        </div>
    );
}