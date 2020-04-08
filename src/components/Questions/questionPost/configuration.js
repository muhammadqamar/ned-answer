import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Configuration() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          native
          value={state.age}
          onChange={handleChange("age")}
          inputProps={{
            name: "Sort by Popularity",
            id: "age-native-simple"
          }}
        >
          <option value={10}>Sort by Popularity</option>
          <option value={10}>Sort by Top Rated</option>
          <option value={20}>Sort by Answered Count</option>
        </Select>
      </FormControl>
    </div>
  );
}
