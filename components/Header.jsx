import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-primary ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold text-primary">Derrick.</h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* mobile nav and hire me button*/}
        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
