import { routes } from "./routes";

/** Extract all unique stop names from all routes, sorted alphabetically */
export function getAllStops(): string[] {
  const stopSet = new Set<string>();
  for (const route of routes) {
    for (const stop of route.depart) stopSet.add(stop);
    for (const stop of route.ret) stopSet.add(stop);
  }
  return Array.from(stopSet).sort((a, b) => a.localeCompare(b, "id"));
}

/** Find routes that pass through a given stop name */
export function findRoutesForStop(stopName: string) {
  return routes.filter(
    (r) =>
      r.depart.some((s) => s.toLowerCase() === stopName.toLowerCase()) ||
      r.ret.some((s) => s.toLowerCase() === stopName.toLowerCase())
  );
}

/** Find routes that connect two stops */
export function findConnectingRoutes(from: string, to: string) {
  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();
  return routes.filter((r) => {
    const departHasFrom = r.depart.some((s) => s.toLowerCase() === fromLower);
    const departHasTo = r.depart.some((s) => s.toLowerCase() === toLower);
    const retHasFrom = r.ret.some((s) => s.toLowerCase() === fromLower);
    const retHasTo = r.ret.some((s) => s.toLowerCase() === toLower);
    return (departHasFrom && departHasTo) || (retHasFrom && retHasTo);
  });
}
