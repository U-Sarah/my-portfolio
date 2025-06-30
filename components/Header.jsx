import Logo from "./Logo.jsx";
import Socials from "./Socials.jsx";
import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet.jsx";
import NavLinks from "./NavLinks.jsx";

const Header = () => {
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6">
          {/* logo */}
          <Logo />
          {/* nav mobile */}
          <Sheet>
            <SheetTrigger className="cursor-pointer text-[30px] text-white ">
              {" "}
              <CiMenuFries />{" "}
            </SheetTrigger>

            <SheetContent
              className="bg-[#0d091a] border-0 flex flex-col justify-between items-center pt-16 pb-20"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  {" "}
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]" />
              <div>
                <button className="btn  bg-[#201837] mb-16">
                  <div className="flex items-center gap-3">
                    <span>Download CV</span>
                    <MdFileDownload className="text-xl " />
                  </div>
                </button>
                <Socials
                containerStyles="flex gap-4"
                  iconStyles="bg-[#5810ff] text-white hover:bg-[#4a0bde] transiton
                w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
