import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartExporting from "highcharts/modules/exporting";
import { CloseApproachDaum, MissDistance } from "@/types/api";
import { selectOrbitingBody } from "../stores/filtersSlice";
import { OrbitingBodyFilter } from "./orbiting-body-filter";
import MetricFilter from "./metric-filter";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { selectMissDistance, setMissDistance } from "../stores/filtersSlice";

highchartExporting(Highcharts);

function filteredCloseApproachData(data: CloseApproachDaum[], filter: string) {
  return data.filter((cad) => cad.orbiting_body === filter);
}

function buildMissDistanceChartOptions(
  close_approach_data: CloseApproachDaum[],
  metric: keyof MissDistance
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
        name: "Miss Distance",
        type: "line",
        tooltip: {
          headerFormat: `<b>{point.key}</b><br />`,
          pointFormat: `{point.y:.2f} ${metric}`,
        },
        data: close_approach_data.map((cad) => ({
          x: new Date(cad.close_approach_date).getTime(),
          y: parseFloat(cad.miss_distance[metric]),
        })),
      },
    ],
  };
}

export interface MissDistanceChartsProps {
  data: CloseApproachDaum[];
}

export function MissDistanceCharts({ data }: MissDistanceChartsProps) {
  const dispatch = useAppDispatch();
  const missDistance = useAppSelector(selectMissDistance);
  const orbitingBody = useAppSelector(selectOrbitingBody);
  const filteredApproachData = filteredCloseApproachData(data, orbitingBody);

  return (
    <>
      <div className="flex justify-center p-2 space-x-2">
        <OrbitingBodyFilter data={data} />
        <MetricFilter
          data={data[0].miss_distance}
          value={missDistance}
          onValueChange={(e) => dispatch(setMissDistance(e))}
        />
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={buildMissDistanceChartOptions(
          filteredApproachData,
          missDistance
        )}
      />
    </>
  );
}
