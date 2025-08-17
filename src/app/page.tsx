import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CitySelector from '@/components/CitySelector';
import DonationWidget from '@/components/DonationWidget';
import CourseGrid from '@/components/CourseGrid';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <CitySelector />
      <DonationWidget />
      <CourseGrid />
      <CommunitySection />
      <Footer />
    </main>
  );
}
