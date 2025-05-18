const BarcaHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-red-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Visca el Barça!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          El hogar digital de los fans del mejor equipo del mundo
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Únete a la comunidad
        </button>
      </div>
    </section>
  );
};

export default BarcaHero;