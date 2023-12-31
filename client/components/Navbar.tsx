import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-black text-white md:bg-bgLight md:text-black fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* logo */}
                            <Link href="/">
                                <h2 className="text-2xl text-cyan-600 font-bold ">FarmDidi</h2>
                            </Link>
                            {/* hamburger button */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src="/close.svg" width={30} height={30} alt="logo" />
                                    ) : (
                                        <Image
                                            src="/hamburger-menu.svg"
                                            width={30}
                                            height={30}
                                            alt="logo"
                                            className="focus:border-none active:border-none"
                                        />
                                    )}
                                </button>
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
                                    <Image
                                        src='/scanner'
                                        width={40}
                                        height={40}
                                        alt="scan"
                                        className="focus:border-none active:border-none" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className="text-l md:text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-textLight border-textLight md:hover:underline transition duration-4000 md:hover:text-textLight md:hover:bg-transparent">
                                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                        ABOUT
                                    </Link>
                                </li>
                                <li className="text-l md:text-black py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-textLight border-textLight md:hover:underline transition duration-4000 md:hover:text-textLight md:hover:bg-transparent">
                                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                                        BLOGS
                                    </Link>
                                </li>
                                <li className="text-l md:text-black py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-textLight border-textLight md:hover:underline transition duration-4000 md:hover:text-textLight md:hover:bg-transparent">
                                    <Link href="/connect" onClick={() => setNavbar(!navbar)}>
                                        CONNECT
                                    </Link>
                                </li>
                                <li className="text-l md:text-black py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-textLight border-textLight md:hover:underline transition duration-4000 md:hover:text-textLight md:hover:bg-transparent">
                                    <Link href="/login" onClick={() => setNavbar(!navbar)}>
                                        Link Wallet
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;