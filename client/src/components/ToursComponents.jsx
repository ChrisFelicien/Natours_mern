import TourCard from "./TourCard";

const ToursComponents = ({ tours }) => {
  return (
    <div className='min-h-screen py-24  px-24 flex flex-wrap gap-4 overflow-hidden '>
      {tours.map((tour) => (
        <TourCard key={tour._id} tour={tour} />
      ))}
    </div>
  );
};

export default ToursComponents;
