import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CompanyCart from "../molekul/CompanyCart.tsx";
import { RootState } from "../../store";
import { Company, baseResponseEntity, CompanyState } from "../../types";

// const companyList as <Company[]>[];

function CompanyCarts() {
  // const [list, setList] = useState<Company[]>([]);
  // const companyList = useSelector(
  //   (state: RootState) => state.company.companyList
  // );
  // // Function to add items to the list
  // const addItemsToList = () => {
  //   const itemsToAdd: Company[] = [];
  //   for (let i = 0; i < 10; i++) {
  //     itemsToAdd.push({
  //       sirketAdi: `Company${i}`,
  //       yoneticiAdi: `User${i}`, // Example userName
  //       yoneticiMail: `user${i}@example.com`, // Example email
  //       yoneticiMailOnay: false,
  //       plan: "AYLIK",
  //       siteYoneticisiOnayi: false, // Assuming this is what you intended
  //     });
  //     itemsToAdd.push({
  //       sirketAdi: `Company${i}`,
  //       yoneticiAdi: `User${i}`, // Example userName
  //       yoneticiMail: `user${i}@example.com`, // Example email
  //       yoneticiMailOnay: true,
  //       plan: "YILLIK",
  //       siteYoneticisiOnayi: true,
  //     });
  //   }
  //   setList((prevList) => [...prevList, ...itemsToAdd]);
  // };
  // Call addItemsToList when component mounts
  // React.useEffect(() => {
  //   addItemsToList();
  // }, []);

  return <CompanyCart/>;
}

export default CompanyCarts;
