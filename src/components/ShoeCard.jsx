const ShoeCard = ({ imgURL, changeShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL) {
      changeShoeImg(imgURL);
      console.log(bigShoeImg);
      console.log(imgURL);
    }
  };
  return (
    <div
      className={`
        ${bigShoeImg === imgURL ? "border-main-color" : "border-transparent"}
        border-2 rounded-xl cursor-pointer max-sm:flex-1 relative z-10
        `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-dark sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL} alt="shoe collection" width={127} className="object-contain"></img>
      </div>
    </div>
  );
};

export default ShoeCard;
