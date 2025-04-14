import React from "react";
import { styled } from "@mui/material";

const FooterWrapper = styled("footer")(({ theme }) => ({
  "&": {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "0.5rem",
    marginTop: "8px",
  },
  // [theme.breakpoints.up("sm")]: {
  //   padding: "3rem 0",
  // },
  "& p": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2025 Kaalpanik Technologies LLP. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;