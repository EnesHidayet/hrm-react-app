import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CompanyCart from "../molekul/CompanyCart.tsx";

interface Company {
  index: number;
  sirketAdi: string;
  yoneticiAdi: string;
  yoneticiMail: string;
  yoneticiMailOnay: boolean;
  plan: "AYLIK" | "YILLIK";
  siteYoneticisiOnayi: boolean;
}

function CompanyCarts() {
  const [list, setList] = useState<Company[]>([]);

  // Function to add items to the list
  const addItemsToList = () => {
    const itemsToAdd: Company[] = [];
    for (let i = 0; i < 10; i++) {
      itemsToAdd.push({
        index: i, // Assuming you want to add index values from 0 to 9
        sirketAdi: `Company${i}`,
        yoneticiAdi: `User${i}`, // Example userName
        yoneticiMail: `user${i}@example.com`, // Example email
        yoneticiMailOnay: false,
        plan: "AYLIK",
        siteYoneticisiOnayi: false, // Assuming this is what you intended
      });
      itemsToAdd.push({
        index: i, // Assuming you want to add index values from 0 to 9
        sirketAdi: `Company${i}`,
        yoneticiAdi: `User${i}`, // Example userName
        yoneticiMail: `user${i}@example.com`, // Example email
        yoneticiMailOnay: true,
        plan: "YILLIK",
        siteYoneticisiOnayi: true,
      });
    }
    setList((prevList) => [...prevList, ...itemsToAdd]);
  };
  // Call addItemsToList when component mounts
  React.useEffect(() => {
    addItemsToList();
  }, []);

  return <CompanyCart props={list} />;
}

export default CompanyCarts;
