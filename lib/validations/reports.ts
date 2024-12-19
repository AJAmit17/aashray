import * as z from 'zod';
import { REPORT_TYPES } from '@/constants';

export const reportSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  type: z.enum([
    REPORT_TYPES.EMERGENCY,
    REPORT_TYPES.HAZARD,
    REPORT_TYPES.UPDATE,
    REPORT_TYPES.REQUEST
  ]),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
    address: z.string().optional(),
  }),
  imageUrl: z.string().url().optional(),
});

export type ReportFormData = z.infer<typeof reportSchema>;