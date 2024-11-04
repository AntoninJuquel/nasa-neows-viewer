import { Params } from "react-router-dom";

export async function lookupLoader({ params }: { params: Params<"id"> }) {
  console.log(params);
  return null;
}

export function Lookup() {
  return <div>lookup</div>;
}
