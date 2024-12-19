'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, AlertTriangle } from "lucide-react";

const emergencyNumbers = [
    { name: "Police", number: "911" },
    { name: "Fire Department", number: "911" },
    { name: "Ambulance", number: "911" },
    { name: "Poison Control", number: "1-800-222-1222" },
];

export default function EmergencyPage() {
    const handleCall = (number: string) => {
        // Use window.location.href to initiate a call
        window.location.href = `tel:${number}`;
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Emergency Header */}
            <Card className="p-6 border-red-500 border-l-4">
                <div className="flex items-center gap-2 mb-6">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                    <h1 className="text-2xl font-bold text-red-600">Emergency Contacts</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {emergencyNumbers.map((contact) => (
                        <Card key={contact.name} className="p-4 border border-gray-300 shadow-md">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold">{contact.name}</h3>
                                    <p className="text-lg font-mono text-gray-600">{contact.number}</p>
                                </div>
                                <Button
                                    variant="destructive"
                                    onClick={() => handleCall(contact.number)}
                                    className="ml-4"
                                >
                                    <Phone className="h-4 w-4 mr-2" />
                                    Call Now
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Card>
        </div>
    );
}
