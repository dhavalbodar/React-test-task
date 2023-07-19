import React, { memo, useState } from "react";
import { Form, Button } from "react-bootstrap";
import CoinFlip from "../../Components/CoinFlip";
import { useDispatch } from "react-redux";
import {
  flipsData,
  resetFlipsList,
  updateFlipsList,
} from "../../Store/Slices/headAndTailSlice";

const CoinFlipMemoized = memo(CoinFlip);

const HeadAndTail = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedValue === "" || !selectedValue) {
      alert("Please select value");
      return;
    }

    dispatch(updateFlipsList(selectedValue));
    setSelectedValue("");
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleReset = () => {
    dispatch(resetFlipsList());
  };

  return (
    <div>
      <Form>
        <Form.Select
          className="mt-3"
          aria-label="Default select example"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option>Select Value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </Form.Select>
        <Button className="m-3" variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button
          className="m-3"
          variant="secondary"
          onClick={handleReset}
          disabled={flipsData.length === 0}
        >
          Reset
        </Button>
      </Form>
      <div>
        <CoinFlipMemoized />
      </div>
    </div>
  );
};

export default HeadAndTail;
