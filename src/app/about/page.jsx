import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Heading</h2>
        <h1>Something Something</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          qui molestiae sunt quos sint porro voluptas at, aliquam voluptatibus
          pariatur dolorum voluptatum amet doloribus blanditiis nisi. Adipisci
          incidunt velit facilis?
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.jpg" fill alt="" />
      </div>
    </div>
  );
};

export default AboutPage;
