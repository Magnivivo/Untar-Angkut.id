import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angkut — Authentication",
  description: "Sign in or create your Angkut account to access personalized transit routes, saved journeys, and real-time alerts.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      {children}
    </div>
  );
}
