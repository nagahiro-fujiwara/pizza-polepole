import './App.css'
import Header from './components/Header';
import Menu from './components/Menu';

const pizzaMenu = [
  {
    name: 'マルゲリータ',
    description: 'トマト、モッツァレラ、バジルのクラシックな味わい。',
    price: 1200,
    image: '/images/pizza-margherita.jpg',
  },
  {
    name: 'クアトロフォルマッジ',
    description: '4種のチーズを贅沢に使用。ハチミツをかけてどうぞ。',
    price: 1500,
    image: '/images/pizza-quattro.jpg',
  },
  {
    name: 'ペパロニ',
    description: 'スパイシーなペパロニがたっぷり乗ったアメリカンスタイル。',
    price: 1400,
    image: '/images/pizza-pepperoni.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section className="hero">
          <h2>最高の石窯ピザを、あなたに。</h2>
          <p>一枚一枚、心を込めて焼き上げています。</p>
        </section>

        <Menu pizzas={pizzaMenu} />

        <section id="about" className="about fade-in">
          <h2>About Us</h2>
          <p>
            Pizza PolePoleは、本格的なナポリピッツァを提供する小さなピザ屋です。
            厳選された食材と伝統的な製法で、最高の味をお届けします。
          </p>
        </section>
      </main>

      <footer id="contact" className="fade-in">
        <p>&copy; 2024 Pizza PolePole. All Rights Reserved.</p>
        <p>お問い合わせ: 03-1234-5678</p>
      </footer>
    </div>
  )
}

export default App
