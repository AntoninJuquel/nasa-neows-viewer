import { api } from "@/lib/api-client";
import { Browse, NearEarthObject } from "@/types/api";

export interface LookupParams {
  id: NearEarthObject["id"];
}

export function lookup(params: LookupParams) {
  return api.get<Browse>(`/neo/${params.id}`);
}
