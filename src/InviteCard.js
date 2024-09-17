import React from 'react';
import './InviteCard.css';

import Button from "./Button";

function InviteCard() {
  return (
    <div className="invite-card">
      <div className="invite-card-content">
        <img src={require("./avatar-compressed.png")} alt="ESCO Agency" className="channel-logo" />
        <h1 className="channel-name">Антон Соляник</h1>
        <p className="channel-handle">@antonio_target</p>
        <p className="channel-description">
          grey traff
        </p>
          <Button className="channel-link" text="send message" link="tg://resolve?domain=antonio_target" type="msg" />
      </div>
    </div>
  );
}

export default InviteCard;
