import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://deqnnnrgdocjakrzwwoz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlcW5ubnJnZG9jamFrcnp3d296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MzAzMjEsImV4cCI6MjA1NDUwNjMyMX0.HS5AwuN5jAhW6enmCHy5YFgW40NsXBrvX5BNqOe6r5A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
