import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hzoyaxzijespjlithyjc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6b3lheHppamVzcGpsaXRoeWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4MzMzNTQsImV4cCI6MjA0NzQwOTM1NH0.GAWs68ktdt4msj1ZyxiBXICR7BhjOwggZcIrkq9vbBA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
