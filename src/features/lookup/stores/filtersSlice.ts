import { createAppSlice } from "@/stores/createAppSlice";
import { EstimatedDiameter, MissDistance, RelativeVelocity } from "@/types/api";

export interface FiltersSliceState {
  orbitingBody: string;
  relativeVelocity: keyof RelativeVelocity;
  missDistance: keyof MissDistance;
  estimatedDiameter: keyof EstimatedDiameter;
}

const initialState: FiltersSliceState = {
  orbitingBody: "",
  relativeVelocity: "kilometers_per_hour",
  missDistance: "kilometers",
  estimatedDiameter: "kilometers",
};

export const filtersSlice = createAppSlice({
  name: "filters",
  initialState,
  reducers(creators) {
    return {
      setOrbitingBody: creators.reducer<string>((state, action) => {
        state.orbitingBody = action.payload;
      }),
      setRelativeVelocity: creators.reducer<keyof RelativeVelocity>(
        (state, action) => {
          state.relativeVelocity = action.payload;
        }
      ),
      setMissDistance: creators.reducer<keyof MissDistance>((state, action) => {
        state.missDistance = action.payload;
      }),
      setEstimatedDiameter: creators.reducer<keyof EstimatedDiameter>(
        (state, action) => {
          state.estimatedDiameter = action.payload;
        }
      ),
    };
  },
  selectors: {
    selectOrbitingBody: (state) => state.orbitingBody,
    selectRelativeVelocity: (state) => state.relativeVelocity,
    selectMissDistance: (state) => state.missDistance,
    selectEstimatedDiameter: (state) => state.estimatedDiameter,
  },
});

export const {
  setOrbitingBody,
  setMissDistance,
  setRelativeVelocity,
  setEstimatedDiameter,
} = filtersSlice.actions;

export const {
  selectOrbitingBody,
  selectMissDistance,
  selectRelativeVelocity,
  selectEstimatedDiameter,
} = filtersSlice.selectors;
