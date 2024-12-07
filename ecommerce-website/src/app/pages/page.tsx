import Navbar from "./Navbar";
import HeroSection from "@/components/Hero-section";
import TodayProduct from "@/components/Today-product";
import Category from "@/components/categories";
import BestSellingProducts from "@/components/SellingProduct";
import CategoriesMusic from "@/components/Categories-music";
import PhotoSection from "@/components/Photo-Section";
import ProductSection from "@/components/ProductSection";
import FullService from "@/components/Service";

export default function Home() {
  return (
    <>
      
      <Navbar />
      <HeroSection />
      <TodayProduct />
      <Category />
      <BestSellingProducts />
      <CategoriesMusic />
      <PhotoSection />
      <ProductSection />
      <FullService />

    </>
  );
}