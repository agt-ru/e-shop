import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history, location }) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (
      location.pathname.split("/")[1] !== "search" &&
      location.pathname.split("/")[1] !== "product"
    ) {
      setKeyword("");
    }
  }, [location]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword.trim()}`);
      setKeyword(keyword.trim());
    } else {
      history.push(`/`);
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products..."
        className="mr-sm-2 ml-sm-5"
        value={keyword}
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
