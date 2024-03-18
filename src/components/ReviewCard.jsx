import star from "../assests/icons/star.png";

const ReviewCard = ({ imgURL, name, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={imgURL} alt={name} className="rounded-full h-[100px] w-[100px] object-cover" />
      <p className="text-center max-w-sm mt-6 info-text">{feedback}</p>
      <div className="mt-3 flex justify-center">
        <img src={star} alt="image_" width={24} height={24} />
        <p className="pl-2 text-slate-gray">{rating}</p>
      </div>
      <p className="mt-1 text-center text-2xl font-bold">{name}</p>
    </div>
  );
};

export default ReviewCard;
