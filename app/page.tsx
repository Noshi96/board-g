import { EventCard } from "@/features";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EventCard eventData={{buttonText: "Biorę udział!"}} />
    </main>
  );
}
