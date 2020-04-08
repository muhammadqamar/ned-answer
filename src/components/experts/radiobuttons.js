import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function Radiobuttons({ check, title, content }) {
  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className={check + " Radiobuttons "}>
      <div className="content">
        <h4>{title}</h4>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            {content.map(x => {
              return (
                <FormControlLabel value={x} control={<Radio />} label={x} />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
