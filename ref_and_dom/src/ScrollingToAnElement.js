import React, { useRef } from "react";

const ScrollingToAnElement = () => {
    const hidRef=useRef(null)
    const roseRef=useRef(null)
    const orchidRef=useRef(null)

    const scrollToHib=()=>{
        hidRef.current.scrollIntoView({
            behaviour:'smooth',
            block:'nearest',
            inline:'center'
        })
    }
    const scrollToRose=()=>{
        roseRef.current.scrollIntoView({
            behaviour:'smooth',
            block:'nearest',
            inline:'center'
        })
    }
    const scrollToOrchid=()=>{
        orchidRef.current.scrollIntoView({
            behaviour:'smooth',
            block:'nearest',
            inline:'center'
        })
    }
  return (
    <div>
    <h2>Scrolling to an Element</h2>
      <nav>
        <button onClick={scrollToHib}>Hibiscus</button>
        <button onClick={scrollToRose}>rose</button>
        <button onClick={scrollToOrchid}>Orchid</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://www.thespruce.com/thmb/FXj7Jh9-FdCl9FrFT67Trd9_Gd8=/3865x2576/filters:fill(auto,1)/trio-of-vibrant-red-hibiscus-flowers-with-bright-yellow-stigma-growing-in-garden-pot-845218812-5abea591119fa80037eef63e.jpg"
              alt="hibiscus"
              width="300px"
              ref={hidRef}
            />
          </li>
          <li>
            <img
              src="https://th.bing.com/th/id/OIP.0Ag8sjsHwsqSzFYWitlNIQHaFj?pid=ImgDet&rs=1"
              alt="rose"
              width="300px"
              ref={roseRef}
            />
          </li>
          <li>
            <img
                src="https://th.bing.com/th/id/OIP.dAlOhyah50KLqQXJup8vGAHaE6?pid=ImgDet&rs=1"
                alt="Orchid"
                width="300px"
                ref={orchidRef}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScrollingToAnElement;
