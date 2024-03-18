import Button from "./Button";
import shoeImg from "../assests/images/shoe4.png";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10">We Provide You</span> Super{" "}
          <span className="text-main-color">Quality</span>
          <br />
          <span className="text-main-color">Nike </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched
          quality, innovating, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to details and exellence ensures your satisfaction.</p>
        <div className="mt-11">
          <Button lable="View Now" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoeImg} alt="shoe-image" width={570} className="object-contain"></img>
      </div>
    </section>
  );
};

export default SuperQuality;
