import React from "react";
import "./styles.css";
import CustomButton from "./CustomButton";
import TextInput from "./TextInput";
import DisablableButton from "./DisablableButton";
import Button from "@material-ui/core/Button";
import NewPeople from "./NewPeople";
import NewPeople2 from "./NewPeople2";

const App = () => {
  return (
    <div className="App">
      <h1>TP React</h1>
      <p>Start editing to see some magic happen!</p>
      <h1>Exercice 1</h1>
      <CustomButton
        text="Click-me !"
        action={() => alert("You just click me :o")}
      />
      <br />
      <h1>Exercice 2</h1>
      <TextInput />
      <h1>Exercice 3</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log("deja cliquer")}
      >
        primary
      </Button>
      <h1>Exercice 4</h1>
      <DisablableButton text="hello " />
      <DisablableButton text="hello " />
      <DisablableButton text="hello " />
      <h1>Exercice 5</h1>
      <NewPeople />
      <h1>Exercice 6</h1>
      <NewPeople2 />
    </div>
  );
};

export default App;
