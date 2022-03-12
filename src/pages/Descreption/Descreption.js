import React from 'react';
import './Descreption.css'
import DesciptionHead from './DescriptionHeader/DesciptionHead';
import { FaCouch } from 'react-icons/fa';
import Card from './Card/Card';
const cardItem = [
  {
    id: 1,
    icon: <FaCouch />,
    title: 'Furnished rooms',
    Desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut atque obcaecati, odit magnam rem dolor eveniet amet.'
  },
  {
    id: 2,
    icon: <FaCouch />,
    title: 'Furnished rooms',
    Desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut atque obcaecati, odit magnam rem dolor eveniet amet.'
  },
  {
    id: 3,
    icon: <FaCouch />,
    title: 'Furnished rooms',
    Desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut atque obcaecati, odit magnam rem dolor eveniet amet.'
  },
  {
    id: 4,
    icon: <FaCouch />,
    title: 'Furnished rooms',
    Desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut atque obcaecati, odit magnam rem dolor eveniet amet.'
  },
  {
    id: 5,
    icon: <FaCouch />,
    title: 'Furnished rooms',
    Desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut atque obcaecati, odit magnam rem dolor eveniet amet.'
  },
  {
    id: 6,
    icon: <FaCouch />,
    title: 'Furnished rooms',
    Desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut atque obcaecati, odit magnam rem dolor eveniet amet.'
  },
]

const Descreption = () => {
  return (
    <section className="descreption">
      <div className="container">
        <DesciptionHead />
        <div className="row">
          {
            cardItem.map(cardItem => <Card cardItem={cardItem} key={cardItem.id} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Descreption;