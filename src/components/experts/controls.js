import React from "react";
import { Dropdown, InputGroup, FormControl } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";

export default function Controls() {
  const openmobileoptions = () => {
    document.getElementById("expertpage").classList.toggle("open");
  };
  return (
    <div className="controls">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Specialty
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        <FontAwesomeIcon icon={faSearch} onClick={openmobileoptions} />
      </Dropdown>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="City, Zip or Name"
          aria-label="City, Zip or Name"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <InputGroup.Text id="basic-addon2">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
