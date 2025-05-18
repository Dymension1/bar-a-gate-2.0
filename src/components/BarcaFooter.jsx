const BarcaFooter = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">BarçaFans</h2>
            <p className="text-blue-200">La pasión por el Barça en un solo lugar</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-red-300 transition">Términos</a>
            <a href="#" className="hover:text-red-300 transition">Privacidad</a>
            <a href="#" className="hover:text-red-300 transition">Contacto</a>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-200 text-sm">
          © {new Date().getFullYear()} BarçaFans. No afiliado al FC Barcelona.
        </div>
      </div>
    </footer>
  );
};

export default BarcaFooter;