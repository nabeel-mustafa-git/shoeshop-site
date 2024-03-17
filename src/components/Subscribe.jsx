import Button from "./Button";

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[55px] lg:max-w-md font-bold max-lg:text-center">
        Sign Up for <span className="text-main-color">Updates</span> & Newsletter
      </h3>
      <div className="flex justify-centers items-center lg:w-[50%] w-full p-1 border-gray-300 rounded-full pl-3 border-b-2 shadow-2xl">
        <input type="text" placeholder="subscribe@shoeshop.com" className="flex-1 border-none outline-none text-main-color text-lg text-slate-gray" />
        <Button lable="Sign Up" />
      </div>
    </section>
  );
};

export default Subscribe;
