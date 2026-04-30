"use client";

import {
  Target, Eye, CheckCircle, Mail, Phone, MapPin,
  AlertTriangle, ArrowRight, Globe, Zap, Shield,
  Heart, Users, Send,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const team = [
  { name: "Dr. Elena Rostova", role: "Chief Executive Officer", initials: "ER" },
  { name: "Marcus Vance", role: "Head of Operations", initials: "MV" },
  { name: "Sarah Chen", role: "VP of Engineering", initials: "SC" },
  { name: "David Okafor", role: "Director of Civic Design", initials: "DO" },
];

const partners = ["Metrolink", "CityTransit", "PayFast", "CivicBank"];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <h1 className="font-heading text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                  Civic Reliability{" "}
                  <span className="text-primary-600">in Motion</span>
                </h1>
                <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                  We bridge the gap between high-velocity technology and institutional trust, building the digital infrastructure for modern urban mobility.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full gradient-primary text-white flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-12 h-12" />
                  </div>
                  <p className="text-sm font-medium text-slate-500">Connecting communities through transit</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Core Mandate */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Our Core Mandate</h2>
              <p className="text-slate-500 text-sm">The principles guiding our urban infrastructure.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "The Vision", desc: "To create a seamless, universally accessible transit ecosystem where technology empowers every commuter with clarity and confidence." },
              { icon: Target, title: "The Mission", desc: "Deploying robust, user-centric tools that provide real-time data, optimize routes, and minimize unpredictability in public transportation networks." },
              { icon: Shield, title: "The Commitment", desc: "We prioritize data integrity, system stability, and equitable access so all, ensuring civic reliability in every interaction." },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 border border-slate-200 card-hover text-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    i === 0 ? "bg-slate-100 text-slate-600" :
                    i === 1 ? "bg-primary-50 text-primary-600" :
                    "bg-accent-50 text-accent-600"
                  }`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">Why We Built Angkut</h2>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <AnimateOnScroll>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <h3 className="font-heading font-bold text-amber-800">The Challenge</h3>
                  </div>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Urban mobility is often plagued by fragmented data, unpredictable schedules, and disconnected payment systems, leading to commuter frustration and inefficient city planning.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                    <h3 className="font-heading font-bold text-primary-800">The Solution</h3>
                  </div>
                  <p className="text-sm text-primary-700 leading-relaxed">
                    We unify disparate municipal transit feeds into a single, highly legible platform. By providing real-time tracking, standardized routing, and integrated ticketing, we bring order to the chaos.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-slate-100 rounded-xl flex items-center justify-center p-6">
                  <div className="text-center">
                    <Zap className="w-10 h-10 text-primary-500 mx-auto mb-2" />
                    <p className="text-xs text-slate-500 font-medium">Real-time Data</p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-xl flex items-center justify-center p-6">
                  <div className="text-center">
                    <Users className="w-10 h-10 text-accent-500 mx-auto mb-2" />
                    <p className="text-xs text-slate-500 font-medium">Community First</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Leadership Team</h2>
              <p className="text-slate-500 text-sm">Experts in urban planning, software engineering, and civic design.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <AnimateOnScroll key={m.name} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-20 h-20 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-lg font-heading font-bold mx-auto mb-3 group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">
                    {m.initials}
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 text-sm">{m.name}</h3>
                  <p className="text-xs text-slate-400">{m.role}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Trusted by Municipal Authorities & Payment Networks
            </p>
            <div className="flex items-center justify-center gap-12 flex-wrap">
              {partners.map((p) => (
                <span key={p} className="text-slate-300 font-heading font-bold text-xl hover:text-slate-500 transition-colors cursor-pointer">
                  {p}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimateOnScroll>
              <div>
                <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Get in Touch</h2>
                <p className="text-sm text-slate-500 mb-6">For agency partnerships or press inquiries, please use the form below.</p>

                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-1.5 block">First Name</label>
                      <input type="text" className="w-full p-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-400 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Last Name</label>
                      <input type="text" className="w-full p-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-400 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Email Address</label>
                    <input type="email" className="w-full p-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-400 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Message</label>
                    <textarea rows={4} className="w-full p-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-400 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-colors">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary-500 mx-auto mb-3" />
                    <p className="font-heading font-bold text-slate-800">ANGKUT</p>
                    <p className="text-xs text-slate-500">Smart Transit Platform</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-slate-900 text-sm mb-1">Headquarters</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Universitas Tarumanagara<br />
                        Jl. Letjen S. Parman No.1<br />
                        Jakarta Barat, DKI Jakarta 11440
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
