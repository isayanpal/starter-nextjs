import React from "react";
import styles from "./singlePostPage.module.css";
import Image from "next/image";

const SinglePostpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.jpg" fill className={styles.img} alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/about.jpg"
            className={styles.avatar}
            width={50}
            height={50}
            alt=""
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Username</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.02.24</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          dolorum qui exercitationem eum expedita quos. Optio id placeat, magnam
          laboriosam error, fugiat officiis minima obcaecati quibusdam dolore
          similique doloremque omnis?
        </div>
      </div>
    </div>
  );
};

export default SinglePostpage;
