import React from "react";
import { useState } from "react";

const Form2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
      </form>
      <form>
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
};

export default Form2;
