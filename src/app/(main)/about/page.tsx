"use client";

import {
  Target, Eye, CheckCircle, Mail, Phone, MapPin,
  AlertTriangle, ArrowRight, Globe, Zap, Shield,
  Heart, Users, Send,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const team = [
  { name: "Axel Nathaniel", role: "Chief Executive Officer", initials: "AN" },
  { name: "Kiyo Vincent", role: "Head of Operations", initials: "KV" },
  { name: "Yosef Pradita", role: "VP of Engineering", initials: "YP" },
  { name: "Tanujaya Hartono Sotyohadi", role: "Director of Civic Design", initials: "THS" },
];

const partners = ["TransJatim", "Wira Wiri", "Suroboyo Bus", "Macito"];

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
                  Keandalan Sipil{" "}
                  <span className="text-primary-600">yang Bergerak</span>
                </h1>
                <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                  Kami menjembatani teknologi berkecepatan tinggi dengan kepercayaan institusional, membangun infrastruktur digital untuk mobilitas perkotaan modern.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full gradient-primary text-white flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-12 h-12" />
                  </div>
                  <p className="text-sm font-medium text-slate-500">Menghubungkan komunitas melalui transit</p>
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
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Mandat Utama Kami</h2>
              <p className="text-slate-500 text-sm">Prinsip-prinsip yang memandu infrastruktur perkotaan kami.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "Visi", desc: "Menciptakan ekosistem transit yang mulus dan dapat diakses secara universal, di mana teknologi memberdayakan setiap komuter dengan kejelasan dan keyakinan." },
              { icon: Target, title: "Misi", desc: "Menyediakan alat yang tangguh dan berpusat pada pengguna yang memberikan data real-time, mengoptimalkan rute, dan meminimalkan ketidakpastian di jaringan transportasi umum." },
              { icon: Shield, title: "Komitmen", desc: "Kami memprioritaskan integritas data, stabilitas sistem, dan akses yang adil bagi semua orang, memastikan keandalan sipil dalam setiap interaksi." },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 border border-slate-200 card-hover text-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${i === 0 ? "bg-slate-100 text-slate-600" :
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
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">Mengapa Kami Membangun Angkut</h2>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <AnimateOnScroll>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <h3 className="font-heading font-bold text-amber-800">Tantangan</h3>
                  </div>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Mobilitas perkotaan sering terhambat oleh data yang terfragmentasi, jadwal yang tidak terduga, dan sistem pembayaran yang terputus, menyebabkan frustrasi komuter dan perencanaan kota yang tidak efisien.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                    <h3 className="font-heading font-bold text-primary-800">Solusi</h3>
                  </div>
                  <p className="text-sm text-primary-700 leading-relaxed">
                    Kami menyatukan berbagai umpan transit kota ke dalam satu platform yang sangat mudah dibaca. Dengan pelacakan real-time, perutean terstandarisasi, dan tiket terintegrasi, kami menata kekacauan yang ada.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-slate-100 rounded-xl flex items-center justify-center p-6">
                  <div className="text-center">
                    <Zap className="w-10 h-10 text-primary-500 mx-auto mb-2" />
                    <p className="text-xs text-slate-500 font-medium">Data Real-time</p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-xl flex items-center justify-center p-6">
                  <div className="text-center">
                    <Users className="w-10 h-10 text-accent-500 mx-auto mb-2" />
                    <p className="text-xs text-slate-500 font-medium">Utamakan Komunitas</p>
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
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Tim Kepemimpinan</h2>
              <p className="text-slate-500 text-sm">Ahli dalam perencanaan kota, rekayasa perangkat lunak, dan desain sipil.</p>
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
              Dipercaya oleh Otoritas Kota & Jaringan Pembayaran
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
                <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Hubungi Kami</h2>
                <p className="text-sm text-slate-500 mb-6">Untuk kemitraan agensi atau pertanyaan pers, silakan gunakan formulir di bawah ini.</p>

                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Nama Depan</label>
                      <input type="text" className="w-full p-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-400 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Nama Belakang</label>
                      <input type="text" className="w-full p-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-400 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Alamat Email</label>
                    <input type="email" className="w-full p-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-400 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Pesan</label>
                    <textarea rows={4} className="w-full p-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-400 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-colors">
                    Kirim Pesan
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
                      <h3 className="font-heading font-semibold text-slate-900 text-sm mb-1">Kantor Pusat</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Universitas Bina Nusantara<br />
                        Jl. Kyai Haji Syahdan No. 9<br />
                        Jakarta Barat, DKI Jakarta 11480
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
