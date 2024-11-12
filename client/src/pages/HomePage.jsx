import { useQuery } from "@tanstack/react-query";
import { getAllTours } from "../services/toursServices";
import { PuffLoader } from "react-spinners";
import ToursComponent from "./../components/ToursComponents";

const HomePage = () => {
  const {
    isError,
    isPending,
    data: tours
  } = useQuery({
    queryKey: ["tours"],
    queryFn: getAllTours
  });

  console.log(tours);
  if (isPending) {
    return (
      <div className='grid min-h-screen pt-28'>
        <div className='mx-auto'>
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return <p>Something went wrong when fetching tours</p>;
  }

  return (
    <div className='flex'>
      <ToursComponent tours={tours} />
    </div>
  );
};

export default HomePage;
