import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroBanner from '../assets/hero_banner.png';

// Category images
import sareeImg from '../assets/saree.jfif';
import bridalImg from '../assets/bridal ware.jfif';
import kurthiImg from '../assets/kurthi.jfif';
import laceImg from '../assets/lace.jfif';
import accessImg from '../assets/access.jfif';
import lehangas from '../assets/shopping.webp';

// Boutique images
import boutique1Img from '../assets/boutique3.jfif';
import boutique2Img from '../assets/boutique2.jfif';
import boutique3Img from '../assets/boutique1.jfif';

// New Arrivals images
import new1Img from '../assets/new1.jfif';
import new2Img from '../assets/new2.jfif';
import new3Img from '../assets/new3.jfif';
import new4Img from '../assets/new4.jfif';


export default function CustomerHome() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Sarees', image: sareeImg },
    { name: 'Lehengas', image: lehangas },
    { name: 'Kurtis', image: kurthiImg },
    { name: 'Lace & Borders', image: laceImg },
    { name: 'Accessories', image: accessImg },
    { name: 'Bridal Wear', image: bridalImg },
  ];

  const boutiques = [
    { name: 'The Silk Road', category: 'Traditional', rating: 4.9, image: boutique1Img, desc: 'Specializing in hand-woven heritage silks.' },
    { name: 'Modern Muse', category: 'Contemporary', rating: 4.8, image: boutique2Img, desc: 'Contemporary designs for the modern woman.' },
    { name: 'Artisan Loft', category: 'Bespoke', rating: 5.0, image: boutique3Img, desc: 'Custom-tailored masterpieces using rare fabrics.' },
  ];

  const products = [
    { name: 'Aurora Silk Gown', price: '$420', image: new1Img, tag: 'Customizable' },
    { name: 'Linen Muse Set', price: '$280', image: new2Img, tag: 'New Arrival' },
    { name: 'Gilded Heritage Necklace', price: '$850', image: new3Img, tag: 'Premium' },
    { name: 'Structure Wool Coat', price: '$560', image: new4Img, tag: 'Customizable' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#333333]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="text-2xl font-bold text-[#E91E63] tracking-tight uppercase">Maison</div>
          <div className="hidden lg:flex relative w-96">
            <input
              type="text"
              placeholder="Search boutiques, outfits, lace, accessories..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-[#E91E63]/20 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-gray-600">
          <button className="hover:text-[#E91E63] transition-colors relative">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            <span className="absolute -top-1 -right-1 bg-[#E91E63] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </button>
          <button className="hover:text-[#E91E63] transition-colors relative">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            <span className="absolute -top-1 -right-1 bg-[#E91E63] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">1</span>
          </button>
          <button className="hover:text-[#E91E63] transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
          </button>
          <button className="hover:text-[#E91E63] transition-colors" onClick={() => navigate('/account')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img src={heroBanner} alt="Hero Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center px-12">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Discover Boutique Fashion Designed for You</h1>
            <p className="text-lg mb-10 opacity-90 leading-relaxed">Experience the art of outfit customization and explore curated boutiques from around the globe. Your signature style starts here.</p>
            <div className="flex space-x-4">
              <button className="bg-[#E91E63] hover:bg-[#D81B60] px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#E91E63]/30">Explore Boutiques</button>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-8 py-4 rounded-xl font-bold transition-all border border-white/40">View Collection</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-12 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
            <p className="text-gray-500">Curated selections for every occasion</p>
          </div>
          <div className="bg-[#E91E63] p-2 rounded-xl text-white cursor-pointer hover:scale-105 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer text-center">
              <div className="relative aspect-square rounded-full overflow-hidden mb-4 shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
              </div>
              <p className="font-bold text-sm text-gray-700 uppercase tracking-wide group-hover:text-[#E91E63] transition-colors">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Boutiques */}
      <section className="bg-white px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Curated Boutiques</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Explore unique collections from master designers across the globe.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {boutiques.map((btq, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all group">
              <div className="relative h-64">
                <img src={btq.image} alt={btq.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{btq.category}</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{btq.name}</h3>
                  <div className="flex items-center text-sm font-bold text-[#C8A96A]">
                    <svg className="mr-1 fill-[#C8A96A]" width="14" height="14" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    {btq.rating}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">{btq.desc}</p>
                <button className="w-full py-4 rounded-xl border border-gray-100 font-bold text-gray-700 hover:bg-[#E91E63] hover:text-white hover:border-[#E91E63] transition-all">View Boutique</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="px-12 py-24">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
            <p className="text-gray-500">The latest pieces from our top boutiques</p>
          </div>
          <button className="text-[#E91E63] font-bold flex items-center group">
            View All <svg className="ml-2 group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((prod, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-sm">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:text-[#E91E63] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                </div>
                <div className="absolute bottom-4 left-4 bg-[#006400] text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest">{prod.tag}</div>
              </div>
              <h4 className="font-medium text-gray-800 mb-1 group-hover:text-[#E91E63] transition-colors">{prod.name}</h4>
              <p className="text-[#E91E63] font-bold text-lg">{prod.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDF2F4] px-12 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold text-[#E91E63] mb-6 tracking-tight uppercase">Maison</div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              © 2024 MAISON Boutique. Editorial curation for the discerning eye. Redefining the luxury boutique experience.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#E91E63]">Explore</h5>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-[#E91E63] cursor-pointer transition-colors">The Collection</li>
              <li className="hover:text-[#E91E63] cursor-pointer transition-colors">Boutique Directory</li>
              <li className="hover:text-[#E91E63] cursor-pointer transition-colors">Customization Services</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#E91E63]">Company</h5>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-[#E91E63] cursor-pointer transition-colors">Sustainability</li>
              <li className="hover:text-[#E91E63] cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-[#E91E63] cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#E91E63]">Newsletter</h5>
            <div className="flex">
              <input type="email" placeholder="Email address" className="flex-1 px-4 py-3 rounded-l-xl outline-none text-sm border border-gray-200" />
              <button className="bg-[#E91E63] text-white px-6 rounded-r-xl font-bold text-sm hover:bg-[#D81B60] transition-colors uppercase">Join</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat */}
      <button className="fixed bottom-8 right-8 bg-[#E91E63] text-white p-5 rounded-2xl shadow-2xl shadow-[#E91E63]/40 hover:scale-110 active:scale-95 transition-all z-50">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
      </button>
    </div>
  );
}
