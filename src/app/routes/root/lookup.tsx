import { useEffect, useMemo } from "react";
import { Params, useLoaderData } from "react-router-dom";
import { useAppDispatch } from "@/stores/hooks";
import { NearEarthObject } from "@/types/api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { lookup } from "@/features/lookup/api/lookup";
import { EstimatedDiameterCharts } from "@/features/lookup/components/estimated-diameter-charts";
import { RelativeVelocityCharts } from "@/features/lookup/components/relative-velocity-charts";
import { MissDistanceCharts } from "@/features/lookup/components/miss-distance-charts";
import { Details } from "@/features/lookup/components/details";
import { OrbitalData } from "@/features/lookup/components/orbital-data";
import { setOrbitingBody } from "@/features/lookup/stores/filtersSlice";
import { logger } from "@/lib/logger";

export async function lookupLoader({ params }: { params: Params<"id"> }) {
  const { id } = params;
  if (!id) {
    throw new Error("id is required");
  }
  const response = await lookup({ id });
  return response.data;
}

export function Lookup() {
  const dispatch = useAppDispatch();
  const data = useLoaderData() as NearEarthObject;

  const TabsConfig = useMemo(() => {
    logger.info("useMemo", "Reloading TabsConfig");
    return [
      {
        value: "relative-velocity",
        name: "Relative Velocity",
        content: <RelativeVelocityCharts data={data.close_approach_data} />,
      },
      {
        value: "miss-distance",
        name: "Miss Distance",
        content: <MissDistanceCharts data={data.close_approach_data} />,
      },
      {
        value: "estimated-diameter",
        name: "Estimated Diamater",
        content: <EstimatedDiameterCharts data={data.estimated_diameter} />,
      },
      {
        value: "orbital-data",
        name: "Orbital Data",
        content: <OrbitalData data={data.orbital_data} />,
      },
    ];
  }, [data]);

  useEffect(() => {
    logger.info("useEffect", "Reloading Lookup");
    dispatch(setOrbitingBody(data.close_approach_data[0].orbiting_body));
  }, [data, dispatch]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-4">
      <h1 className="text-center text-3xl font-bold">{data.name}</h1>
      <div className="w-full flex-[2]">
        <Details data={data} />
      </div>
      <Tabs
        defaultValue={TabsConfig[0].value}
        className="w-full flex flex-col items-center flex-[3]"
      >
        <TabsList>
          {TabsConfig.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {TabsConfig.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="w-full h-full">
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
