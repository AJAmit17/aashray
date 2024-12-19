'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { InfoIcon, AlertTriangle } from "lucide-react";

const disasterGuides = [
  {
    title: "Earthquake Safety",
    type: "Natural",
    steps: [
      "Drop to the ground and take cover under a sturdy desk or table",
      "Stay away from windows, bookcases, and other heavy objects",
      "If indoors, stay there until the shaking stops",
      "If outdoors, move to a clear area away from buildings",
      "Be prepared for aftershocks"
    ]
  },
  {
    title: "Flood Preparedness",
    type: "Natural",
    steps: [
      "Move to higher ground immediately",
      "Listen to emergency broadcasts",
      "Turn off utilities at main switches",
      "Avoid walking or driving through flood waters",
      "Prepare an emergency kit with essential supplies"
    ]
  },
  {
    title: "Fire Emergency",
    type: "Both",
    steps: [
      "Activate the nearest fire alarm",
      "Call emergency services immediately",
      "Use stairs, not elevators",
      "Stay low to avoid smoke inhalation",
      "Feel doors for heat before opening"
    ]
  },
  {
    title: "Hurricane Preparation",
    type: "Natural",
    steps: [
      "Board up windows and secure loose items",
      "Stock up on non-perishable food and water",
      "Keep important documents in a waterproof container",
      "Have a battery-powered radio",
      "Know your evacuation route"
    ]
  },
  {
    title: "Chemical Spill",
    type: "Man-made",
    steps: [
      "Evacuate the affected area immediately",
      "Call hazardous materials team",
      "Avoid touching or inhaling fumes",
      "Close off ventilation systems",
      "Document exposure symptoms"
    ]
  },
  {
    title: "Cyclone Response",
    type: "Natural",
    steps: [
      "Keep monitoring local weather updates and warning systems",
      "Store drinking water in clean containers and non-perishable food",
      "Keep your emergency kit ready with essential medications",
      "Secure important documents in waterproof containers",
      "Identify strong buildings designated as cyclone shelters",
      "Park vehicles under solid shelter",
      "Help elderly and disabled people to reach safe shelter"
    ]
  },
  {
    title: "Landslide Safety",
    type: "Natural",
    steps: [
      "Listen for unusual sounds like trees cracking or boulders knocking",
      "Watch for changes in water flow or sudden muddy water",
      "Move away from the path of the landslide immediately",
      "Stay alert during intense short-term rainfall",
      "Evacuate horizontally towards safer ground",
      "Contact local authorities if you notice ground movement",
      "Avoid crossing bridges or steep terrain during heavy rains"
    ]
  },
  {
    title: "Industrial Accident",
    type: "Man-made",
    steps: [
      "Immediately alert facility safety personnel",
      "Follow designated evacuation routes",
      "Do not use elevators during evacuation",
      "Move crosswind, never directly with or against the wind",
      "Avoid touching or walking through spilled chemicals",
      "Remove contaminated clothing if safe to do so",
      "Seek medical attention if exposed to harmful substances"
    ]
  },
  {
    title: "Tsunami Warning",
    type: "Natural",
    steps: [
      "Move to higher ground immediately (at least 2 miles inland)",
      "Don't wait for official warnings if you feel strong earthquakes",
      "Stay away from the beach and waterfront areas",
      "Follow evacuation orders promptly",
      "Keep your emergency radio on for updates",
      "Don't return until authorities declare it's safe",
      "Be prepared for multiple waves hours apart"
    ]
  },
  {
    title: "Nuclear Emergency",
    type: "Man-made",
    steps: [
      "Get inside the nearest building immediately",
      "Remove contaminated clothing and seal it in a plastic bag",
      "Take a thorough shower if possible",
      "Stay tuned to emergency broadcast channels",
      "Consume only sealed food and bottled water",
      "Minimize time spent outdoors",
      "Follow radiation exposure treatment if advised"
    ]
  },
  {
    title: "Heat Wave Protection",
    type: "Natural",
    steps: [
      "Stay indoors during peak heat hours (11 AM - 3 PM)",
      "Drink plenty of water even if not thirsty",
      "Wear light-colored, loose-fitting clothes",
      "Check on elderly neighbors and vulnerable people",
      "Never leave children or pets in parked vehicles",
      "Use ORS (Oral Rehydration Solution) if needed",
      "Recognize heat exhaustion symptoms"
    ]
  },
  {
    title: "Terrorism Incident",
    type: "Man-made",
    steps: [
      "Run - Get away from the danger area if possible",
      "Hide - Find cover and silence electronic devices",
      "Fight - As an absolute last resort",
      "Follow instructions from security forces",
      "Avoid using elevators during evacuation",
      "Help others escape if possible",
      "Report suspicious activities to authorities"
    ]
  },
  {
    title: "Pandemic Response",
    type: "Biological",
    steps: [
      "Follow official health guidelines strictly",
      "Maintain proper hygiene and sanitization",
      "Wear appropriate protective equipment",
      "Practice social distancing as recommended",
      "Monitor symptoms and seek medical help if needed",
      "Stock essential supplies without hoarding",
      "Stay updated with official health advisories"
    ]
  }
];

export default function GuidePage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <InfoIcon className="h-6 w-6" />
            Emergency Response Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              These guidelines are for general information. Always follow instructions
              from local authorities and emergency services during actual emergencies.
            </AlertDescription>
          </Alert>

          <Accordion type="single" collapsible className="space-y-4">
            {disasterGuides.map((guide, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border p-2 rounded-lg">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <span>{guide.title}</span>
                    <Badge variant={guide.type === "Natural" ? "default" : "destructive"}>
                      {guide.type}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-2">
                    {guide.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-2">
                        <span className="font-bold min-w-[24px]">{stepIndex + 1}.</span>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Emergency Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Alert>
              <AlertTitle>Police Emergency</AlertTitle>
              <AlertDescription>Dial 100</AlertDescription>
            </Alert>
            <Alert>
              <AlertTitle>Fire Emergency</AlertTitle>
              <AlertDescription>Dial 101</AlertDescription>
            </Alert>
            <Alert>
              <AlertTitle>Ambulance</AlertTitle>
              <AlertDescription>Dial 102</AlertDescription>
            </Alert>
            <Alert>
              <AlertTitle>Disaster Management</AlertTitle>
              <AlertDescription>Dial 108</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
