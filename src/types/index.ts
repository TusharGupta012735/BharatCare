export type UserRole = 'patient' | 'doctor';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  profileImage?: string;
}

export interface HealthStatus {
  id: string;
  userId: string;
  date: string;
  symptoms: string[];
  painLevel: number;
  notes: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientId: string;
  datetime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'completed';
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  fees: number;
  facilities: string[];
  type: 'government' | 'private';
}