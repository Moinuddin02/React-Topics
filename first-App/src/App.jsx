import Cap from "./components/Cap";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
       <Cap title="Card 1" Description="Desc 1"/>
       <Cap title="Card 2" Description="Desc 2"/>
       <Cap title="Card 3" Description="Desc 3"/>
       <Cap title="Card 4" Description="Desc 4"/>
     
      </div>
      <Footer />
    </>
  );
}

export default App;
