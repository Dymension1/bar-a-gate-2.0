import BarcaHeader from './components/BarcaHeader';
import BarcaHero from './components/BarcaHero';
import BarcaNewsCard from './components/BarcaNewsCard';
import BarcaMatchSchedule from './components/BarcaMatchSchedule';
import BarcaLegends from './components/BarcaLegends';
import BarcaFooter from './components/BarcaFooter';

const App = () => {
  const news = [
    {
      title: 'El Barça gana el clásico',
      date: '2023-05-10',
      excerpt: 'Un hat-trick de Lewandowski lleva al Barça a la victoria en el Camp Nou.'
    },
    {
      title: 'Nuevo fichaje para la próxima temporada',
      date: '2023-05-05',
      excerpt: 'El club anuncia el fichaje de un prometedor joven talento.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BarcaHeader />
      <main className="flex-grow">
        <BarcaHero />
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Últimas Noticias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {news.map((item, index) => (
                <BarcaNewsCard 
                  key={index}
                  title={item.title}
                  date={item.date}
                  excerpt={item.excerpt}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BarcaMatchSchedule />
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-blue-900">Clasificación</h2>
                <p className="text-gray-600">Próximamente la tabla de posiciones...</p>
              </div>
            </div>
          </div>
        </section>
        <BarcaLegends />
      </main>
      <BarcaFooter />
    </div>
  );
};

export default App;

// DONE