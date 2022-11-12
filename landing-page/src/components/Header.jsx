import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import image from "../assets/banner.png";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About Us", href: "#", current: true },
  { name: "Services", href: "#", current: true },
  { name: "Testimonials", href: "#", current: true },
  { name: "Contact", href: "#", current: true },
  { name: "Blog", href: "#", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    // <header className='flex items-center mt-2' >
    //     <div className='bg-transparent w-1/6 text center'>
    //     <img class='w-64' src={image} alt='Banner'/>
    //     </div>
    //     <nav className='flex sm:justify-center space-x-4'>
    //     <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>Home</h1></a>
    //     <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>About us</h1></a>
    //     <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>Services</h1></a>
    //     <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>Testimonials</h1></a>
    //     <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>Contact</h1></a>
    //     <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>Blog</h1></a>

    //     </nav>
    // </header>

    <Disclosure as="nav" className="bg-white-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="bg-transparent w-1/6 text center">
                <img className="w-64" src={image} alt="Banner" />
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white-[#4A678C] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-[#012340] hover:bg-[#fff] hover:text-[#5096F2]"
                            : "text-[#012340]",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-[#5096F2]">
            <div className="space-y-1 px-2 pt-2 pb-3 bg-[#012340]">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-[#ffff] hover:bg-[#5096F2]"
                      : "text-gray-300 hover:bg-gray-700 hover:text-[#5096F2]",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Header;
