import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#FAFAFA]/90 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Left Side: Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <Link href="/preview/shop" className="text-[10px] md:text-xs tracking-[0.2em] text-stone-500 hover:text-stone-900 uppercase transition-colors">
              Shop
            </Link>
            <Link href="/preview/collections" className="text-[10px] md:text-xs tracking-[0.2em] text-stone-500 hover:text-stone-900 uppercase transition-colors">
              Collections
            </Link>
          </div>

          {/* Center: Brand Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link href="/preview" className="text-xl md:text-2xl font-serif tracking-[0.15em] text-stone-900 uppercase">
              Blackwood <span className="text-stone-400 font-light">&</span> Rose
            </Link>
          </div>

          {/* Right Side: Account & Cart */}
          <div className="flex items-center space-x-8">
            <button className="text-[10px] md:text-xs tracking-[0.2em] text-stone-500 hover:text-stone-900 uppercase transition-colors hidden md:block">
              Account
            </button>
            <button className="text-[10px] md:text-xs tracking-[0.2em] text-stone-900 uppercase hover:text-stone-500 transition-colors">
              Cart (0)
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}