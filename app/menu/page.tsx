import React from 'react';
import Link from 'next/link';

export default function MenuPage() {
  const RESERVATION_LINK = "/reservations";

  const menuCategories = [
    {
      category: "Dim Sum & Appetizers",
      tagline: "Delicate parcels of flavor, steamed to perfection.",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop",
      items: [
        { name: "Crystal Har Gow", detail: "Translucent shrimp dumplings with bamboo shoots and water chestnut." },
        { name: "Kurobuta Pork Siu Mai", detail: "Open-faced dumplings topped with wild fish roe." },
        { name: "Truffle Xiaolongbao", detail: "Delicate soup dumplings infused with black winter truffle." },
        { name: "Crispy Duck Rolls", detail: "Shredded confit duck with a spiced plum dipping sauce." },
        { name: "Sichuan Wontons", detail: "Hand-folded pork wontons in a fiery roasted chili oil broth." }
      ]
    },
   {
      category: "Signature Mains",
      tagline: "Time-honored recipes elevated with modern technique.",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop", 
      items: [
        { name: "Imperial Peking Duck", detail: "Carved tableside, served with handmade pancakes, cucumber, and hoisin." },
        { name: "Wagyu Black Pepper", detail: "Wok-seared A5 Wagyu cubes with crisp bell peppers and shallots." },
        { name: "Steamed Sea Bass", detail: "Whole Chilean sea bass with ginger, scallion, and superior soy broth." },
        { name: "Kung Pao Chicken", detail: "Spicy wok-tossed chicken with roasted peanuts and dried Tianjin chilies." },
        { name: "Mapo Tofu", detail: "Silken tofu simmered in a rich, numbing Sichuan peppercorn sauce." }
      ]
    },
    {
      category: "Rice & Noodles",
      tagline: "Wok-hei infused classics to complete your journey.",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
      items: [
        { name: "Yangtze Fried Rice", detail: "Premium Jasmine rice with Hokkaido scallop, shrimp, and egg yolk." },
        { name: "Dan Dan Noodles", detail: "Fresh wheat noodles in a spicy sesame and peanut broth." },
        { name: "Beef Chow Fun", detail: "Flat rice noodles wok-fried with tender beef slices and bean sprouts." },
        { name: "Lobster Longevity Noodles", detail: "Braised egg noodles crowned with butter-poached lobster tail." },
        { name: "Wild Mushroom Rice", detail: "Earthy shiitake and truffle essence with toasted pine nuts." }
      ]
    },
    {
      category: "Desserts & Teas",
      tagline: "A sweet conclusion and mindful digestion.",
      image: "https://images.unsplash.com/photo-1666278171136-a0dd491c439b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        { name: "Mango Pomelo Sago", detail: "Chilled mango purée with coconut milk and ruby grapefruit segments." },
        { name: "Golden Egg Tarts", detail: "Flaky pastry shells filled with a warm, silky egg custard." },
        { name: "Jasmine Dragon Pearls", detail: "Hand-rolled green tea infused with fresh night-blooming jasmine." },
        { name: "Aged Pu'erh Tea", detail: "Earthy, fermented dark tea traditionally served to aid digestion." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-amber-600/30 selection:text-amber-200 pt-24">
      
      {/* 1. Culinary Header */}
      <section className="pt-20 pb-20 md:pt-32 md:pb-32 px-6 text-center border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <span className="text-amber-500 text-[10px] md:text-xs tracking-[0.5em] font-bold uppercase mb-6 block">
            Culinary Excellence
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 italic tracking-tighter">
            The Menu
          </h1>
          <p className="text-gray-400 font-light leading-relaxed text-lg md:text-xl max-w-2xl mx-auto italic">
            "A curated selection of authentic provincial dishes, harmonizing premium ingredients with centuries of Eastern tradition."
          </p>
        </div>
      </section>

      {/* 2. Menu Listing - Alternating Editorial Layout */}
      <section className="py-20 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-32 md:gap-48">
          
          {menuCategories.map((cat, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-start`}
            >
              
              {/* Category Visual */}
              <div className="w-full lg:w-5/12">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900 shadow-2xl group border border-zinc-800">
                  <img 
                    src={cat.image} 
                    alt={cat.category} 
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                  />
                  {/* Subtle inner frame */}
                  <div className="absolute inset-0 border-[1px] border-amber-500/30 m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>

              {/* Category Details */}
              <div className="w-full lg:w-7/12 flex flex-col pt-4">
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 italic">
                  {cat.category}
                </h2>
                <p className="text-amber-500 text-[11px] tracking-[0.3em] uppercase font-bold mb-12">
                  {cat.tagline}
                </p>
                
                {/* Expanded Menu Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="group border-b border-zinc-800/50 pb-6">
                      <h3 className="text-lg font-serif text-gray-200 mb-2 group-hover:text-amber-500 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 font-light text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <Link 
                    href={RESERVATION_LINK}
                    className="inline-flex items-center text-white text-[10px] tracking-[0.4em] uppercase font-bold group hover:text-amber-500 transition-colors duration-300"
                  >
                    Reserve This Experience
                    <span className="ml-4 h-[1px] w-12 bg-amber-600 group-hover:w-20 transition-all duration-500"></span>
                  </Link>
                </div>
              </div>
              
            </div>
          ))}

        </div>
      </section>

      {/* 3. Luxury Call to Action */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 italic">
            Ready to dine with us?
          </h2>
          <p className="text-gray-400 font-light mb-12 text-sm md:text-base tracking-wide">
            Join us for an unforgettable journey through the flavors of the East.
          </p>
          <Link 
            href={RESERVATION_LINK}
            className="inline-block px-12 py-5 bg-amber-600 text-white text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-amber-500 transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.3)] rounded-sm hover:-translate-y-1"
          >
            Book a Table
          </Link>
        </div>
      </section>
      
    </main>
  );
}