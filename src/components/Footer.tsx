import Link from "next/link";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Schedules", href: "/information" },
      { label: "Live Map", href: "/routes" },
      { label: "Accessibility", href: "/information" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Support", href: "/about" },
      { label: "Privacy Policy", href: "#" },
      { label: "Partnerships", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="font-heading font-bold text-lg text-slate-900">
              Angkut
            </Link>
            <p className="text-sm text-slate-400 mt-2 max-w-xs">
              © {new Date().getFullYear()} Angkut. Civic Reliability in Motion.
            </p>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading font-semibold text-sm text-slate-700 mb-3">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-primary-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
