"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Bus, MapPin, ArrowRight, Users, Ruler, Clock } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { routes } from "@/data/routes";

export default function InformationPage() {
  const [search, setSearch] = useState("");

  const filtered = routes.filter(
    (r) =>
      r.code.toLowerCase().includes(search.toLowerCase()) ||
      r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-primary-600 font-medium mb-2">
                <Bus className="w-4 h-4" />
                <span>Angkutan Kota Malang</span>
              </div>
              <h1 className="font-heading text-3xl font-bold text-slate-900 mb-1">
                Jalur Trayek Angkot
              </h1>
              <p className="text-slate-500 text-sm">
                17 jalur angkutan kota (mikrolet) yang melewati jalur dalam Kota Malang dan masih beroperasi.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari jalur, misal: ABB, Gadang..."
                className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Route Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Bar */}
        <AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-2xl font-heading font-bold text-slate-900">17</p>
              <p className="text-xs text-slate-500 mt-1">Jalur Aktif</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-2xl font-heading font-bold text-slate-900">3</p>
              <p className="text-xs text-slate-500 mt-1">Terminal Utama</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-2xl font-heading font-bold text-primary-600">Rp 5.000</p>
              <p className="text-xs text-slate-500 mt-1">Tarif Seragam</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-2xl font-heading font-bold text-slate-900">MPU</p>
              <p className="text-xs text-slate-500 mt-1">Tipe Kendaraan</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Grid of Routes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((route, i) => (
            <AnimateOnScroll key={route.code} delay={i * 50}>
              <Link href={`/information/${route.slug}`}>
                <div className="bg-white rounded-xl border border-slate-200 p-5 card-hover cursor-pointer group h-full">
                  {/* Top Row: Badge + Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-sm font-bold text-white px-3 py-1 rounded-lg"
                      style={{ backgroundColor: route.color }}
                    >
                      {route.code}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-primary-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                      Aktif
                    </span>
                  </div>

                  {/* Route Name */}
                  <h3 className="font-heading font-semibold text-slate-900 text-base mb-2 group-hover:text-primary-700 transition-colors">
                    {route.name}
                  </h3>

                  {/* Route Info Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 rounded-lg px-2 py-1">
                      <Users className="w-3 h-3" />
                      {route.chars.armada}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 rounded-lg px-2 py-1">
                      <Ruler className="w-3 h-3" />
                      {route.chars.panjang}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 rounded-lg px-2 py-1">
                      <Clock className="w-3 h-3" />
                      {route.chars.jalan}
                    </span>
                  </div>

                  {/* Departure preview */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="w-3 h-3 text-primary-400 shrink-0" />
                    <span className="truncate">
                      {route.depart[0]}
                    </span>
                    <ArrowRight className="w-3 h-3 shrink-0" />
                    <span className="truncate">
                      {route.depart[route.depart.length - 1]}
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Bus className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-slate-700 mb-1">
              Jalur tidak ditemukan
            </h3>
            <p className="text-sm text-slate-400">
              Coba cari dengan kata kunci lain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
