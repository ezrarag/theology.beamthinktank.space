import { createClient } from '@supabase/supabase-js';

// These will be set as environment variables in production
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for future use
export interface CityChapter {
  id: number;
  name: string;
  state?: string;
  country: string;
  description?: string;
  contact_email?: string;
  contact_phone?: string;
  address?: string;
  coordinates?: { lat: number; lng: number };
  created_at: string;
}

export interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  price: number;
  instructor: string;
  level: string;
  topics: string[];
  image_url?: string;
  enrollment_count: number;
  rating: number;
  created_at: string;
}

export interface Donation {
  id: number;
  amount: number;
  is_recurring: boolean;
  recurring_frequency?: 'monthly' | 'quarterly' | 'yearly';
  donor_email: string;
  donor_name?: string;
  message?: string;
  stripe_payment_intent_id?: string;
  created_at: string;
}

// Example functions for future implementation
export const getCityChapters = async (): Promise<CityChapter[]> => {
  const { data, error } = await supabase
    .from('city_chapters')
    .select('*')
    .order('name');
  
  if (error) throw error;
  return data || [];
};

export const getCourses = async (): Promise<Course[]> => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('title');
  
  if (error) throw error;
  return data || [];
};

export const createDonation = async (donation: Omit<Donation, 'id' | 'created_at'>): Promise<Donation> => {
  const { data, error } = await supabase
    .from('donations')
    .insert([donation])
    .select()
    .single();
  
  if (error) throw error;
  return data;
};
