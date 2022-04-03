import React from "react";

interface PropType {
    title: string,
    amount: number,
    description: string,
};

/**
 * section component of accounts profile page
 * display one data each
 * called in profile page
 * @param param0 data of one transaction
 * @returns account section
 */
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