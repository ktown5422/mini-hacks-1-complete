import Link from "next/link";

// Create heading component

const Header = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-white text-2xl font-bold" href="/">Movie Listings App</Link>
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-200 text-black p-2 pl-8 rounded-full focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <button className="bg-blue-700 text-white px-4 py-2 ml-4 rounded-full hover:bg-blue-600">Search</button>
                </div>
            </div>
        </nav>
    )
};

export default Header;