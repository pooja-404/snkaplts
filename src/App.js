import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navsec from './components/Navsec';
import Section4 from './components/Section4';
import Footersec from './components/Footersec';
import Firstsection from './components/Firstsection';
import Section2 from './components/Section2';
import Tabsection from './components/Tabsection';
import Cardsection from './components/Cardsection'






function App() {
  return (
    <div>
      <Navsec />
      <Firstsection />
      <Section2 />
      <Tabsection />
      <Section4 />
      <Cardsection />
      <Footersec />
    </div>
  );
}

export default App;
