import Image from "next/image";
import Link from "next/link";
import SimpleSlider from './components/data/CarouselComponent';

export default function Home() {
  return (
    <div className="grid grid-cols-1 text-white justify-items-center">
      <SimpleSlider />
    </div>
  );
}
