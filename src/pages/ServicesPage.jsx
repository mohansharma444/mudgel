import Services from '../components/Services';
import Techniques from '../components/Techniques';

export default function ServicesPage() {
  return (
    <>
      <div className="bg-gray-50 pt-12 pb-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold text-dark-dark">Our Services & Techniques</h1>
        </div>
      </div>
      <Services />
      <Techniques />
    </>
  );
}
