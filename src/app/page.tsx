import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button size="default" variant="secondary">Click</Button>
      <p className="text-green-500 font-medium">
        Hello AI Portal!
      </p>
    </div>
  );
}
