import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
          alt=""
        />
        <div className="home__row">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/51b7XbfMIIL.jpg"
            title="Clean Code"
            price={33.96}
            rating={5}
            id={0}
          />
          <Product
            title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black"
            image="data:image/jpeg;base64,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"
            price={349.99}
            rating={5}
            id={1}
          />
        </div>
        <div className="home__row">
          <Product
            title="Dell UltraSharp 43 4K USB-C Monitor - U4320Q"
            image="https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/peripherals_dell/Monitors/ultrasharp/u4320q/u4320q_csy_0000ff090_gy.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=682&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=682,402"
            price={864.99}
            rating={4}
            id={2}
          />
          <Product
            title="Apple M1 Chip with 8‑Core CPU and 7‑Core GPU 256GB Storage"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1603332211000"
            price="999.09"
            rating={4}
            id={3}
          />
          <Product
            title="Latest Blue Yeti USB Microphone with 4 Pickup Patterns, 3 Condenser Capsules for Gaming, Streaming, Podcasting on PC/Mac, with GalliumPi Pop Filter and Microfiber Clothing Bundle (Blackout)"
            image="https://m.media-amazon.com/images/I/61v94IqmUwL._AC_UY218_.jpg"
            price={159.99}
            rating={5}
            id={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Retro Round Blue Light Blocking Glasses Women/Men - FEIDU Computer Anti Eye Eyestrain Reading Gaming Fashion Glasses Non Prescription2020 New"
            image="https://m.media-amazon.com/images/I/51DYiWkmgXL._AC_UL320_.jpg"
            price={10.92}
            rating={4}
            id={5}
          />
          <Product
            title="Sparkly Rhinestone Mesh Face Mask Masquerade Mask for Women Glitter Face Mask Bling Face Mask Christmas Party"
            image="https://m.media-amazon.com/images/I/81LeJdaoQBL._AC_UL320_.jpg"
            price={10.92}
            rating={2}
            id={6}
          />
          <Product
            title="TeeTurtle | The Original Reversible Octopus Plushie | Patented Design | Black and Gray | Show your mood without saying a word!"
            image="https://images-na.ssl-images-amazon.com/images/I/41NRm6RmoPL._AC_UL320_SR320,320_.jpg"
            price={15.0}
            rating={5}
            id={7}
          />
        </div>
        <div className="home__row">
          <Product
            title="LG 34GP83A-B 34 Inch 21: 9 Ultragear Curved QHD (3440 x 1440) 1ms Nano IPS Gaming Monitor with 144Hz and G-SYNC Compatibility - Black (34GP83A-B)"
            image="https://m.media-amazon.com/images/I/71UnbkzLquL._AC_UY218_.jpg"
            price={799.99}
            rating={4}
            id={8}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
