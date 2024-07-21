import './App.css';
import Container_top from './compinents/Container_top';
import HeroDiv from './compinents/HeroDiv';
import Nav from './compinents/Nav';

function App() {
  return (
    <div>
      <Container_top/>
      <div className='md:pl-[200px] md:pr-[200px] md:pt-[9.6px] md:pb-[9.6] p-4 m-4'>
      <Nav/>
      <HeroDiv/>

      </div>
    </div>
  );
}

export default App;
