import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900">
      <header className="p-6 shadow-md bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">partnerstunt.ch</h1>
          <nav className="space-x-4">
            <a href="#what" className="hover:underline">Was ist PS?</a>
            <a href="#places" className="hover:underline">Orte</a>
            <a href="#events" className="hover:underline">Events</a>
            <a href="#workshops" className="hover:underline">Workshops</a>
            <a href="#about" className="hover:underline">Über uns</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-24">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Finde Partnerstunt-Trainings in der Schweiz 🇨🇭</h2>
          <p className="text-lg text-gray-600">Du willst fliegen, basen oder einfach trainieren? partnerstunt.ch hilft dir, Orte, Events und Leute zu finden!</p>
        </section>

        <section id="what" className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600">🤸‍♀️ Was ist Partnerstunt?</h3>
          <p>
            Partnerstunt (PS) ist die Kunst, eine Person (Flyer) durch eine andere Person (Base) zu heben, zu werfen und zu fangen.
            Es ist Teil des Cheerleadings und kann sowohl im Team als auch als Duo trainiert werden.
          </p>
        </section>

        <section id="places" className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600">📍 Orte zum Trainieren</h3>
          <p>Wir bauen eine Karte mit Hallen, Gyms, Open Gyms und Teams, wo du PS trainieren kannst.</p>
          <p className="italic text-sm">Coming soon: interaktive Karte mit Spots 🗺️</p>
        </section>

        <section id="events" className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600">🎉 Events & Sessions</h3>
          <ul className="list-disc list-inside">
            <li>Offene Trainings</li>
            <li>Stunt-Sessions</li>
            <li>PS in deiner Region</li>
          </ul>
        </section>

        <section id="workshops" className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600">📚 Workshops</h3>
          <p>Von Beginner bis Elite – hier findest du Workshops mit Top-Coaches aus der Schweiz & international.</p>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-600">Kontakt</h2>
          <p className="mt-2 text-gray-700">
            Bei Fragen oder Interesse an Partnerstunt-Events, melde dich gerne bei uns:
          </p>
          <p className="mt-4 font-mono text-blue-500">
            <a href="mailto:swisspartnerstunt@gmail.com">swisspartnerstunt@gmail.com</a>
          </p>
        </section>

        <section id="about" className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600">🤝 Über den Verein</h3>
          <p>
            Partnerstunt Schweiz ist ein unabhängiger Verein, der die PS-Community verbindet. 
            Wir organisieren Trainings, bieten Plattformen zur Vernetzung und fördern das Wachstum des Partnerstunts in der Schweiz.
          </p>
        </section>
      </main>

      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} partnerstunt.ch – Mit ❤️ aus der Community
      </footer>
    </div>
  )
}

export default App
