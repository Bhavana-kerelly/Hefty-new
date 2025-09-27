"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white font-serif">
      <div className="max-w-[1280px] mx-auto flex text-black items-center justify-between h-20 px-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/Logo1.jpg"
            alt="Nihal Finserv"
            width={155}
            height={30}
            
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-2 items-center text-sm text-black ml-40">

          <a href="/" className="px-3 py-2 rounded-lg hover:text-[#e96a32] transition-colors">Home</a>
          <a href="/about" className="px-3 py-2 rounded-lg hover:text-[#e96a32] transition-colors">About Us</a>

          {/* Products Dropdown */}
         <div className="relative h-full flex items-center hover:text-[#e96a32]" onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave} > <span className="cursor-pointer px-3 py-2 rounded-lg transition-colors duration-300 "> Products ▾ </span>
          {openMenu === "products" && ( 
            <div className="fixed top-16 left-0 right-0 bg-blue-900 shadow-2xl rounded-b-lg p-8 transition-all duration-300 ease-in-out opacity-100 animate-slide-down"> 
          <div className="grid grid-cols-5 gap-8 max-w-[1280px] mx-auto text-white text-sm"> 
            {/* Column 1: Crushes */} 
            <div className="flex flex-col space-y-3"> 
              <div className="font-semibold text-base mb-2"> <a href="/products/crushers/crushers" className="text-[#e96a32] hover:text-black transition-colors">Crushers</a>
               </div>
                <a href="/products/crushers/jawcrushers" className="hover:text-black transition-colors">Jaw Crushers</a> <a href="/products/crushers/conecrushers" className="hover:text-black transition-colors">Cone Crushers</a>
               <a href="/products/crushers/impactors" className="hover:text-black transition-colors">Impactors</a> 
               <a href="/products/crushers/vibratingscreen" className="hover:text-black transition-colors">Vibrating Screen</a> 
               <a href="/products/crushers/feeders" className="hover:text-black transition-colors">Feeders</a> 
               <a href="/products/crushers/sandwashingunit" className="hover:text-black transition-colors">Sand Washing Units</a>
               <a href="/products/mobileseries/mobileseries" className="hover:text-black transition-colors">Track Mounted (Mobile) Crushers</a> 
               <a href="/products/semimobileseries/semimobileseries" className="hover:text-black transition-colors">Track Mounted(Semi Mobile) Crushers</a> 
               </div> 
               {/* Column 2: Mobile Series */} 
               <div className="flex flex-col space-y-3"> <div className="font-semibold text-base mb-2"> <a href="/products/concretebatchingsolution/concretebatchingsolution" className="text-[#e96a32] hover:text-black transition-colors">Concrete batching Solutions</a> </div>
                <a href="/products/concretebatchingsolution/concretebatchingplant" className="hover:text-black transition-colors">Concerete Batching Plant</a>
                <a href="/products/concretebatchingsolution/concretepumps" className="hover:text-black transition-colors">Concrete Pumps </a> 
                <a href="/products/concretebatchingsolution/wetmixmacadamplant" className="hover:text-black transition-colors">Wetmix Macadam Plant</a>
                 </div> 
                 {/* Column 3: Semi Mobile Series classifier*/} 
                 <div className="flex flex-col space-y-3"> 
                  <div className="font-semibold text-base mb-2"> 
                    <a href="/products/semimobileseries/semimobileseries" className="text-[#e96a32] hover:text-black transition-colors">Asphalt Plants </a> </div> 
                    <a href="/products/semimobileseries/profastjaw" className="hover:text-black transition-colors">Asphalt Drum Mix Plant</a> 
                    <a href="/products/semimobileseries/profastcone" className="hover:text-black transition-colors">Asphalt HotMix Plant</a> 
                    <a href="/products/semimobileseries/prfmqseries" className=" hover:text-black transition-colors">Coal Burner </a> 
                    <a href="/products/semimobileseries/prfmcseries" className="hover:text-black transition-colors">Coal Polverizer</a> 
                    <a href="/products/semimobileseries/profastverticalshiftimpactor" className="hover:text-black transition-colors">Bitumen Sprayer</a> 
                    <a href="/products/classifier/classifier" className=" hover:text-black transition-colors">Dryer Unit</a> 
                    <a href="/products/classifier/proairclassifier" className="hover:text-black transition-colors">Bitumen Melting Machine</a> 
                    <a href="/products/classifier/proairclassifier" className="hover:text-black transition-colors">Storage Tank</a> </div> 
                    {/* Column 4: Feeders and Impactors */} 
                    <div className="flex flex-col space-y-3"> 
                      <div className="font-semibold text-base mb-2"> <a href="/products/feeders/feeders" className="text-[#e96a32] hover:text-black transition-colors">Lubricants </a> </div> 
                      <a href="/products/feeders/grizzlyfeeder" className="hover:text-black transition-colors">EP2 GREASE</a> 
                      <a href="/products/feeders/feederscreen" className="hover:text-black transition-colors">PD2 GREASE</a> 
                      <a href="/products/feeders/panfeeder" className="hover:text-black transition-colors">MP3 Grease Call Purpose </a> 
                      <a href="/products/impactors/impactors" className=" hover:text-black transition-colors">Gearoils</a> 
                      <a href="/products/impactors/verticalshiftimpactor" className="hover:text-black transition-colors">ADD BLUE</a> </div> 
                      {/* Column 5: Screens, Washing, Concrete */} 
                      <div className="flex flex-col space-y-3"> 
                        <div className="font-semibold text-base mb-2"> <a href="/products/dieselgenerators/dieselgenerators" className="text-[#e96a32] hover:text-black transition-colors">Diesel Generators</a> </div> 
                        <a href="/products/screens/vibratingscreen" className="hover:text-black transition-colors">15Kva - 250Kva</a> </div> </div> </div> )} </div>

          <a href="/gallery" className="px-3 py-2 rounded-lg hover:text-[#e96a32] transition-colors">Gallery</a>
          <a href="/blog" className="px-3 py-2 rounded-lg hover:text-[#e96a32] transition-colors">Blogs</a>
          <a href="/contact" className="px-3 py-2 rounded-lg hover:text-[#e96a32] transition-colors">Contact Us</a>

          {/* Social icons */}
          <div className="ml-50 flex gap-3">
            <a href="https://www.facebook.com/profile.php?id=61578856662236" target="_blank" rel="noopener noreferrer" className="text-[#e96a32] hover:text-blue-700"><FaFacebookF size={16} /></a>
            <a href="https://x.com/Hefty_hyd " target="_blank" rel="noopener noreferrer" className="text-[#e96a32] hover:text-blue-700"><FaTwitter size={16} /></a>
            <a href="https://www.linkedin.com/company/108119796" target="_blank" rel="noopener noreferrer" className="text-[#e96a32] hover:text-blue-700"><FaLinkedinIn size={16} /></a>
            <a href="https://www.instagram.com/hefty_hyd/" target="_blank" rel="noopener noreferrer" className="text-[#e96a32] hover:text-blue-700"><FaInstagram size={16} /></a>
            <a 
    href="https://wa.me/7893800757" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[#e96a32] hover:text-blue-900"
  >
    <FaWhatsapp size={16} />
  </a>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl text-black focus:outline-none">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#0F2D54] text-white px-4 py-4 space-y-2 shadow-lg">
          <a href="/" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32]">Home</a>
          <a href="/about" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32]">About Us</a>

          {/* Mobile Products Collapsible */}
          {/* Mobile Products collapsible */}
<div>
  <button
    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
    className="w-full text-left px-4 py-2 rounded-md hover:bg-[#e96a32] transition-colors duration-200 flex justify-between items-center"
    aria-expanded={mobileProductsOpen}
  >
    Products
    <span className="ml-2 transition-transform duration-200 transform">
      {mobileProductsOpen ? "▲" : "▼"}
    </span>
  </button>

  {mobileProductsOpen && (
    <div className="pl-4 mt-2 space-y-4 text-sm transition-all duration-300 ease-in-out overflow-hidden">

      {/* Column 1: Crushers */}
      <div>
        <div className="font-semibold mb-2">
          <a href="/products/crushers/crushers" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Crushers</a>
        </div>
        <a href="/products/crushers/jawcrushers" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Jaw Crushers</a>
        <a href="/products/crushers/conecrushers" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Cone Crushers</a>
        <a href="/products/crushers/impactors" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Impactors</a>
        <a href="/products/crushers/vibratingscreen" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Vibrating Screen</a>
        <a href="/products/crushers/feeders" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Feeders</a>
        <a href="/products/crushers/sandwashingunit" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Sand Washing Units</a>
        <a href="/products/mobileseries/mobileseries" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Track Mounted (Mobile) Crushers</a>
        <a href="/products/semimobileseries/semimobileseries" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Track Mounted (Semi Mobile) Crushers</a>
      </div>

      {/* Column 2: Concrete Batching Solutions */}
      <div>
        <div className="font-semibold mb-2">
          <a href="/products/concretebatchingsolution/concretebatchingsolution" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Concrete Batching Solutions</a>
        </div>
        <a href="/products/concretebatchingsolution/concretebatchingplant" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Concrete Batching Plant</a>
        <a href="/products/concretebatchingsolution/concretepumps" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Concrete Pumps</a>
        <a href="/products/concretebatchingsolution/wetmixmacadamplant" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Wetmix Macadam Plant</a>
      </div>

      {/* Column 3: Semi Mobile / Classifier */}
      <div>
        <div className="font-semibold mb-2">
          <a href="/products/semimobileseries/semimobileseries" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Asphalt Plants</a>
        </div>
        <a href="/products/semimobileseries/profastjaw" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Asphalt Drum Mix Plant</a>
        <a href="/products/semimobileseries/profastcone" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Asphalt HotMix Plant</a>
        <a href="/products/semimobileseries/prfmqseries" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Coal Burner</a>
        <a href="/products/semimobileseries/prfmcseries" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Coal Pulverizer</a>
        <a href="/products/semimobileseries/profastverticalshiftimpactor" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Biramin Sprayer</a>
        <a href="/products/classifier/classifier" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Dryer Unit</a>
        <a href="/products/classifier/proairclassifier" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Bitumen Melting Machine</a>
        <a href="/products/classifier/proairclassifier" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Storage Tank</a>
      </div>

      {/* Column 4: Feeders and Impactors */}
      <div>
        <div className="font-semibold mb-2">
          <a href="/products/feeders/feeders" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Lubricants</a>
        </div>
        <a href="/products/feeders/grizzlyfeeder" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">EP2 GREASE</a>
        <a href="/products/feeders/feederscreen" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">PD2 GREASE</a>
        <a href="/products/feeders/panfeeder" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">MP3 Grease Call Purpose</a>
        <a href="/products/impactors/impactors" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Gear Oils</a>
        <a href="/products/impactors/verticalshiftimpactor" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">ADD BLUE</a>
      </div>

      {/* Column 5: Screens / Diesel Generators */}
      <div>
        <div className="font-semibold mb-2">
          <a href="/products/dieselgenerators/dieselgenerators" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Diesel Generators</a>
        </div>
        <a href="/products/screens/vibratingscreen" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">ISKUA - 250Kva</a>
      </div>

    </div>
  )}
</div>


          <a href="/gallery" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32]">Gallery</a>
          <a href="/blog" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32]">Blogs</a>
          <a href="/contact" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32]">Contact Us</a>
        </nav>
      )}
    </header>
  );
}
