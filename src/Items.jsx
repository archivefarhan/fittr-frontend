import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Items() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
      handleIndexCategories();
    });
  };

  const handleIndexCategories = () => {
    axios.get("http://localhost:3000/categories.json").then((response2) => {
      console.log(response2.data);
      setCategories(response2.data);
    });
  };

  useEffect(handleIndexItems, []);

  return (
    <div className="text-center w-screen h-auto min-h-screen">
      <p className="mt-10 text-4xl font-black text-center">Items</p>
      {localStorage.jwt === undefined ? (
        <>
          <p className="mt-3 text-xl">Login to view items</p>
        </>
      ) : (
        <>
          <Link to="/items/new" className="rounded-sm bg-black text-white w-full text-center mt-10">
            Add Item
          </Link>
          <br />
          <div className="flex justify-between p-5">
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
                      class="h-20 w-auto mx-auto items-center rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
                    />
                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium break-words">{item.name}</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-black"></span>

                      <p class="mt-0.5 opacity-50 sm:mt-0">{item.description}</p>
                    </div>
                    <a href={`/items/${item.id}`} className="rounded-xl bg-black text-white w-auto text-center mt-10">
                      Edit Item
                    </a>
                  </div>
                ))}
                <br />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
