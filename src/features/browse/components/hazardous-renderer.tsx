import { CustomCellRendererProps } from "ag-grid-react";

export function HazardousRenderer(params: CustomCellRendererProps) {
  return <div>{params.value ? "💥" : "🟢"}</div>;
}
