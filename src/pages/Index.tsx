import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { Features } from '@/components/Features';
import { Process } from '@/components/Process';
import { Markets } from '@/components/Markets';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <Process />
        <Markets />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
