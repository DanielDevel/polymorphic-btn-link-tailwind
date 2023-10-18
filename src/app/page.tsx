import Buttons from "@/components/buttons";
import Links from "@/components/links";
export default function Home() {
  return (
    <div className="flex w-1/2 justify-between">
      {/* Link */}
      <div className="flex items-center flex-col gap-5">
        <h2 className="text-black font-bold">Links</h2>
        <Links />
      </div>
      {/* Button */}
      <div className="flex items-center flex-col gap-5">
        <h2 className="text-black font-bold">Button</h2>
        <Buttons />
      </div>
    </div>
  );
}
