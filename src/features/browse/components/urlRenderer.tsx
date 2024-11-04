import { CustomCellRendererProps } from "ag-grid-react";

export function UrlRenderer(params: CustomCellRendererProps) {
  return (
    <a href={params.value} target="_blank">
      {params.value}
    </a>
  );
}
