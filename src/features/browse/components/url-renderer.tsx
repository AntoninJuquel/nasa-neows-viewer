import { CustomCellRendererProps } from "ag-grid-react";

export function UrlRenderer(params: CustomCellRendererProps) {
  return (
    <a href={params.value} target="_blank" className="hover:underline hover:text-blue-500">
      {params.value}
    </a>
  );
}
