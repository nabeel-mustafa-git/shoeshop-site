import star from "../assests/icons/star.png";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex max-sm:items-center flex-1 flex-col w-full">
      <img src={imgURL} alt="image_" className="w-[250px] bg-dark rounded-2xl p-5"></img>
      <div className="p-0 m-0 w-fit h-">
        <div className="mt-8 flex items-center justify-start gap-2.5">
          <img src={star} alt="star" width={24} height={24}></img>
          <p className="text-slate-400">{rating}</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold">{name}</h3>
        <p className="mt-2 font-semibold text-main-color leading-normal text-xl">{price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
