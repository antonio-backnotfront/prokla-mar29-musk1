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

function InviteCard() {
  const queryParameters = new URLSearchParams(window.location.search)
  const geo = queryParameters.get("geo")
  const ad = queryParameters.get("ad")

  let inviteLink = "";
  if (geo == "uk"){
    if (ad == "1"){
      inviteLink = "tg://join?invite=cJTe3xpfDUZjZDAy";
    } else if (ad == "2"){
      inviteLink = "tg://join?invite=D5JpzJPeWedlYTIy";
    } else{
      inviteLink = "tg://join?invite=cCF9kltJ95BkZGZi";
    }
  } else if (geo == "lit"){
    if (ad == "1"){
      inviteLink = "tg://join?invite=dMg69bpsyRo2MzRi";
    } else if (ad == "2"){
      inviteLink = "tg://join?invite=VcovFCUD5r8wOTIy";
    } else{
      inviteLink = "tg://join?invite=dDxfzXBr";
    }
  } else {
    if (ad == "1"){
      inviteLink = "tg://join?invite=UeqXH_c9lhM3ZGJi";
    } else if (ad == "2"){
      inviteLink = "tg://join?invite=uUIIEA3apdMzMDgy";
    } else{
      inviteLink = "tg://join?invite=lcf34o0M6gBkMDIy";
    }
  }
  
  console.log("geo = " + geo + ", ad = " + ad);
  console.log(inviteLink);
  
  return (
    <div className="invite-card">
      <div className="invite-card-content">
        <img src={require("./logo.jpg")} alt="ESCO Agency" className="channel-logo" />
        <h1 className="channel-name">Money Dealer</h1>
        <p className="channel-handle">3521 подписчиков</p>
        <p className="channel-description">
          Даю актуальные трейды и аналитику в торговле криптовалютой 📈
          ‎
          Полное ведение по миру криптовалюты 🌐, разбор стратегий, аналитика ...

@adam_deale
        </p>
          <Button className="channel-link" text="перейти на канал" link={inviteLink} type="msg" />
      </div>
    </div>
  );
}

export default InviteCard;
