import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-black py-4 mb-8 bg-white">{/*sticky is used to freeze the navbar to the top of the screen*/}
            <div className="container mx-auto px-5 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold font-serif font-size-2xl">
                    PORTFOLIO
                </Link>
                <ul className="flex gap-6">
                    <li>
                        <Link href="/" className="nav-item-bounce font-serif">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="nav-item-bounce font-serif">About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="nav-item-bounce font-serif">Contact</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="nav-item-bounce font-serif">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}