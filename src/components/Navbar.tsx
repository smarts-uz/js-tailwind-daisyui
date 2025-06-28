import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden hover:bg-base-200 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border">
            <li><Link href="/" className="hover:text-primary transition-colors duration-200">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors duration-200">About</Link></li>
            <li><Link href="/pricing" className="hover:text-primary transition-colors duration-200">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl font-bold tracking-tight hover:bg-base-200 transition-colors duration-200">
          <span className="text-primary">daisy</span>UI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><Link href="/" className="hover:text-primary transition-colors duration-200 font-medium">Home</Link></li>
          <li><Link href="/about" className="hover:text-primary transition-colors duration-200 font-medium">About</Link></li>
          <li><Link href="/pricing" className="hover:text-primary transition-colors duration-200 font-medium">Pricing</Link></li>
          <li><Link href="/contact" className="hover:text-primary transition-colors duration-200 font-medium">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary hover:btn-primary-focus transition-colors duration-200 shadow-lg">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;