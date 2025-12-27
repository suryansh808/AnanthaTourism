import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Travel Enthusiast",
    content:
      "Anantha Tourism made my dream vacation a reality! The attention to detail and personalized service were exceptional.",
    rating: 5,
    image: "/diverse-woman-profile.jpg",
  },
  {
    name: "Michael Chen",
    role: "Adventure Seeker",
    content:
      "The hiking package in the Alps was absolutely incredible. Worth every penny and more!",
    rating: 5,
    image: "/diverse-man-profile.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Luxury Traveler",
    content:
      "Professional team, amazing destinations, and unforgettable experiences. Highly recommend!",
    rating: 5,
    image: "/woman-glasses-profile.png",
  },
  {
    name: "David Martinez",
    role: "Family Planner",
    content:
      "Perfect for families! Our kids loved every moment and the guides were so knowledgeable.",
    rating: 5,
    image: "/smiling-man-profile.png",
  },
]

export default function Testimonials() {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            What Our Travelers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Thousands of satisfied travelers have experienced unforgettable journeys with us
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-blue-600/10 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-blue-600 text-blue-600"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 grow text-sm italic text-gray-800">
                “{testimonial.content}”
              </p>

              {/* Author */}
              <div className="mt-auto flex items-center gap-4 border-t border-gray-200 pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
