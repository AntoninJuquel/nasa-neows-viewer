import { api } from "@/lib/api-client";
import { Browse, Page } from "@/types/api";

export interface BrowseParams {
  page?: Page["number"];
}

export function browse(params: BrowseParams = { page: 0 }) {
  return api.get<Browse>("/neo/browse", { params });
}
