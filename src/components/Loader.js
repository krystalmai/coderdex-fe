import { Container } from "@mui/material";
import React from "react";

const styles = {
  backgroundColor: "white",
  textAlign: "center",
  height: "6rem",
  transform: "translateY(1rem)",
};
function Loader() {
  return (
    <Container maxWidth="md" sx={styles}>
      <img
        alt="loading"
        className="loading"
        src="./images/pokeball_gray.png"
        style={{ height: "4rem" }}
      />
    </Container>
  );
}

export default Loader;
