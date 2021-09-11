import { Navbar } from "../components/layout";
import { MainBanner } from "../components/banners";

export default function Home() {
  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <Navbar />
      <div className="p-5 w-full">
        <MainBanner />
        <div>
          This is probably where I'll add Cards for projects and personal blogs
        </div>
      </div>
    </div>
  );
}
