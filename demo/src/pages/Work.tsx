import { SelectedWorks } from '../components/SelectedWorks';
import { Footer } from '../components/Footer';

export function WorkPage() {
  return (
    <>
      <div className="pt-28 md:pt-32">
        <SelectedWorks />
      </div>
      <Footer />
    </>
  );
}
