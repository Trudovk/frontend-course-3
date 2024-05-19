import React from "react";

export interface IUniversity {
  name: string;
  country: string;
  web_pages: string[];
}

interface ICardUniversityProps {
  data: IUniversity;
  key: number;
}

const CardUniversity: React.FC<ICardUniversityProps> = ({ data, key }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.country}</p>
      <p>{data.web_pages[0]}</p>
    </div>
  );
};

export default CardUniversity;
