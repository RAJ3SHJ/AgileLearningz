import Header from './components/Header';
import HeroManifesto from './components/HeroManifesto';
import HistoryTimeline from './components/HistoryTimeline';
import ImportanceROI from './components/ImportanceROI';
import FastFacts from './components/FastFacts';
import Offerings from './components/Offerings';
import EnquireButton from './components/EnquireButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroManifesto />
        <HistoryTimeline />
        <ImportanceROI />
        <FastFacts />
        <Offerings />
      </main>
      <Footer />
      <EnquireButton />
    </div>
  );
}
