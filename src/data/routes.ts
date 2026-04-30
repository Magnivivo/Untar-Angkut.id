export type { RouteData } from "./routeData";
import { routesPart1 } from "./routeData";
import { routesPart2 } from "./routeData2";
import type { RouteData } from "./routeData";

export const routes: RouteData[] = [...routesPart1, ...routesPart2];

export function getRouteBySlug(slug: string): RouteData | undefined {
  return routes.find((r) => r.slug === slug);
}
