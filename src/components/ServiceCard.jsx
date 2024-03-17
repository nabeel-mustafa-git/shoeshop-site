const ServiceCard = ({ imgURL, lable, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px]  max-sm:min-w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-10">
      <img src={imgURL} alt={lable} width={50} className="rounded-full" />
      <h3 className="mt-5 leading-normal font-bold text-2xl border-main-color w-fit  border-t-2">{lable}</h3>
      <p className="mt-3 break-words leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
