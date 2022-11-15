import React from 'react'
import CardItem from '../Card-Item/Card-Item'
import style from './cardList.module.css'

export default function CardList({movies}) {
  return (
    <div className={style.card__list}>
      {movies.map(item => <CardItem key={item.id} {...item} />)}
    </div>
  )
}
