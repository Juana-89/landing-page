import { RiShoppingBag3Line } from "react-icons/ri";

const Header = () => {
    return(
        <header className="flex items-center w-full p-4">
            <div className="bg-red-300 w-1/6 text center">
            <RiShoppingBag3Line/>
            <h1 className="text font-bold">Star </h1>
            </div>
            <nav className="bg-red-600 flex-1">
            <h1>nav</h1>
            </nav>
        </header>
    )
}
export default Header