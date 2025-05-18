const BarcaNewsCard = ({ title, date, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-48 bg-blue-800"></div>
      <div className="p-6">
        <span className="text-sm text-gray-500">{date}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <button className="mt-4 text-blue-800 font-semibold hover:text-blue-600 transition">
          Leer más →
        </button>
      </div>
    </div>
  );
};

export default BarcaNewsCard;