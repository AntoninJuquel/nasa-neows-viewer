import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { NearEarthObject } from "@/types/api";

export interface DetailsProps {
  data: NearEarthObject;
}

export function Details({ data }: DetailsProps) {
  return (
    <div className="ag-theme-material h-full w-full">
      <AgGridReact
        defaultColDef={{ flex: 1, suppressHeaderMenuButton: true }}
        columnDefs={[{ field: "Element" }, { field: "Value" }]}
        rowData={[
          { Element: "Name", Value: data.name },
          { Element: "Nasa JPL URL", Value: data.nasa_jpl_url },
          {
            Element: "Is Potentially Hazardous Asteroid",
            Value: data.is_potentially_hazardous_asteroid,
          },
          { Element: "Is Sentry Object", Value: data.is_sentry_object },
          { Element: "Absolute Magnitude H", Value: data.absolute_magnitude_h },
        ]}
      />
    </div>
  );
}
