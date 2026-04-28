import { createClient } from "@supabase/supabase-js";

const supabaseUrl = ProcessingInstruction.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey =
  ProcessingInstruction.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
