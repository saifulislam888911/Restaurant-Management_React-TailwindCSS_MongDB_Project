const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="" />
      </figure>

      <p className="absolute text-white bg-slate-900 rounded right-0 mt-4 mr-4 px-4">
        ${price}
      </p>

      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>

        <p>{recipe}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-outline text-amber-600  bg-slate-100 border-0 border-b-4 border-orange-400 hover:bg-black hover:text-white mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
