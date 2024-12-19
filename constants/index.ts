export const RESOURCE_TYPES = {
    SHELTER: 'SHELTER',
    MEDICAL: 'MEDICAL',
    FOOD: 'FOOD',
    WATER: 'WATER',
    SUPPLIES: 'SUPPLIES',
} as const;

export const RESOURCE_STATUS = {
    AVAILABLE: 'AVAILABLE',
    LIMITED: 'LIMITED',
    UNAVAILABLE: 'UNAVAILABLE',
} as const;

export const REPORT_TYPES = {
    EMERGENCY: 'EMERGENCY',
    HAZARD: 'HAZARD',
    UPDATE: 'UPDATE',
    REQUEST: 'REQUEST',
} as const;

export const USER_ROLES = {
    ADMIN: 'ADMIN',
    RESPONDER: 'RESPONDER',
    MEMBER: 'MEMBER',
} as const;

export const EMERGENCY_NUMBERS = [
    { name: "Police", number: "911", description: "For immediate police assistance" },
    { name: "Fire Department", number: "911", description: "For fire emergencies" },
    { name: "Ambulance", number: "911", description: "For medical emergencies" },
    { name: "Poison Control", number: "1-800-222-1222", description: "For poison-related emergencies" },
] as const;