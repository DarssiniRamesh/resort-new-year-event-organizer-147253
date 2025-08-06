import { createClient } from '@supabase/supabase-js';

// PUBLIC_INTERFACE
/**
 * Initialize and export a Supabase client instance for use across the app.
 * Uses REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_KEY from environment.
 */
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

