"use client";

import Link from "next/link";
import { useState } from "react";
import { Bus, Eye, EyeOff, Mail, Lock, User, ArrowRight, MapPin, Route, Navigation, Check } from "lucide-react";

function BrandPanel() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-900/60 via-slate-900 to-primary-900/40" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-accent-500/10 blur-3xl animate-[pulse-glow_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-primary-500/10 blur-3xl animate-[pulse-glow_5s_ease-in-out_infinite_1s]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      </div>
      <div className="relative z-10 flex flex-col justify-between p-12 w-full">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center">
            <Bus className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-2xl text-white">Angkut</span>
        </Link>
        <div className="space-y-8">
          <div>
            <h1 className="font-heading text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
              Start Your <span className="text-accent-400">Journey</span> Today.
            </h1>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              Create a free account and unlock personalized routes, saved trips, and real-time notifications.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Navigation, label: "Real-time tracking", desc: "Live vehicle positions" },
              { icon: Route, label: "Smart routing", desc: "Optimized journeys" },
              { icon: MapPin, label: "500+ stops", desc: "Complete coverage" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{item.label}</p>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-slate-600 text-xs">© 2026 Angkut. Civic infrastructure for everyone.</p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "At least 8 characters", pass: password.length >= 8 },
    { label: "Contains uppercase", pass: /[A-Z]/.test(password) },
    { label: "Contains number", pass: /[0-9]/.test(password) },
  ];
  const strength = checks.filter((c) => c.pass).length;

  if (!password) return null;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-300 ${i <= strength ? (strength === 1 ? "bg-red-400" : strength === 2 ? "bg-amber-400" : "bg-primary-500") : "bg-slate-200"}`} />
        ))}
      </div>
      <div className="space-y-1">
        {checks.map((c) => (
          <div key={c.label} className={`flex items-center gap-2 text-xs transition-colors ${c.pass ? "text-primary-600" : "text-slate-400"}`}>
            <Check className={`w-3 h-3 ${c.pass ? "opacity-100" : "opacity-30"}`} />
            {c.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <>
      <BrandPanel />
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary-500 flex items-center justify-center">
                <Bus className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-slate-900">Angkut</span>
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Create your account</h2>
            <p className="text-slate-500 text-sm">Join the smarter way to navigate public transit.</p>
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 mb-6">
            <GoogleIcon />
            Sign up with Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-white px-4 text-slate-400">or register with email</span></div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="reg-name" className="block text-sm font-medium text-slate-700 mb-1.5">Full name</label>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${focused === "name" ? "border-primary-500 ring-2 ring-primary-100" : "border-slate-200 hover:border-slate-300"}`}>
                <User className={`w-4 h-4 shrink-0 transition-colors ${focused === "name" ? "text-primary-500" : "text-slate-400"}`} />
                <input id="reg-name" type="text" value={name} onChange={(e) => setName(e.target.value)} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} placeholder="John Doe" className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none" required />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-slate-700 mb-1.5">Email address</label>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${focused === "email" ? "border-primary-500 ring-2 ring-primary-100" : "border-slate-200 hover:border-slate-300"}`}>
                <Mail className={`w-4 h-4 shrink-0 transition-colors ${focused === "email" ? "text-primary-500" : "text-slate-400"}`} />
                <input id="reg-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} placeholder="you@example.com" className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none" required />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${focused === "password" ? "border-primary-500 ring-2 ring-primary-100" : "border-slate-200 hover:border-slate-300"}`}>
                <Lock className={`w-4 h-4 shrink-0 transition-colors ${focused === "password" ? "text-primary-500" : "text-slate-400"}`} />
                <input id="reg-password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setFocused("password")} onBlur={() => setFocused(null)} placeholder="Create a strong password" className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Toggle password visibility">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <PasswordStrength password={password} />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input id="agree-terms" type="checkbox" className="w-4 h-4 mt-0.5 rounded border-slate-300 text-primary-600 focus:ring-primary-500 accent-primary-600" required />
              <label htmlFor="agree-terms" className="text-sm text-slate-600 leading-snug">
                I agree to the{" "}
                <Link href="#" className="text-primary-600 hover:text-primary-700 font-medium">Terms of Service</Link>
                {" "}and{" "}
                <Link href="#" className="text-primary-600 hover:text-primary-700 font-medium">Privacy Policy</Link>
              </label>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-slate-900/10">
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
}
