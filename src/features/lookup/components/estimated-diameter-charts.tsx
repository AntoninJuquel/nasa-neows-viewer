import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartExporting from "highcharts/modules/exporting";
import { EstimatedDiameter } from "@/types/api";
import MetricFilter from "./metric-filter";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  setEstimatedDiameter,
  selectEstimatedDiameter,
} from "../stores/filtersSlice";

highchartExporting(Highcharts);

function buildEstimatedDiameterChartOptions(
  estimated_diameter: EstimatedDiameter,
  metric: keyof EstimatedDiameter
): Highcharts.Options {
  return {
    title: {
      text: "Estimated Diameter",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Min",
        type: "pie",
        innerSize: 100,
        size: 150,
        data: [["Min", estimated_diameter[metric].estimated_diameter_min]],
        colors: ["blue"],
        dataLabels: {
          enabled: true,
          format: `{point.name}: {point.y:.2f} ${metric}`,
        },
        tooltip: {
          headerFormat: `<b>{series.name}</b><br />`,
          pointFormat: `{point.y:.2f} ${metric}`,
        },
      },
      {
        name: "Max",
        type: "pie",
        innerSize: 150,
        size: 200,
        data: [["Max", estimated_diameter[metric].estimated_diameter_max]],
        colors: ["red"],
        dataLabels: {
          enabled: true,
          format: `{point.name}: {point.y:.2f} ${metric}`,
        },
        tooltip: {
          headerFormat: `<b>{series.name}</b><br />`,
          pointFormat: `{point.y:.2f} ${metric}`,
        },
      },
    ],
  };
}

export interface EstimatedDiameterChartsProps {
  data: EstimatedDiameter;
}

export function EstimatedDiameterCharts({
  data,
}: EstimatedDiameterChartsProps) {
  const dispatch = useAppDispatch();
  const estimatedDiameter = useAppSelector(selectEstimatedDiameter);
  return (
    <>
      <div className="flex justify-center p-2 space-x-2">
        <MetricFilter
          data={data}
          value={estimatedDiameter}
          onValueChange={(e) => dispatch(setEstimatedDiameter(e))}
        />
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={buildEstimatedDiameterChartOptions(data, estimatedDiameter)}
      />
    </>
  );
}
