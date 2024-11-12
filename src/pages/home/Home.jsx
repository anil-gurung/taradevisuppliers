import Header from '../../components/Header';
import Mill from '../../components/Mill';
import Process from '../../components/Process';
import SpecialProducts from '../../components/specialProducts';

// import Products from '../products/Products';
// import About from '../about/About';

import './home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Process />
      <Mill />
      <SpecialProducts />

      {/* <About /> */}
    </>
  );
};
export default Home;
