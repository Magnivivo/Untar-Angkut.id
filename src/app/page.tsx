"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Search, MapPin, ArrowRight, Bus, Train,
  Navigation, CreditCard, Route, ChevronRight,
  QrCode, Smartphone, BarChart3,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text & Search */}
            <div>
              <AnimateOnScroll>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-4">
                  Orchestrated{" "}
                  <span className="text-primary-600">Movement.</span>
                </h1>
                <p className="text-slate-500 text-lg mb-8 max-w-md">
                  Real-time public infrastructure mapping and routing for the modern commuter.
                </p>

                {/* Search Form */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm max-w-sm">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <MapPin className="w-4 h-4 text-primary-500 shrink-0" />
                      <input
                        type="text"
                        placeholder="From (e.g. Sudirman Station)"
                        className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="To (e.g. Monas)"
                        className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <Link
                    href="/routes"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                  >
                    <Search className="w-4 h-4" />
                    Find Route
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right - Hero Image */}
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero.png"
                    alt="Urban transit infrastructure"
                    width={640}
                    height={400}
                    className="w-full h-[400px] object-cover"
                    priority
                  />
                </div>
                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                  <BarChart3 className="w-4 h-4 text-primary-400" />
                  Live System Status: <span className="text-primary-400 font-medium">Optimal</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">
              Featured Regions
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Jakarta", subtitle: "Greater Metropolitan Area", img: "/images/jakarta.png" },
              { name: "Bandung", subtitle: "West Java Hub", img: "/images/bandung.png" },
              { name: "Surabaya", subtitle: "East Java Network", img: "/images/surabaya.png" },
            ].map((city, i) => (
              <AnimateOnScroll key={city.name} delay={i * 100}>
                <Link href="/information" className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[16/10] card-hover">
                    <Image
                      src={city.img}
                      alt={city.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-heading font-bold text-white text-lg">{city.name}</h3>
                      <p className="text-white/70 text-sm">{city.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Civic Infrastructure + Supported Modalities */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Infrastructure Features */}
            <div>
              <AnimateOnScroll>
                <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">
                  Civic Infrastructure at Scale
                </h2>
              </AnimateOnScroll>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Navigation, title: "Real-time Tracking", desc: "Live telemetry from entire municipal fleets.", color: "text-primary-600 bg-primary-50" },
                  { icon: QrCode, title: "Cashless Payment (QRIS)", desc: "Seamless integration with national payment gateways.", color: "text-amber-600 bg-amber-50" },
                  { icon: Route, title: "Optimized Routes", desc: "Multi-modal journey planning considering live traffic and schedule adherence.", color: "text-accent-600 bg-accent-50" },
                ].map((f, i) => (
                  <AnimateOnScroll key={f.title} delay={i * 100}>
                    <div className="bg-white rounded-xl p-5 border border-slate-200 card-hover">
                      <div className={`w-10 h-10 rounded-lg ${f.color} flex items-center justify-center mb-3`}>
                        <f.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-semibold text-slate-900 mb-1">{f.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Right - Supported Modalities */}
            <div>
              <AnimateOnScroll>
                <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">
                  Supported Modalities
                </h2>
              </AnimateOnScroll>
              <div className="space-y-3">
                {[
                  { icon: Bus, name: "Angkot", desc: "Micro-transit networks", count: "500+" },
                  { icon: Bus, name: "TransJakarta Bus", desc: "BRT Corridors", count: "200+" },
                  { icon: Train, name: "KRL Feeder", desc: "Commuter rail connections", count: "150+" },
                  { icon: Bus, name: "City Shuttle", desc: "Express urban routes", count: "80+" },
                ].map((t, i) => (
                  <AnimateOnScroll key={t.name} delay={i * 80}>
                    <Link href="/routes" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 card-hover group">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                        <t.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-semibold text-slate-900 text-sm">{t.name}</h3>
                        <p className="text-xs text-slate-400">{t.desc}</p>
                      </div>
                      <span className="text-xs font-medium text-slate-400">{t.count} routes</span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" />
                    </Link>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent" />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                    Pocket-sized Reliability.
                  </h2>
                  <p className="text-slate-400 text-sm max-w-lg">
                    Download the Angkut mobile application for personalized alerts, offline maps, and tap-to-pay boarding functionality.
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors">
                    <Smartphone className="w-4 h-4" />
                    Download App
                  </button>
                  <Link
                    href="/routes"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-600 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Explore Routes
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
