import { AgGridReact } from "ag-grid-react";
import { CellClickedEvent, IServerSideDatasource } from "ag-grid-enterprise";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { browse } from "@/features/browse/api/browse";
import { useNavigate } from "react-router-dom";
import { NearEarthObject } from "@/types/api";
import { UrlRenderer } from "./url-renderer";
import { paths } from "@/config/paths";
import { HazardousRenderer } from "./hazardous-renderer";

const serverSideDatasource: IServerSideDatasource = {
  async getRows(params) {
    const page = params.api.paginationGetCurrentPage();
    const response = await browse({ page });
    if (response.status === 200) {
      params.success({
        rowData: response.data.near_earth_objects,
        rowCount: response.data.page.total_elements,
      });
    } else {
      params.fail();
    }
  },
};

export function Grid() {
  const navigate = useNavigate();

  function handleCellClicked(row: CellClickedEvent<NearEarthObject>) {
    navigate(paths.app.lookup.getHref(row.data!.id));
  }

  return (
    <div className="ag-theme-material h-full">
      <AgGridReact<NearEarthObject>
        rowModelType="serverSide"
        columnDefs={[
          {
            field: "name",
            onCellClicked: handleCellClicked,
            cellStyle: { cursor: "pointer" },
          },
          {
            field: "is_potentially_hazardous_asteroid",
            headerName: "Hazardous",
            cellRenderer: HazardousRenderer,
          },
          {
            field: "nasa_jpl_url",
            headerName: "Url",
            flex: 1,
            cellRenderer: UrlRenderer,
          },
        ]}
        rowHeight={38}
        defaultColDef={{
          sortable: false,
          suppressHeaderMenuButton: true,
        }}
        serverSideDatasource={serverSideDatasource}
        pagination
        paginationPageSizeSelector={false}
        paginationPageSize={20}
        cacheBlockSize={20}
      />
    </div>
  );
}
