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
        window.location.href = `tel:${number}`;
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 border-red-500">
                <div className="flex items-center gap-2 mb-6">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                    <h1 className="text-2xl font-bold">Emergency Contact</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {emergencyNumbers.map((contact) => (
                        <Card key={contact.name} className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold">{contact.name}</h3>
                                    <p className="text-lg font-mono">{contact.number}</p>
                                </div>
                                <Button
                                    variant="destructive"
                                    onClick={() => handleCall(contact.number)}
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