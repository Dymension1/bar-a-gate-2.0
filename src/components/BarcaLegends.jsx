const BarcaLegends = () => {
  const legends = [
    { name: 'Lionel Messi', position: 'Delantero', years: '2004-2021' },
    { name: 'Xavi Hernández', position: 'Centrocampista', years: '1998-2015' },
    { name: 'Andrés Iniesta', position: 'Centrocampista', years: '2002-2018' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Ídolos del Barça</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {legends.map((legend, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-40 w-40 bg-blue-800 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">{legend.name}</h3>
              <p className="text-gray-600">{legend.position}</p>
              <p className="text-sm text-gray-500 mt-2">{legend.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarcaLegends;