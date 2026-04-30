"use client";

import { useState } from "react";
import {
  MapPin, Search, Zap, DollarSign, GitBranch,
  Clock, Footprints, Bus, ChevronRight, History,
  Navigation,
} from "lucide-react";

const routeResults = [
  {
    duration: "35 min",
    fare: "Rp 5.000",
    time: "10:15 AM - 10:50 AM",
    selected: true,
    steps: [
      { type: "walk", label: "Walk to Bus Stop", duration: "5 min" },
      { type: "bus", code: "M01", label: "Tanah Abang", stops: "12 Stops", duration: "25 min" },
      { type: "walk", label: "Walk to Destination", duration: "5 min" },
    ],
  },
  {
    duration: "42 min",
    fare: "Rp 3.500",
    time: "10:18 AM - 11:00 AM",
    selected: false,
    steps: [
      { type: "walk", label: "" },
      { type: "bus", code: "L03", label: "Blok M" },
      { type: "walk", label: "" },
    ],
  },
  {
    duration: "55 min",
    fare: "Rp 7.000",
    time: "10:20 AM - 11:15 AM",
    selected: false,
    steps: [
      { type: "bus", code: "B12", label: "Harmoni" },
      { type: "bus", code: "M05", label: "Sudirman" },
    ],
  },
];

const preferences = [
  { label: "Fastest", icon: Zap, active: true },
  { label: "Cheapest", icon: DollarSign, active: false },
  { label: "Minimal Transit", icon: GitBranch, active: false },
];

export default function RoutesPage() {
  const [activePreference, setActivePreference] = useState("Fastest");

  return (
    <div className="pt-16 min-h-screen flex">
      {/* Left Panel */}
      <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 bg-white border-r border-slate-200 overflow-y-auto p-5 space-y-5">
        {/* Search Inputs */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
            <Navigation className="w-4 h-4 text-primary-500 shrink-0" />
            <input
              type="text"
              defaultValue="Current Location"
              className="w-full bg-transparent text-sm text-slate-700 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
            <MapPin className="w-4 h-4 text-primary-600 shrink-0" />
            <input
              type="text"
              defaultValue="Grand Indonesia Mall"
              className="w-full bg-transparent text-sm text-slate-700 focus:outline-none"
            />
          </div>
        </div>

        {/* Preference Filters */}
        <div className="flex gap-2">
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

        {/* Route Results */}
        <div className="space-y-3">
          {routeResults.map((route, i) => (
            <div
              key={i}
              className={`rounded-xl border-2 transition-colors cursor-pointer ${
                route.selected
                  ? "border-primary-500 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {route.selected ? (
                /* Expanded selected card */
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl font-heading font-bold">{route.duration}</span>
                    <div className="text-right">
                      <span className="text-lg font-heading font-bold text-primary-400">{route.fare}</span>
                      <div className="text-xs text-slate-400">Total Fare</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mb-5">{route.time}</p>

                  {/* Journey Steps */}
                  <div className="relative pl-6 space-y-4">
                    <div className="absolute left-2.5 top-2 bottom-2 w-px bg-slate-600" />
                    {route.steps.map((step, j) => (
                      <div key={j} className="relative flex items-start gap-3">
                        <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-slate-700 border-2 border-slate-500 flex items-center justify-center">
                          {step.type === "walk" ? (
                            <Footprints className="w-2.5 h-2.5 text-slate-400" />
                          ) : (
                            <Bus className="w-2.5 h-2.5 text-primary-400" />
                          )}
                        </div>
                        <div>
                          {step.type === "bus" && (
                            <span className="inline-block text-[10px] font-bold bg-primary-600 text-white px-1.5 py-0.5 rounded mr-2">
                              {step.code}
                            </span>
                          )}
                          <span className="text-sm font-medium">{step.label}</span>
                          {step.stops && (
                            <p className="text-xs text-slate-400 mt-0.5">
                              {step.stops} • {step.duration}
                            </p>
                          )}
                          {step.type === "walk" && step.duration && (
                            <p className="text-xs text-slate-400 mt-0.5">{step.duration}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Collapsed card */
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-heading font-bold text-slate-900">{route.duration}</span>
                    <span className="text-sm font-semibold text-slate-700">{route.fare}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    {route.steps.map((step, j) => (
                      <span key={j} className="flex items-center gap-1">
                        {step.type === "walk" ? (
                          <Footprints className="w-3.5 h-3.5" />
                        ) : (
                          <>
                            <Bus className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-bold bg-slate-900 text-white px-1.5 py-0.5 rounded">
                              {step.code}
                            </span>
                          </>
                        )}
                        {j < route.steps.length - 1 && (
                          <ChevronRight className="w-3 h-3 text-slate-300" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Recent Searches */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Recent Searches</h3>
          <div className="space-y-2">
            {["Sudirman Station", "National Monument"].map((s) => (
              <div key={s} className="flex items-center gap-3 p-2 text-sm text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer">
                <History className="w-4 h-4 text-slate-400" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Map Area */}
      <div className="hidden lg:flex flex-1 bg-slate-100 relative items-center justify-center">
        {/* Simulated Map */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-100/30 via-primary-50/20 to-accent-50/30" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />

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
