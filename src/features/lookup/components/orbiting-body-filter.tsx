import { CloseApproachDaum } from "@/types/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { selectOrbitingBody, setOrbitingBody } from "../stores/filtersSlice";

function buildOrbitingBodyFilterOptions(data: CloseApproachDaum[]) {
  return [...new Set(data.map((cad) => cad.orbiting_body))].sort();
}

interface OrbitingBodyFiltersProps {
  data: CloseApproachDaum[];
}

export function OrbitingBodyFilter({ data }: OrbitingBodyFiltersProps) {
  const dispatch = useAppDispatch();
  const orbitingBody = useAppSelector(selectOrbitingBody);

  const orbitingBodyFilterOptions = buildOrbitingBodyFilterOptions(data);

  return (
    <Select
      onValueChange={(e) => dispatch(setOrbitingBody(e))}
      value={orbitingBody}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by orbiting body" />
      </SelectTrigger>
      <SelectContent>
        {orbitingBodyFilterOptions.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
