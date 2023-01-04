import { useState, useEffect } from "react";
import axios from "axios";

export function Closet() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  const handleIndexCategories = () => {
    axios.get("http://localhost:3000/categories.json").then((response2) => {
      console.log(response2.data);
      setCategories(response2.data);
    });
  };

  useEffect(handleIndexItems, []);

  useEffect(handleIndexCategories, []);

  return (
    <div className="text-center w-screen h-auto grid grid-cols-2">
      <div className="mt-10">
        <p className="text-center text-4xl font-black">Outfit</p>
        <p className="border border-black ml-5 mt-5 p-96"></p>
        <button className="rounded-full bg-black text-white w-1/5 mt-2">Save</button>
        <button className="rounded-full bg-black text-white w-1/5 ml-2 mt-2">Clear</button>
      </div>
      <div>
        <p className="mt-10 text-4xl font-black">Categories</p>
        <br />
        {categories.map((category) => (
          <div key={category.id} className="block">
            <p className="text-2xl font-bold italic">{category.name}</p>
            <br />
            {category.items.map((item) => (
              <div key={item.id} class="block">
                <br />
                <img
                  src={item.img_url}
                  class="h-56 w-auto mx-auto items-center rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
                />
                <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                  <strong class="font-medium">{item.name}</strong>

                  <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-black"></span>

                  <p class="mt-0.5 opacity-50 sm:mt-0">{item.description}</p>
                  <br />
                </div>
              </div>
            ))}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
