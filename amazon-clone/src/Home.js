import React from "react";
import Product from "./Product" ;
import './Home.css' ;


function Home() {
  return (
  <div className="Home">
    <img 
    className="Home__image"
    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

    
      

      {/* Product id, title, price, rating, image */}

      <div className="home__row">

      <Product 
        id="12321341"
        title="Casio Men's Classic Quartz Watch with Resin Strap, Black"
        price={111.96}
        rating={3}
        image={"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
        
        />
          <Product 
        id="12321341"
        title="Swingline Stapler, Optima 25, Full Size Desktop Stapler, 25 Sheet Capacity, Reduced Effort, Blue/Gray"
        price={21.96}
        rating={3}
        image={"https://pasalnepal.com/assets/images/products/1kangaro-stapler-hd-23-17.jpg"}
        
        />
        

         
  
      {/* Product */}
        </div>
      <div className="home__row">

      <Product 
        id="12321341"
        title="SAMSUNG LC27F398FWNXZA SAMSUNG C27F398 27 Inch Curved LED Monitor"
        price={511.96}
        rating={3}
        image={"https://images.samsung.com/is/image/samsung/p6pim/levant/lf24t350fhmxue/gallery/levant-t35f-387153-lf24t350fhmxue-530743207?$720_576_PNG$"}
        
        />
          <Product 
        id="12321341"
        title="Echo Studio - High-fidelity smart speaker with 3D audio and Alexa"
        price={121.96}
        rating={3}
        image={"https://m.media-amazon.com/images/I/61tWD0B0IbL._AC_SY355_.jpg"}
        
        />
        

          <Product 
        id="12321341"
        title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 512GB) - Silver"
        price={1111.96}
        rating={3}
        image={"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104_FMT_WHH?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617126635000"}
        
        />
  
      {/* Product */}
        </div>
        <div className="home__row">

        <Product 
        id="12321341"
        title="
        SAMSUNG 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms"
        price={2111.96}
        rating={3}
        image={"https://i.gadgets360cdn.com/large/Opening_270518_160547_4252_1524835629704.jpg"}
        
        />



        </div>


  </div>
  );
}

export default Home;



