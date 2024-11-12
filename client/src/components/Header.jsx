import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  // const user = null;

  return (
    <header className='bg-zinc-800/90 px-12 py-8 flex justify-between'>
      <Link to={"/"}>
        <img src='/logo-white.png' alt='logo' className='w-16 ' />
      </Link>
      <ul className='hidden sm:flex gap-8 items-center'>
        <li>
          <Button className='bg-green-400/80 rounded-full px-8 uppercase hover:bg-green-400/80 hover:translate-y-[-1px] transition-all'>
            <Link to='/login'>Login</Link>
          </Button>
        </li>
        <li>
          <Button
            variant='secondary'
            className='rounded-full bg-inherit px-8 border text-slate-200 uppercase hover:bg-zinc-800/90 hover:border hover:translate-y-[-1px] transition-all'
          >
            <Link to='/sign-up'>Sign up</Link>
          </Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
