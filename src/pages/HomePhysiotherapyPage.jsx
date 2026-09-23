import HomePhysiotherapy from '../components/HomePhysiotherapy';
import HowItWorks from '../components/HowItWorks';

export default function HomePhysiotherapyPage() {
  return (
    <>
      <div className="bg-gray-50 pt-12 pb-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold text-dark-dark">Physiotherapy at Your Doorstep</h1>
        </div>
      </div>
      <HomePhysiotherapy />
      <HowItWorks />
    </>
  );
}
