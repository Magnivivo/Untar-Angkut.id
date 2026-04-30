"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Navigation, Clock, Users, Ruler, Bus, CreditCard, ChevronDown, ChevronUp, Info, ArrowRightLeft } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { getRouteBySlug } from "@/data/routes";
import { notFound } from "next/navigation";

function RouteTimeline({ stops, label, color, icon }: { stops: string[]; label: string; color: string; icon: string }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
          <div className="text-left">
            <h3 className="font-heading font-semibold text-slate-900 text-sm">{label}</h3>
            <p className="text-xs text-slate-400">{stops.length} pemberhentian</p>
          </div>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>

      {expanded && (
        <div className="px-5 pb-5">
          <div className="relative ml-4">
            {/* Vertical line */}
            <div
              className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
              style={{ backgroundColor: `${color}30` }}
            />

            {stops.map((stop, i) => {
              const isTerminal = i === 0 || i === stops.length - 1;
              return (
                <div key={i} className="relative flex items-start gap-4 pb-4 last:pb-0">
                  {/* Dot */}
                  <div className="relative z-10 shrink-0 -ml-[5px]">
                    {isTerminal ? (
                      <div
                        className="w-3 h-3 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ) : (
                      <div
                        className="w-2.5 h-2.5 rounded-full border-2 mt-[1px]"
                        style={{ borderColor: `${color}60`, backgroundColor: "white" }}
                      />
                    )}
                  </div>

                  {/* Stop name */}
                  <div className={`-mt-1 ${isTerminal ? "font-semibold text-slate-900" : "text-slate-600"} text-sm`}>
                    {stop}
                    {i === 0 && (
                      <span className="ml-2 text-[10px] font-medium px-1.5 py-0.5 rounded-md text-white" style={{ backgroundColor: color }}>
                        AWAL
                      </span>
                    )}
                    {i === stops.length - 1 && (
                      <span className="ml-2 text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-slate-800 text-white">
                        AKHIR
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function RouteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const infoRows = [
    { label: "Tipe Kendaraan", value: route.chars.tipe },
    { label: "Kapasitas Kendaraan", value: route.chars.kapasitas },
    { label: "Kepemilikan Kendaraan", value: route.chars.kepemilikan },
    { label: "Jumlah Armada Beroperasi", value: route.chars.armada },
    { label: "Sistem Keberangkatan", value: route.chars.sistem },
    { label: "Tarif", value: route.chars.tarif },
    { label: "Panjang Trayek", value: route.chars.panjang },
    { label: "Waktu Tunggu Kendaraan", value: route.chars.tunggu },
    { label: "Waktu Perjalanan", value: route.chars.jalan },
  ];

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <Link
            href="/information"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Jalur
          </Link>

          {/* Route Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <span
                className="text-xl font-bold text-white px-4 py-2 rounded-xl shadow-sm"
                style={{ backgroundColor: route.color }}
              >
                {route.code}
              </span>
              <div>
                <h1 className="font-heading text-2xl font-bold text-slate-900">
                  {route.name}
                </h1>
                <div className="flex items-center gap-3 mt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                    Aktif
                  </span>
                  <span className="text-xs text-slate-400">
                    Jalur Trayek {route.code}
                  </span>
                </div>
              </div>
            </div>
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors shadow-sm"
              style={{ backgroundColor: route.color }}
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Left Column - Route Map & Stops */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <AnimateOnScroll>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="relative h-64 sm:h-80 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm"
                      style={{ backgroundColor: `${route.color}15` }}
                    >
                      <MapPin className="w-8 h-8" style={{ color: route.color }} />
                    </div>
                    <p className="text-sm font-medium text-slate-600">Peta Rute {route.code}</p>
                    <p className="text-xs text-slate-400 mt-1">{route.name}</p>
                  </div>
                  {/* Decorative route line */}
                  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300">
                    <path
                      d="M50,250 C100,200 150,100 200,120 S300,80 350,50"
                      fill="none"
                      stroke={route.color}
                      strokeWidth="4"
                      strokeDasharray="8,6"
                    />
                    <circle cx="50" cy="250" r="6" fill={route.color} />
                    <circle cx="350" cy="50" r="6" fill={route.color} />
                  </svg>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Departure Route */}
            <AnimateOnScroll delay={100}>
              <RouteTimeline
                stops={route.depart}
                label="Rute Pergi (Departure)"
                color={route.color}
                icon="→"
              />
            </AnimateOnScroll>

            {/* Return Route */}
            <AnimateOnScroll delay={200}>
              <RouteTimeline
                stops={route.ret}
                label="Rute Pulang (Return)"
                color="#475569"
                icon="←"
              />
            </AnimateOnScroll>
          </div>

          {/* Right Column - Info & Description */}
          <div className="space-y-6">
            {/* Route Information Table */}
            <AnimateOnScroll delay={100}>
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-4 h-4" style={{ color: route.color }} />
                  <h2 className="font-heading text-lg font-bold text-slate-900">Informasi Rute</h2>
                </div>
                <div className="space-y-0">
                  {infoRows.map((row, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-start py-3 ${
                        i !== infoRows.length - 1 ? "border-b border-slate-100" : ""
                      }`}
                    >
                      <span className="text-sm text-slate-500 pr-4">{row.label}</span>
                      <span className="text-sm font-semibold text-slate-900 text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Quick Stats */}
            <AnimateOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
                  <Ruler className="w-5 h-5 mx-auto mb-2" style={{ color: route.color }} />
                  <p className="text-lg font-heading font-bold text-slate-900">{route.chars.panjang}</p>
                  <p className="text-[11px] text-slate-400">Panjang Trayek</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
                  <Clock className="w-5 h-5 mx-auto mb-2" style={{ color: route.color }} />
                  <p className="text-lg font-heading font-bold text-slate-900">{route.chars.jalan}</p>
                  <p className="text-[11px] text-slate-400">Waktu Tempuh</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
                  <Bus className="w-5 h-5 mx-auto mb-2" style={{ color: route.color }} />
                  <p className="text-lg font-heading font-bold text-slate-900">{route.chars.armada}</p>
                  <p className="text-[11px] text-slate-400">Armada</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
                  <CreditCard className="w-5 h-5 mx-auto mb-2" style={{ color: route.color }} />
                  <p className="text-lg font-heading font-bold text-slate-900">{route.chars.tarif}</p>
                  <p className="text-[11px] text-slate-400">Tarif</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Route Description */}
            <AnimateOnScroll delay={300}>
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ArrowRightLeft className="w-4 h-4" style={{ color: route.color }} />
                  <h2 className="font-heading text-lg font-bold text-slate-900">Deskripsi Rute</h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{route.desc}</p>
              </div>
            </AnimateOnScroll>

            {/* Other Routes */}
            <AnimateOnScroll delay={400}>
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h2 className="font-heading text-sm font-bold text-slate-900 mb-3">Lihat Jalur Lainnya</h2>
                <div className="flex flex-wrap gap-2">
                  {["ABB","ABH","ADL","AH","AJH","AL","AMH","AT","HA","HL","HM","HML","LDH","LH","MK","MM","MT"].filter(c => c !== route.code).slice(0, 8).map((code) => (
                    <Link
                      key={code}
                      href={`/information/${code.toLowerCase()}`}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                      {code}
                    </Link>
                  ))}
                  <Link
                    href="/information"
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
                  >
                    Semua →
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
