import React from "react";
import style from "./cardItem.module.css";

export default function CardItem({
  image,
  title,
  original_title,
  description,
  rt_score,
}) {
  return (
    <div className={style.card__item}>
      <div className={style.card__img}>
        <img src={image} alt={title} />
      </div>
      <div className={style.card__detail}>
        <div className={style.score}>
          <span className={style.rt__score}>{+rt_score / 10}</span>
        </div>
        <div className={style.description}>
          <h3>{original_title}</h3>
          <p>{description.split(' ').slice(0,50).join(' ').concat('...')}</p>
        </div>
      </div>
    </div>
  );
}
