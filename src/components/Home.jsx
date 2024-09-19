import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-8 w-full px-20 py-2 bg-[#E9E9E9]'>
      <h1 className='font-playfair text-[55px] text-center'>
        Your Home of Luxury & Comfort for{" "}
        <span className='text-primary'>Unforgettable</span> Stays
      </h1>
      <p className='font-montserrat text-justify w-1/2'>
        Discover ultimate comfort, and personalized service. Whether for
        relaxation or business, we ensure an unforgettable stay. Your perfect
        getaway awaits—book now for a memorable experience.
      </p>
      <div className='flex gap-6'>
        <Link
          to='/rooms'
          className='text-white bg-primary px-8 py-4 rounded-[20px]'
        >
          Book Now
        </Link>
        <Link
          to='/rooms'
          className='text-white bg-primary px-8 py-4 rounded-[20px]'
        >
          View Rooms
        </Link>
      </div>
      <img
        src='https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
        className='rounded-[32px]'
      />
    </div>
  );
};

export default Home;
