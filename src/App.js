import Beers from './components/Beers';
import HeaderBar from './components/HeaderBar';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { sortByABVDesc } from './Utils';

function App() {
  const [beers, setBeers] = useState([]);

  //retrieve beers from API only on the first render of App
  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?per_page=80`
    );

    const data = await response.json();
    setBeers(data);
  };

  beers.sort(sortByABVDesc());

  return (
    <>
      <HeaderBar />
      <Header />
      <Beers beers={beers} />
    </>
  );
}

export default App;
