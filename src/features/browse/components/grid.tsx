import { AgGridReact } from "ag-grid-react";
import { IServerSideDatasource, RowClickedEvent } from "ag-grid-enterprise";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { browse } from "@/features/browse/api/browse";
import { useNavigate } from "react-router-dom";
import { NearEarthObject } from "@/types/api";
import { UrlRenderer } from "./urlRenderer";
import { paths } from "@/config/paths";

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

  function handleRowClicked(row: RowClickedEvent<NearEarthObject>) {
    navigate(paths.lookup.getHref(row.data!.id));
  }

  return (
    <div className="ag-theme-material h-full">
      <AgGridReact<NearEarthObject>
        rowModelType="serverSide"
        columnDefs={[
          { field: "name" },
          {
            field: "is_potentially_hazardous_asteroid",
            headerName: "Hazardous",
          },
          {
            field: "nasa_jpl_url",
            headerName: "Url",
            flex: 1,
            cellRenderer: UrlRenderer,
          },
        ]}
        rowHeight={40}
        defaultColDef={{
          sortable: false,
        }}
        serverSideDatasource={serverSideDatasource}
        pagination
        paginationPageSizeSelector={false}
        paginationPageSize={20}
        cacheBlockSize={20}
        onRowClicked={handleRowClicked}
      />
    </div>
  );
}