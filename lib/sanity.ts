import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "bt9s9s96",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
