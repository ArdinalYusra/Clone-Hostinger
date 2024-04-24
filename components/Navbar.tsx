import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./ui/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 z-50 bg-white p-3 lg:px-10 lg:py-5 shadow-md">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-5">
          <Link href={"/"}>
            <Image
              src={"/assets/images/hostinger.png"}
              alt="Hostinger Logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="hidden lg:block">🏁 English</div>
        </div>
        <div className="hidden lg:flex gap-5 items-center">
          <Button>WordPress</Button>
          <Button>Website Builder</Button>
          <Button>Hosting</Button>
          <Button>Pro</Button>
          <Button>Domain</Button>
          <div>
            <button className="ring-2 ring-black px-3 py-2 font-semibold rounded-sm">
              Login
            </button>
          </div>
        </div>
        <div className="flex lg:hidden text-xl">
          <RxHamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
