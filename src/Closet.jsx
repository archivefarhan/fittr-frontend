import { useState, useEffect } from "react";
import axios from "axios";

export function Closet() {
  const [items, setItems] = useState({});
  const [categories, setCategories] = useState({});

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
    <div className="text-center">
      <p>Category</p>
      <br />
      {/* Tops = categories_id 1 */}
      <p>{categories[0].name}</p>
      <br />
      {/* Bottoms = categories_id 2 */}
      <p>{categories[1].name}</p>
      <br />
      {/* Outterwear = categories_id 3 */}
      <p>{categories[2].name}</p>
      <br />
      {/* Footwear = categories_id 4 */}
      <p>{categories[3].name}</p>
      <br />
      {/* Tailoring = categories_id 5 */}
      <p>{categories[4].name}</p>
      <br />
      {/* Accessories = categories_id 6 */}
      <p>{categories[5].name}</p>
      <br />
    </div>
  );
}
