import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function ItemUpdate() {
  const [item, setItem] = useState({});
  const params = useParams();

  const handleShowItem = () => {
    axios.get(`http://localhost:3000/items/${params.id}.json`).then((response) => {
      console.log(response.data);
      setItem(response.data);
    });
  };

  const handleUpdateItem = (id, params, successCallback) => {
    console.log("handleUpdateItem", params);
    axios.patch(`http://localhost:3000/items/${id}.json`, params).then((response) => {
      window.location.href = "/items";
      successCallback();
    });
  };

  useEffect(handleShowItem, []);

  return (
    <div className="w-screen h-auto min-h-screen">
      <div className="grid grid-cols-1 place-items-center mx-auto">
        <p className="mb-2 font-black text-2xl">{item.name}</p>
        <img src={item.img_url} className="w-auto h-96" />
      </div>
      <form className="grid grid-cols-1 place-items-center mt-5">
        <div>
          <input
            defaultValue={item.name}
            name="name"
            type="text"
            placeholder="Name"
            className="w-96 rounded-xl border border-black mb-2"
          />
        </div>
        <div>
          <input
            defaultValue={item.img_url}
            name="img_url"
            type="text"
            placeholder="Image URL"
            className="w-96 rounded-xl border border-black mb-2"
          />
        </div>
        <div>
          <input
            defaultValue={item.description}
            name="description"
            type="text"
            placeholder="Description"
            className="w-96 rounded-xl border border-black mb-2"
          />
        </div>
        <button
          onClick={handleUpdateItem}
          type="submit"
          className="mt-2 p-1 rounded-full text-center text-white bg-black w-28 "
        >
          Update Item
        </button>
      </form>
    </div>
  );
}
