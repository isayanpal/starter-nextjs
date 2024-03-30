import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Heading Something</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          facilis autem eveniet cupiditate ipsam, voluptates id consequuntur
          accusantium obcaecati temporibus vitae minus, architecto ea quaerat
          aspernatur sunt asperiores iusto ratione.
        </p>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/about.jpg" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
