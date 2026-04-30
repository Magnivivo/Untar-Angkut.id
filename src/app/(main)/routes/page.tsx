"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  MapPin, Zap, DollarSign, GitBranch,
  Bus, ChevronRight, ArrowRight, Navigation, Clock,
  ArrowDownUp, Route as RouteIcon,
} from "lucide-react";
import StopAutocomplete from "@/components/ui/StopAutocomplete";
import { getAllStops, findConnectingRoutes, findRoutesForStop } from "@/data/stopUtils";
import { routes } from "@/data/routes";
import type { RouteData } from "@/data/routes";

const preferences = [
  { label: "Semua", icon: RouteIcon },
  { label: "Tercepat", icon: Zap },
  { label: "Termurah", icon: DollarSign },
  { label: "Minimal Transit", icon: GitBranch },
];

export default function RoutesPage() {
  const [activePreference, setActivePreference] = useState("Semua");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const allStops = useMemo(() => getAllStops(), []);

  // Determine which routes to show
  const displayedRoutes = useMemo(() => {
    const fromTrimmed = from.trim();
    const toTrimmed = to.trim();

    if (fromTrimmed && toTrimmed) {
      return findConnectingRoutes(from, to);
    }
    if (fromTrimmed) {
      return findRoutesForStop(from);
    }
    if (toTrimmed) {
      return findRoutesForStop(to);
    }
    return routes;
  }, [from, to]);

  const hasSearch = from.trim() || to.trim();

  const swapInputs = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="pt-16 min-h-screen flex">
      {/* Left Panel */}
      <div className="w-full lg:w-[400px] xl:w-[440px] shrink-0 bg-white border-r border-slate-200 overflow-y-auto">
        <div className="p-5 space-y-4">
          {/* Search Inputs */}
          <div className="relative space-y-3">
            <StopAutocomplete
              id="route-from"
              value={from}
              onChange={setFrom}
              placeholder="Dari mana? (cth: Terminal Arjosari)"
              allStops={allStops}
              iconColor="text-primary-500"
            />
            <StopAutocomplete
              id="route-to"
              value={to}
              onChange={setTo}
              placeholder="Ke mana? (cth: Jl. Kawi)"
              allStops={allStops}
              iconColor="text-slate-400"
            />
            {/* Swap button */}
            <button
              onClick={swapInputs}
              className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-300 transition-all z-10"
              aria-label="Tukar asal dan tujuan"
            >
              <ArrowDownUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Preference Filters */}
          <div className="flex gap-2 flex-wrap">
            {preferences.map((p) => (
              <button
                key={p.label}
                onClick={() => setActivePreference(p.label)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activePreference === p.label
                    ? "bg-primary-50 text-primary-700 border-primary-200"
                    : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <p.icon className="w-3 h-3" />
                {p.label}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">
              {hasSearch ? (
                <>
                  <span className="font-semibold text-slate-700">{displayedRoutes.length}</span> rute ditemukan
                </>
              ) : (
                <>
                  <span className="font-semibold text-slate-700">{routes.length}</span> rute tersedia
                </>
              )}
            </p>
            {hasSearch && (
              <button
                onClick={() => { setFrom(""); setTo(""); }}
                className="text-xs text-primary-600 hover:text-primary-700 font-medium"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Route List */}
        <div className="px-5 pb-5 space-y-2">
          {displayedRoutes.length > 0 ? (
            displayedRoutes.map((route) => (
              <RouteCard
                key={route.slug}
                route={route}
                expanded={selectedRoute === route.slug}
                onToggle={() =>
                  setSelectedRoute(selectedRoute === route.slug ? null : route.slug)
                }
                from={from}
                to={to}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
                <RouteIcon className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-sm font-medium text-slate-600 mb-1">
                Tidak ada rute ditemukan
              </p>
              <p className="text-xs text-slate-400">
                Coba lokasi lain atau kurangi filter pencarian
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right - Map Area */}
      <div className="hidden lg:flex flex-1 bg-slate-100 relative items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-100/30 via-primary-50/20 to-accent-50/30" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Route Line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" fill="none">
          <path
            d="M200 500 C250 400, 350 350, 400 300 S550 200, 650 120"
            stroke="#10b981"
            strokeWidth="3"
            strokeDasharray="8 4"
            fill="none"
          />
          <circle cx="200" cy="500" r="8" fill="white" stroke="#64748b" strokeWidth="3" />
          <circle cx="650" cy="120" r="8" fill="#10b981" stroke="#10b981" strokeWidth="3" />
        </svg>

        {/* Map Controls */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50">
            <Navigation className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 text-lg font-semibold">
            +
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 text-lg font-semibold">
            −
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Route Card ─── */

function RouteCard({
  route,
  expanded,
  onToggle,
  from,
  to,
}: {
  route: RouteData;
  expanded: boolean;
  onToggle: () => void;
  from: string;
  to: string;
}) {
  // Find which stops in this route match the search
  const fromIndex = from
    ? route.depart.findIndex((s) => s.toLowerCase() === from.toLowerCase())
    : -1;
  const toIndex = to
    ? route.depart.findIndex((s) => s.toLowerCase() === to.toLowerCase())
    : -1;
  const stopsInBetween =
    fromIndex >= 0 && toIndex >= 0 ? Math.abs(toIndex - fromIndex) : route.depart.length;

  return (
    <div
      className={`rounded-xl border-2 transition-all duration-200 cursor-pointer ${
        expanded
          ? "border-primary-500 bg-slate-900 text-white shadow-lg"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
      }`}
      onClick={onToggle}
    >
      {/* Header — always visible */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ backgroundColor: route.color }}
          >
            {route.code}
          </div>
          <div className="flex-1 min-w-0">
            <p
              className={`text-sm font-semibold truncate ${
                expanded ? "text-white" : "text-slate-800"
              }`}
            >
              {route.name}
            </p>
            <div
              className={`flex items-center gap-3 text-xs mt-0.5 ${
                expanded ? "text-slate-400" : "text-slate-500"
              }`}
            >
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {route.chars.jalan}
              </span>
              <span>{route.chars.panjang}</span>
              <span>{route.depart.length} halte</span>
            </div>
          </div>
          <div className="flex flex-col items-end shrink-0">
            <span
              className={`text-sm font-bold ${
                expanded ? "text-primary-400" : "text-primary-600"
              }`}
            >
              {route.chars.tarif}
            </span>
            <ChevronRight
              className={`w-4 h-4 transition-transform ${
                expanded ? "rotate-90 text-slate-400" : "text-slate-300"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Expanded Detail */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-slate-700 pt-4">
          {/* Route stops preview */}
          <div className="mb-4">
            <p className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wider">
              Rute Berangkat
            </p>
            <div className="relative pl-5 space-y-0">
              <div className="absolute left-[7px] top-1 bottom-1 w-px bg-slate-600" />
              {route.depart.map((stop, i) => {
                const isFrom =
                  from && stop.toLowerCase() === from.toLowerCase();
                const isTo = to && stop.toLowerCase() === to.toLowerCase();
                const isHighlighted = isFrom || isTo;
                const isFirst = i === 0;
                const isLast = i === route.depart.length - 1;

                return (
                  <div key={`${stop}-${i}`} className="relative flex items-center gap-3 py-1">
                    <div
                      className={`absolute left-[-20px] w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${
                        isHighlighted
                          ? "bg-primary-500 border-primary-400"
                          : isFirst || isLast
                          ? "bg-slate-600 border-slate-400"
                          : "bg-slate-700 border-slate-600"
                      }`}
                    >
                      {(isFirst || isLast || isHighlighted) && (
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            isHighlighted ? "bg-white" : "bg-slate-400"
                          }`}
                        />
                      )}
                    </div>
                    <span
                      className={`text-xs ${
                        isHighlighted
                          ? "text-primary-300 font-semibold"
                          : isFirst || isLast
                          ? "text-white font-medium"
                          : "text-slate-400"
                      }`}
                    >
                      {stop}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info chips */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-[10px] px-2 py-1 rounded-md bg-slate-700 text-slate-300">
              {route.chars.tipe}
            </span>
            <span className="text-[10px] px-2 py-1 rounded-md bg-slate-700 text-slate-300">
              {route.chars.armada}
            </span>
            <span className="text-[10px] px-2 py-1 rounded-md bg-slate-700 text-slate-300">
              Tunggu ± {route.chars.tunggu}
            </span>
          </div>

          {/* CTA */}
          <Link
            href={`/information/${route.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary-600 text-white text-xs font-semibold hover:bg-primary-500 transition-colors"
          >
            Lihat Detail Rute
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
