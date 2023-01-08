export function ItemUpdate(props) {
  return (
    <div>
      <p>{props.item.name}</p>
      <img src={props.item.img_url} />
      <p>{props.item.description}</p>
      <p>{props.item.category_id}</p>
      <form>
        <div>
          <input defaultValue="props.item.name" name="name" type="text" placeholder="Name" />
        </div>
        <div>
          <input defaultValue="props.item.img_url" name="img_url" type="text" placeholder="Image URL" />
        </div>
        <div>
          <input defaultValue="props.item.description" name="description" type="text" placeholder="Description" />
        </div>
        <button type="submit" className="rounded-full text-center text-white bg-black w-1/5">
          Update Item
        </button>
      </form>
    </div>
  );
}
