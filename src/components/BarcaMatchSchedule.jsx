const BarcaMatchSchedule = () => {
  const matches = [
    { date: '2023-05-15', opponent: 'Real Madrid', competition: 'La Liga', home: false },
    { date: '2023-05-22', opponent: 'Atlético Madrid', competition: 'La Liga', home: true },
    { date: '2023-05-30', opponent: 'Sevilla', competition: 'Copa del Rey', home: false },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Próximos Partidos</h2>
      <div className="space-y-4">
        {matches.map((match, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{match.date}</p>
                <h3 className="text-lg font-semibold">
                  {match.home ? 'FC Barcelona vs ' : ''}{match.opponent}
                  {!match.home ? ' vs FC Barcelona' : ''}
                </h3>
                <p className="text-sm text-gray-600">{match.competition}</p>
              </div>
              <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarcaMatchSchedule;