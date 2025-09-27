// app/products/[categories]/[slug]/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- your imports (kept the same) ---
import Crushers from "@/components/products/crushers/Crushers";
import JawCrushers from "@/components/products/crushers/JawCrushers";
import ConeCrushers from "@/components/products/crushers/ConeCrushers";
import SandWashingUnit from "@/components/products/crushers/SandWashingUnit";
import VibratingScreen from "@/components/products/crushers/VibratingScreen";

import MobileSeries from "@/components/products/mobileseries/MobileSeries";
import TrackMountedConeCrusher from "@/components/products/mobileseries/TrackMountedConeCrusher";
import TrackMountedJawCrusher from "@/components/products/mobileseries/TrackMountedJawCrusher";
import TrackMountedVerticalShiftImpactor from "@/components/products/mobileseries/TrackMountedVerticalShiftImpactor";

import SemiMobileSeries from "@/components/products/semimobileseries/SemiMobileSeries";
import ProFastCone from "@/components/products/semimobileseries/ProFastCone";
import ProFastJaw from "@/components/products/semimobileseries/ProFastJaw";
import ProFastVerticalShiftImpactor from "@/components/products/semimobileseries/ProFastVerticalShiftImpactor";

import Feeders from "@/components/products/feeders/Feeders";
import GrizzlyFeeder from "@/components/products/feeders/GrizzlyFeeder";
import PanFeeder from "@/components/products/feeders/PanFeeder";

import Impactors from "@/components/products/impactors/Impactors";
import HorizontalShiftImpactor from "@/components/products/impactors/HorizontalShiftImpactor";
import VerticalShiftImpactor from "@/components/products/impactors/VerticalShiftImpactor";

import ConcreteBatchingSolution from "@/components/products/concretebatchingsolution/ConcreteBatchingSolution";
import ConcreteBatchingPlant from "@/components/products/concretebatchingsolution/ConcreteBatchingPlant";
import ConcretePumps from "@/components/products/concretebatchingsolution/ConcretePumps";
import WetmixMacadamPlant from "@/components/products/concretebatchingsolution/WetmixMacadamPlant";

import DieselGenerators from "@/components/products/dieselgenerators/DieselGenerators";

// --- Product Map ---
const productsMap: Record<string, React.ComponentType> = {
  crushers: Crushers,
  jawcrushers: JawCrushers,
  conecrushers: ConeCrushers,
  sandwashingunit: SandWashingUnit,
  vibratingscreen: VibratingScreen,

  mobileseries: MobileSeries,
  trackmountedconecrusher: TrackMountedConeCrusher,
  trackmountedjawcrusher: TrackMountedJawCrusher,
  trackmountedverticalshiftimpactor: TrackMountedVerticalShiftImpactor,

  semimobileseries: SemiMobileSeries,
  profastcone: ProFastCone,
  profastjaw: ProFastJaw,
  profastverticalshiftimpactor: ProFastVerticalShiftImpactor,

  feeders: Feeders,
  grizzlyfeeder: GrizzlyFeeder,
  panfeeder: PanFeeder,

  impactors: Impactors,
  horizontalshiftimpactor: HorizontalShiftImpactor,
  verticalshiftimpactor: VerticalShiftImpactor,

  concretebatchingsolution: ConcreteBatchingSolution,
  concretebatchingplant: ConcreteBatchingPlant,
  concretepumps: ConcretePumps,
  wetmixmacadamplant: WetmixMacadamPlant,

  dieselgenerators: DieselGenerators,
};

// --- generateStaticParams ---
export async function generateStaticParams() {
  return [
    { params: { categories: "crushers", slug: "jawcrushers" } },
    { params: { categories: "crushers", slug: "conecrushers" } },
    { params: { categories: "crushers", slug: "sandwashingunit" } },
    { params: { categories: "crushers", slug: "vibratingscreen" } },

    { params: { categories: "mobileseries", slug: "trackmountedconecrusher" } },
    { params: { categories: "mobileseries", slug: "trackmountedjawcrusher" } },
    { params: { categories: "mobileseries", slug: "trackmountedverticalshiftimpactor" } },

    { params: { categories: "semimobileseries", slug: "profastcone" } },
    { params: { categories: "semimobileseries", slug: "profastjaw" } },
    { params: { categories: "semimobileseries", slug: "profastverticalshiftimpactor" } },
    { params: { categories: "semimobileseries", slug: "semimobileseries" } },

    { params: { categories: "feeders", slug: "grizzlyfeeder" } },
    { params: { categories: "feeders", slug: "panfeeder" } },

    { params: { categories: "impactors", slug: "horizontalshiftimpactor" } },
    { params: { categories: "impactors", slug: "verticalshiftimpactor" } },

    { params: { categories: "concretebatchingsolution", slug: "concretebatchingsolution" } },
    { params: { categories: "concretebatchingsolution", slug: "concretebatchingplant" } },
    { params: { categories: "concretebatchingsolution", slug: "concretepumps" } },
    { params: { categories: "concretebatchingsolution", slug: "wetmixmacadamplant" } },

    { params: { categories: "dieselgenerators", slug: "dieselgenerators" } },
  ];
}

// --- Page Component ---
export default function ProductPage({ params }: { params: { categories: string; slug: string } }) {
  const key = params.slug.toLowerCase() as keyof typeof productsMap;
  const Component = productsMap[key];

  if (!Component) return <div>Product not found</div>;

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen py-12 px-4">
        <Component />
      </main>
      <Footer />
    </>
  );
}
