"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import { emergencyPrompts } from "@/lib/gemini";

export default function ChatPage() {
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async (content: string) => {
        try {
            setIsLoading(true);
            setChatHistory((prev) => [...prev, { role: "user", content }]);

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: content }),
            });

            const data = await response.json();

            setChatHistory((prev) => [...prev, { role: "assistant", content: data.response }]);
            setMessage("");
        } catch (error) {
            console.error("Chat error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                    <MessageSquare className="h-6 w-6" />
                    <h1 className="text-2xl font-bold">Emergency AI Assistant</h1>
                </div>

                <div className="space-y-4 mb-6">
                    <h2 className="text-lg font-semibold">Quick Emergency Guides</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {Object.entries(emergencyPrompts).map(([key, prompt]) => (
                            <Button
                                key={key}
                                variant="outline"
                                onClick={() => sendMessage(prompt)}
                                disabled={isLoading}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="h-[400px] overflow-y-auto border rounded-lg p-4 mb-4 space-y-4">
                    {chatHistory.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg ${msg.role === "user"
                                    ? "bg-primary text-primary-foreground ml-auto max-w-[80%]"
                                    : "bg-muted max-w-[80%]"
                                }`}
                        >
                            {msg.content}
                        </div>
                    ))}
                </div>

                <div className="flex gap-2">
                    <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your emergency-related question..."
                        onKeyPress={(e) => e.key === "Enter" && message && sendMessage(message)}
                    />
                    <Button
                        onClick={() => message && sendMessage(message)}
                        disabled={!message || isLoading}
                    >
                        Send
                    </Button>
                </div>
            </Card>
        </div>
    );
}