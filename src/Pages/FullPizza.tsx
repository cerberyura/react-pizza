import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const FullPizza = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const {data} = await axios.get('https://640a6cbc65d3a01f98fecb0f.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Помилка при полученні піци');
        navigate('/');
      }
    }
    fetchPizza();
  }, [id, navigate])

  if (!pizza) {
    return 'Загрузка...'
  }


  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="foto pizza"/>
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}₴</h4>
      <Link to={"/"}>
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>

    </div>
  )
}

export default FullPizza;