/* eslint-disable no-unused-vars */
import React from 'react';
import './InviteCard.css';

import Button from "./Button";

function InviteCard() {
  const queryParameters = new URLSearchParams(window.location.search)
  // const geo = queryParameters.get("geo")

  const link1 = "tg://join?invite=wv1kjINizBxkYmZi";
  const link2 = "tg://join?invite=FBsrOn7O9_BjMjhi";
  const link3 = "tg://join?invite=0LWkZAD1saU4ZjZi";
  const link4 = "tg://join?invite=VUVruJ4UhnI4NjEy";
  
  return (
    <div className="invite-card">
      <div className="invite-card-content">
        <img src={require("./logo.jpg")} alt="ESCO Agency" className="channel-logo" />
        <h1 className="channel-name">Trust Exchange USDT 🇪🇺</h1>
        <p className="channel-handle">1 003 subscribers</p>
        <p className="channel-description">
          Обмен криптовалют на наличные по всей Европе
        </p>
        <ul>
          <li>✔️Без верификации</li>
          <li>✔️Без скрытой комиссии!</li>
          <li>♻️Доплачиваем +2% за ваш тезер</li>
        </ul>
        <p className="channel-description">
          📧Менеджер: <strong>@trustexchange_mngr</strong>
        </p>
          <Button className="channel-link" text="перейти на канал" link={link4} type="msg" />
      </div>
    </div>
  );
}

export default InviteCard;
