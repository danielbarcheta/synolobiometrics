import {
  Challange,
  Footer,
  Navbar,
  Hero,
} from "./components";

import Solution from "./components/Solution";
import Innovation from "./components/Innovation";

const Home = () => { 
    return (

        <>
        <div className="bg-primary-gradient w-full overflow-hidden">
        
              <div className="relative">
                <Hero />
              </div>
        
              <Challange />
        
              {/* Renderiza ambos os componentes permanentemente */}
              <Solution />
              <Innovation />
        
                  <Footer />
        
        
            </div>
        </>
    );
}

export default Home;