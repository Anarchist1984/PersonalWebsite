import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="min-h-screen bg-red-900"></div>
      <div className="min-h-screen bg-purple-900"></div>
      <div className="min-h-screen bg-green-900"></div>
    </main>
  );
}
