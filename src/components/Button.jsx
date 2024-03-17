const Button = ({ lable, imgURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button
      className={`flex transition duration-200 hover:bg-black justify-center items-center gap-2 px-7 py-3 leading-none rounded-full ${
        backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : "text-white main-color"
      } ${fullWidth && "w-full"}`}
    >
      {lable}

      {imgURL && <img src={imgURL} alt="Arrow Right" className="ml-2 rounded-full w-20 h-5" />}
    </button>
  );
};

export default Button;
