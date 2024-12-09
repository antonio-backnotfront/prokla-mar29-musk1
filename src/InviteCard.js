import React from 'react';
import './InviteCard.css';

import Button from "./Button";

// бл ук пл
// https://t.me/+cJTe3xpfDUZjZDAy
// https://t.me/+D5JpzJPeWedlYTIy
// https://t.me/+cCF9kltJ95BkZGZi

// лит лат гер
// https://t.me/+dMg69bpsyRo2MzRi
// https://t.me/+VcovFCUD5r8wOTIy
// https://t.me/+dDxfzXBr-gU0MDIy



// кз
// https://t.me/+UeqXH_c9lhM3ZGJi
// https://t.me/+uUIIEA3apdMzMDgy
// https://t.me/+lcf34o0M6gBkMDIy

// tg://join?invite=lcf34o0M6gBkMDIy
// da

function InviteCard() {
  const queryParameters = new URLSearchParams(window.location.search)
  // const geo = queryParameters.get("geo")
  const ad = queryParameters.get("ad")

  let inviteLink = "";
  const links = ["https://t.me/+T0p2KpIudGYyY2Qx","https://t.me/+k0_3xmM_H7s5N2Ix","https://t.me/+N9CZaQwy6mJiMGQx","https://t.me/+6KOUFTRZG91lNmQx","https://t.me/+O9UrgdzuUpZhMGIx","https://t.me/+Lvi8jVySCvcwYTYx"]
  if (ad > 0 && ad <= 6) inviteLink = links[ad-1];
  else inviteLink = "https://t.me/+I5GpxeaBB9U4NDkx";
  
  console.log(inviteLink);
  
  return (
    <div className="invite-card">
      <div className="invite-card-content">
        <img src={require("./logo.jpg")} alt="ESCO Agency" className="channel-logo" />
        <h1 className="channel-name">⚜️Crypto | Number One⚜️</h1>
        <p className="channel-handle">128 members, 53 online</p>
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
