import { MapPin } from "lucide-react"

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    description: "White-washed buildings and breathtaking sunsets",
    image: "https://images.unsplash.com/photo-1708685041029-36a3783e93ee?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Caldera Views", "Wine Tasting", "Beach Clubs"],
  },
  {
    name: "Kyoto",
    country: "Japan",
    description: "Ancient temples and serene bamboo forests",
    image: "https://images.unsplash.com/photo-1708685041029-36a3783e93ee?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Temples", "Gardens", "Tea Ceremony"],
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    description: "Mystical Incan citadel high in the mountains",
    image: "https://images.unsplash.com/photo-1708685041029-36a3783e93ee?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Hiking", "History", "Photography"],
  },
  {
    name: "Dubai",
    country: "UAE",
    description: "Modern luxury meets desert beauty",
    image: "https://images.unsplash.com/photo-1708685041029-36a3783e93ee?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Luxury Shopping", "Desert Safari", "Modern Architecture"],
  },
]

export default function Destinations() {
  return (
    <section id="destinations" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Featured Destinations
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore the world’s most sought-after travel destinations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {destinations.map(destination => (
            <div
              key={destination.name}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-blue-600/10 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/50" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin size={20} />
                    <span className="text-sm font-semibold">
                      {destination.country}
                    </span>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-100">
                    {destination.description}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map(highlight => (
                    <span
                      key={highlight}
                      className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-[#3F2455] transition hover:bg-blue-600/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
