import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div>
        <Image src="/about.jpg" width={500} height={500} />
      </div>
    </div>
  );
};

export default AboutPage;
