import React, { useState } from "react";

export default ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => setSearch(event.target.value);
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(search);
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        value={search}
        onChange={handleChange}
        onKeyPress={onKeyPress}
        placeholder="buscar..."
      />
    </div>
  );
};
