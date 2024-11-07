import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { OrbitalDaum } from "@/types/api";

export interface DetailsProps {
  data: OrbitalDaum;
}

export function OrbitalData({ data }: DetailsProps) {
  return (
    <div className="ag-theme-material h-full w-full">
      <AgGridReact
        defaultColDef={{ flex: 1, suppressHeaderMenuButton: true }}
        columnDefs={[{ field: "Element" }, { field: "Value" }]}
        rowData={Object.keys(data).map((key) => {
          return {
            Element: key,
            Value: data[key as keyof OrbitalDaum],
          };
        })}
      />
    </div>
  );
}
