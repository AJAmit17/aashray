export type UserRole = 'ADMIN' | 'RESPONDER' | 'MEMBER';

export type ResourceType = 'SHELTER' | 'MEDICAL' | 'FOOD' | 'WATER' | 'SUPPLIES';

export type ResourceStatus = 'AVAILABLE' | 'LIMITED' | 'UNAVAILABLE';

export type ReportType = 'EMERGENCY' | 'HAZARD' | 'UPDATE' | 'REQUEST';

export interface Location {
    latitude: number;
    longitude: number;
    address?: string;
}

export interface Resource {
    id: string;
    name: string;
    type: ResourceType;
    location: Location;
    status: ResourceStatus;
    quantity?: number;
    description?: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Report {
    id: string;
    title: string;
    description: string;
    type: ReportType;
    location: Location;
    imageUrl?: string;
    verified: boolean;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface EmergencyContact {
    id: string;
    name: string;
    phone: string;
    relationship: string;
    userId: string;
}