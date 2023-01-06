import axios from "axios";
import { useEffect, useState } from "react";

export function Outfit() {
  const [outfits, setOutfits] = useState([]);

  const handleIndexOutfits = () => {
    axios.get("http://localhost:3000/outfits.json").then((response) => {
      console.log(response.data);
      setOutfits(response.data);
    });
  };

  useEffect(handleIndexOutfits, []);

  return (
    <div className="h-screen">
      <div className="mt-5  text-center block text-4xl font-black">Outfits</div>
      <div className="grid grid-row2 justify-center items-center">
        <br />
        <div className=" mt-5 block text-center">
          {outfits.map((outfit) => (
            <div key={outfit.id}>
              <br />
              <p>{outfit.name}</p>
              <p>
                {outfit.items.map((item) => (
                  <div key={item.id}>
                    <p>{item.name}</p>
                    <img className="w-30 h-auto" src={item.img_url} />
                    <p>{item.description}</p>
                  </div>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
