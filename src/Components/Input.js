import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function Input(props) {
  const [input, setInput] = useState("");

  return (
    <div>
      
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Button onClick={() => props.onButtonPressed(input)}>Add player</Button>
     
    </div>
  );
}

export default Input;