import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Story } from '@/components/story';
import { Materials } from '@/components/materials';
import { Mission } from '@/components/mission';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Materials />
        <Mission />
      </main>
      <Footer />
    </>
  );
}
