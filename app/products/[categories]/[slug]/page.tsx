import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

// Map products to keys
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

// Type for static paths
interface ProductPageParams {
  categories: keyof typeof productsMap;
  slug: keyof typeof productsMap;
}

// Pre-generate static paths
export async function generateStaticParams(): Promise<ProductPageParams[]> {
  return [
    { categories: "crushers", slug: "jawcrushers" },
    { categories: "crushers", slug: "conecrushers" },
    { categories: "crushers", slug: "sandwashingunit" },
    { categories: "crushers", slug: "vibratingscreen" },

    { categories: "mobileseries", slug: "trackmountedconecrusher" },
    { categories: "mobileseries", slug: "trackmountedjawcrusher" },
    { categories: "mobileseries", slug: "trackmountedverticalshiftimpactor" },

    { categories: "semimobileseries", slug: "profastcone" },
    { categories: "semimobileseries", slug: "profastjaw" },
    { categories: "semimobileseries", slug: "profastverticalshiftimpactor" },
    { categories: "semimobileseries", slug: "semimobileseries" },

    { categories: "feeders", slug: "grizzlyfeeder" },
    { categories: "feeders", slug: "panfeeder" },

    { categories: "impactors", slug: "horizontalshiftimpactor" },
    { categories: "impactors", slug: "verticalshiftimpactor" },

    { categories: "concretebatchingsolution", slug: "concretebatchingsolution" },
    { categories: "concretebatchingsolution", slug: "concretebatchingplant" },
    { categories: "concretebatchingsolution", slug: "concretepumps" },
    { categories: "concretebatchingsolution", slug: "wetmixmacadamplant" },

    { categories: "dieselgenerators", slug: "dieselgenerators" },
  ];
}

// Page component
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
