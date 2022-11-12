import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://cmkgoeimilbxntcwlwki.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNta2dvZWltaWxieG50Y3dsd2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNTU3NjcsImV4cCI6MTk4MzczMTc2N30.xCxiLAVT8y67acq1fjnWeL9HM83cnRS7gTt3S0_sbPY";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoServices() {
  return {
    getAllVideos() {
      return supabase
                .from("playlists")
                .select("*")
    },
  };
}
