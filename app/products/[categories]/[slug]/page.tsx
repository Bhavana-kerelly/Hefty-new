"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
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
import VerticalShiftImpactor from "@/components/products/impactors/VerticalShiftImpactor";
import HorizontalShiftImpactor from "@/components/products/impactors/HorizontalShiftImpactor";



import ConcreteBatchingSolution from "@/components/products/concretebatchingsolution/ConcreteBatchingSolution";
import ConcreteBatchingPlant  from "@/components/products/concretebatchingsolution/ConcreteBatchingPlant";
import ConcretePumps from "@/components/products/concretebatchingsolution/ConcretePumps";
import WetmixMacadamPlant from "@/components/products/concretebatchingsolution/WetmixMacadamPlant";


import DieselGenerators from "@/components/products/dieselgenerators/DieselGenerators";

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

export default function ProductPage() {
  const params = useParams<{ categories?: string; slug?: string }>();

   const category = params.categories?.toLowerCase();
const slug = params.slug?.toLowerCase();


let key = slug;


if (!slug) {
  key = category;
}
  const Component = productsMap[key || ""];


  
  if (!Component) return notFound();

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