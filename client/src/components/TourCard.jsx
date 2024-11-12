import { CiMapPin, CiFlag1, CiCalendar, CiUser } from "react-icons/ci";

const TourCard = ({ tour }) => {
  return (
    <div className=' w-72 mb-12'>
      <div className='w-72 h-40  bg-gradient-to-tr from-green-200/50 to-green-200/30 relative mb-4 w-full'>
        <p className='absolute bottom-2 right-2 text-slate-100 bg-green-400/60  text-xl font-light uppercase w-40 text-center '>
          {tour.name}
        </p>
      </div>
      <div className='p-4'>
        <p className='font-bold uppercase text-slate-600/80 text-xs mb-2'>
          medium 7-day tour
        </p>
        <p className='text-sm text-slate-600/80'>{tour.summary}</p>
      </div>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <CiMapPin className='text-2xl text-green-600/50' />
        </div>
        <div>
          <CiFlag1 className='text-2xl text-green-600/50' />
        </div>
        <div>
          <CiCalendar className='text-2xl text-green-600/50' />
        </div>
        <div>
          <CiUser className='text-2xl text-green-600/50' />
        </div>
      </div>
    </div>
  );
};

export default TourCard;

{
  /* <img
  src={
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeK9fiKV7u1747EI-3_4fqgam67UZ5gta8A&s"
  }
  alt={tour.name}
/>; */
}
