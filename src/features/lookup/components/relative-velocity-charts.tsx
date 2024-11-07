import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartExporting from "highcharts/modules/exporting";
import { CloseApproachDaum, RelativeVelocity } from "@/types/api";
import { OrbitingBodyFilter } from "./orbiting-body-filter";

import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  selectOrbitingBody,
  selectRelativeVelocity,
  setRelativeVelocity,
} from "../stores/filtersSlice";
import MetricFilter from "./metric-filter";

highchartExporting(Highcharts);

function filteredCloseApproachData(data: CloseApproachDaum[], filter: string) {
  return data.filter((cad) => cad.orbiting_body === filter);
}

function buildRelativeVelocityChartOptions(
  close_approach_data: CloseApproachDaum[],
  metric: keyof RelativeVelocity
): Highcharts.Options {
  return {
    title: {
      text: "",
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,
        },
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    chart: {
      zooming: {
        type: "x",
      },
    },
    xAxis: {
      type: "datetime",
      crosshair: {
        width: 1,
      },
      title: {
        text: "",
      },
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    series: [
      {
        name: "Relative Velocity",
        type: "line",
        tooltip: {
          headerFormat: `<b>{point.key}</b><br />`,
          pointFormat: `{point.y:.2f} ${metric}`,
        },
        data: close_approach_data.map((cad) => ({
          x: new Date(cad.close_approach_date).getTime(),
          y: parseFloat(cad.relative_velocity[metric]),
        })),
      },
    ],
  };
}

export interface RelativeVelocityChartsProps {
  data: CloseApproachDaum[];
}

export function RelativeVelocityCharts({ data }: RelativeVelocityChartsProps) {
  const dispatch = useAppDispatch();
  const relativeVelocity = useAppSelector(selectRelativeVelocity);
  const orbitingBody = useAppSelector(selectOrbitingBody);
  const filteredApproachData = filteredCloseApproachData(data, orbitingBody);
  return (
    <>
      <div className="flex justify-center p-2 space-x-2">
        <OrbitingBodyFilter data={data} />
        <MetricFilter
          data={data[0].relative_velocity}
          value={relativeVelocity}
          onValueChange={(e) => dispatch(setRelativeVelocity(e))}
        />
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={buildRelativeVelocityChartOptions(
          filteredApproachData,
          relativeVelocity
        )}
      />
    </>
  );
}
