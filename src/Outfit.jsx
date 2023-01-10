import axios from "axios";
import { useEffect, useState } from "react";

export function Outfit() {
  const [outfits, setOutfits] = useState([]);
  const [outfit, setOutfit] = useState([]);

  const handleIndexOutfits = () => {
    axios.get("http://localhost:3000/outfits.json").then((response) => {
      console.log(response.data);
      setOutfits(response.data);
    });
  };

  const handleDestroyOutfit = (outfit) => {
    console.log("handleDestroyOutfit", outfit);
    axios.delete(`http://localhost:3000/outfits/${outfit.id}.json`).then((response) => {
      setOutfits(outfits.filter((o) => o.id !== outfit.id));
    });
  };

  useEffect(handleIndexOutfits, []);

  return (
    <div className="grid grid-cols-1 h-screen w-screen">
      <div className="mt-5 sm:auto-cols-auto text-center block text-4xl font-black">Outfits</div>
      {localStorage.jwt === undefined ? (
        <>
          <p className="mt-3 text-xl text-center">Login to view items</p>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <div className="mt-5 flex justify-between gap-10 text-center">
              {outfits.map((outfit) => (
                <div key={outfit.id} className="">
                  <p className="text-xl font-bold mb-2">{outfit.name}</p>
                  <div className="block w-52 h-auto border-black border p-2 mb-5">
                    <p>
                      {outfit.items.map((item) => (
                        <div key={item.id} className="mt-1 mb-2">
                          <p>{item.name}</p>
                          <img src={item.img_url} />
                        </div>
                      ))}
                    </p>
                  </div>
                  <button className="rounded-md bg-black text-white w-20 mt-2 ml-2">Edit</button>
                  <button
                    className="rounded-md bg-black text-white w-20 mt-2 ml-2"
                    onClick={() => handleDestroyOutfit(outfit)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
