import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
  return <h1>Привет! Добро пожаловать на главную страницу.</h1>
}

function About() {
  return <p>Это пример второй страницы для проверки роутинга.</p>
}

function NotFound() {
  return <p>Страница не найдена.</p>
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
