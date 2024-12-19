import { RESOURCE_STATUS, RESOURCE_TYPES } from '@/constants';
import * as z from 'zod';

export const resourceSchema = z.object({
    name: z.string().min(1, "Name is required"),
    type: z.enum([
        RESOURCE_TYPES.SHELTER,
        RESOURCE_TYPES.MEDICAL,
        RESOURCE_TYPES.FOOD,
        RESOURCE_TYPES.WATER,
        RESOURCE_TYPES.SUPPLIES
    ]),
    location: z.object({
        latitude: z.number(),
        longitude: z.number(),
        address: z.string().optional(),
    }),
    status: z.enum([
        RESOURCE_STATUS.AVAILABLE,
        RESOURCE_STATUS.LIMITED,
        RESOURCE_STATUS.UNAVAILABLE
    ]).default(RESOURCE_STATUS.AVAILABLE),
    quantity: z.number().min(0).optional(),
    description: z.string().optional(),
});

export type ResourceFormData = z.infer<typeof resourceSchema>;