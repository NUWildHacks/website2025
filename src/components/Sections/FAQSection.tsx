import React from "react";
import "./FAQSection.scss";

interface IFAQSection { }

export const FAQSection: React.FC<IFAQSection> = () => {
  return <div className="wrapper-section">
    <div className="wrapper-content">
      <h1>FAQs</h1>
    </div>
  </div>;
};

export default FAQSection;
