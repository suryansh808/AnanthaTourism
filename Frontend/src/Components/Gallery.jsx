

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <img
          src="src/assets/kumbh/sankalpapuja.png"
          alt="Sankalpa Puja"
          className="w-full h-auto rounded-xl object-cover shadow"
        />

        <img
          src="src/assets/kumbh/sadhu.png"
          alt="Sadhu Portrait"
          className="w-full h-auto rounded-xl object-cover shadow"
        />

        <img
          src="src/assets/kumbh/kumbhmela.png"
          alt="Kumbh Mela Divine Yatra"
          className="w-full h-auto rounded-xl object-cover shadow"
        />
      </div>
    </div>
  );
}
