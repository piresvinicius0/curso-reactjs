import Image from "next/image";
import styles from "./page.module.css";
import Tabuleiro from "./components/tabuleiro/Tabuleiro"; // Assuming Casa component is defined in Casa.tsx

export default function Home() {
  return (
    <main className={styles.main}>
      <Tabuleiro />
    </main>
  );
}
