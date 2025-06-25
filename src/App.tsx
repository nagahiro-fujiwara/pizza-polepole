import './App.css'
import Header from './components/Header';
import Menu from './components/Menu';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>薪窯ピザ POLEPOLE | 西条・東広島のランチ・カフェ・ピザ</title>
        <meta name="description" content="東広島・西条でランチやカフェにおすすめの薪窯ピザPOLEPOLE。地元食材・自家製生地・本格ナポリピザ。おしゃれな店内でゆっくり過ごせる人気店。テイクアウトもOK。" />
        <meta name="keywords" content="西条, 東広島, ピザ, ランチ, カフェ, 薪窯, ナポリピザ, テイクアウト, おしゃれ, 人気, グルメ, イタリアン, ディナー, ファミリー, 女子会, デート, 地元食材, 自家製, POLEPOLE, ポレポレ, サイジョウ, Saijo, pizza, lunch, cafe, takeout, gourmet, restaurant" />
        <meta property="og:title" content="薪窯ピザ POLEPOLE | 西条・東広島のランチ・カフェ・ピザ" />
        <meta property="og:description" content="東広島・西条でランチやカフェにおすすめの薪窯ピザPOLEPOLE。地元食材・自家製生地・本格ナポリピザ。おしゃれな店内でゆっくり過ごせる人気店。テイクアウトもOK。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pizzapolepole.com/" />
        <meta property="og:image" content="/images/Kama.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="薪窯ピザ POLEPOLE | 西条・東広島のランチ・カフェ・ピザ" />
        <meta name="twitter:description" content="東広島・西条でランチやカフェにおすすめの薪窯ピザPOLEPOLE。地元食材・自家製生地・本格ナポリピザ。おしゃれな店内でゆっくり過ごせる人気店。テイクアウトもOK。" />
        <meta name="twitter:image" content="/images/Kama.jpg" />
      </Helmet>

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
            Pizza PolePoleは、小さなピザ屋です。
            厳選された食材と伝統的な製法で、最高の味をお届けします。
          </p>
        </section>
      </main>

      <footer id="contact" className="fade-in">
        <p>&copy; 2025 Pizza PolePole. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
