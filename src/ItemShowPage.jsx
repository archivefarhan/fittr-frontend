import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ItemShowPage() {
  const [item, setItem] = useState({});
  const params = useParams();

  const handleShowItem = () => {
    axios.get(`http://localhost:3000/items/${params.id}.json`).then((response) => {
      console.log(response.data);
      setItem(response.data);
    });
  };

  const handleDestoryItem = () => {
    axios.delete(`http://localhost:3000/items/${params.id}.json`).then((response) => {
      window.location.href = "/items";
    });
  };

  useEffect(handleShowItem, []);

  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-1 justify-center">
        <p className="text-xl font-bold">{item.name}</p>
        <img src={item.img_url} className="w-auto h-32" />
        <p>{item.description}</p>
      </div>
      <a href={`/items/${item.id}/edit`} className="rounded md bg-black text-white">
        Update Item
      </a>
      <button className="rounded md bg-black text-white" onClick={handleDestoryItem}>
        Delete Item
      </button>
    </div>
  );
}
