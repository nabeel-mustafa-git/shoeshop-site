import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center text-4xl font-bold">
        What Our <span className="text-main-color">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear geniune stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="mt-20 flex flex-wrap flex-1 justify-evenly items-center max-lg:flex-col  gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
