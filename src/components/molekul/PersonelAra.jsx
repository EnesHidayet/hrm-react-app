import React, { useState } from "react";

function PersonelAra() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="personnel-search">
      <input style={{}}
        type="text"
        placeholder="Personel Ara"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default PersonelAra;
