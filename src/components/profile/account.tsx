import React, { useState } from "react";

interface PropType {
    title: String,
    amount: Number,
    description: String,
};

export const Account: React.FC<PropType> = ({title, amount, description}) : JSX.Element => {

    return <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
}