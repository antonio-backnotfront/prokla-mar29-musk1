import React from 'react';
import './InviteCard.css';

import Button from "./Button";

function InviteCard() {
  const queryParameters = new URLSearchParams(window.location.search)
  // const geo = queryParameters.get("geo")
  const ad = queryParameters.get("ad");
  const type = queryParameters.get("type");

  let inviteLink = "tg://join?invite=";
  const links = ["T0p2KpIudGYyY2Qx","k0_3xmM_H7s5N2Ix","N9CZaQwy6mJiMGQx","6KOUFTRZG91lNmQx","O9UrgdzuUpZhMGIx","Lvi8jVySCvcwYTYx"];
  const linksEngagement = ["cbmg4po_OIczNThh","MZ5Lh9vq6xw2ZGNh"];
  console.log(type);
  if (ad > 0 && ad <= 6) {
    if (type === "en"){
      // 5 because the creos ad number >= 5
      inviteLink += linksEngagement[ad-5];
    } else  inviteLink += links[ad-1];
  } else inviteLink += "e5lXj1T0oVBlMzUx";
  
  console.log(inviteLink);
  
  return (
    <div className="invite-card">
      <div className="invite-card-content">
        <img src={require("./logo.jpg")} alt="ESCO Agency" className="channel-logo" />
        <h1 className="channel-name">⚜️Crypto | Number One⚜️</h1>
        <p className="channel-handle">135 members, 41 online</p>
        <p className="channel-description">
          💎Делимся результатами торговли, анализируем рынок и перспективные проекты.
        </p>
        <p className="channel-description">
          -Создаем уникальное сообщество единомышленников ... <strong>@laurine_999</strong>
        </p>
          <Button className="channel-link" text="перейти на канал" link={inviteLink} type="msg" />
      </div>
    </div>
  );
}

export default InviteCard;
