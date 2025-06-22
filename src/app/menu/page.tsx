import styles from "../page.module.css";

const menu = [
  { name: "マルゲリータ", desc: "トマト・モッツァレラ・バジルの王道", price: "¥1,200" },
  { name: "クワトロフォルマッジ", desc: "4種チーズの濃厚ピザ", price: "¥1,500" },
  { name: "季節の野菜ピザ", desc: "地元野菜たっぷり", price: "¥1,400" },
  { name: "自家製レモネード", desc: "爽やかな手作りレモネード", price: "¥500" },
  { name: "コーヒー", desc: "こだわりの豆を使用", price: "¥400" },
];

export default function Menu() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>メニュー</h1>
        <ul style={{ padding: 0, listStyle: "none", maxWidth: 400 }}>
          {menu.map((item) => (
            <li key={item.name} style={{ marginBottom: 24, background: "#e6f4ea", borderRadius: 12, padding: 16 }}>
              <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#357a38" }}>{item.name}</div>
              <div style={{ color: "#4e944f", marginBottom: 4 }}>{item.desc}</div>
              <div style={{ color: "#226c2a", fontWeight: 500 }}>{item.price}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
