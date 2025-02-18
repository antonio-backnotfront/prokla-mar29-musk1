/* eslint-disable no-unused-vars */
import React from 'react';
import './InviteCard.css';

import Button from "./Button";

function InviteCard() {
  const queryParameters = new URLSearchParams(window.location.search)
  // const geo = queryParameters.get("geo")

  const link = "tg://join?invite=1k-mh6bPIqE2MDMy";
  
  return (
    <div className="invite-card">
      <div className="invite-card-content">
        <img src={require("./logo.jpg")} alt="ESCO Agency" className="channel-logo" />
        <h1 className="channel-name">TashExchange USDT 🇺🇿💸</h1>
        <p className="channel-handle">1 108 subscribers</p>
        <p className="channel-description">
          Обмен криптовалют на наличные в Ташкенте!
        </p>
        <ul>
          <li>💰 Доплачиваем +2% за ваш тезер</li>
          <li>👌🏻 Без верификации и скрытой комиссии</li>
        </ul>
        <p className="channel-description">
          Менеджер: <strong>@tashexchange_manager</strong>
        </p>
          <Button className="channel-link" text="перейти на канал" link={link} type="msg" />
      </div>
    </div>
  );
}

export default InviteCard;
