import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const menu = ["Home", "Rooms", "Dining", "SPA", "Events", "Contact Us"];

  return (
    <div className='flex justify-between items-center w-full px-20 py-2 bg-white'>
      <div>
        <Link
          to='/'
          className='font-montserrat font-semibold text-[28px]'
        >
          LuxeHaven
        </Link>
      </div>
      <nav className='flex items-center gap-4'>
        {menu.map((item) => {
          return (
            <NavLink
              key={item}
              to={`${item}`}
              className={(active) =>
                active
                  ? "text-primary font-montserrat font-bold text-lg"
                  : "#141414 font-montserrat"
              }
            >
              {item}
            </NavLink>
          );
        })}
      </nav>
      <div className=''>
        <Link
          to='/signup'
          className='bg-primary text-white px-4 py-2 rounded-3xl'
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
