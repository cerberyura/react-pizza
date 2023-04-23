import styles from './NotFoundBlock.module.scss'
import React from "react";
const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
    <h1>
      <span> &#129396;</span>
      <br/>
      Нічого не знайдено
    </h1>
    <p className={styles.description}>Нажаль дана сторінка відсутня в інтернет магазині</p>
  </div>)
}

export default NotFoundBlock;