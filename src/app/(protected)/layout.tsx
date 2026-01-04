import Navbar from "../../components/NavBar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-28 px-4">
      <Navbar />

      <main className="mx-auto max-w-7xl">{children}</main>
    </div>
  );
}
