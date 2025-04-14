import React from "react";
import { Card, styled, Button, List, ListItem, ListItemText } from "@mui/material";

const InfoWrapper = styled("div")(({theme}) => ({
  "&": { 
    position: "relative",
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
      height: '400px'
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  "& .MuiCard-root": {
    margin: "20px",
    padding: '20px',
    [theme.breakpoints.up("sm")]: {
      height: "240px",
    },
  },
  "& .MuiCard-root h3": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  "& .MuiCard-root h4": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  ".MuiCard-root.odd": {
    backgroundColor: "ivory",
  },
  ".MuiCard-root.even": {
    backgroundColor: "#542999", //plum
    color: "#fff"
  },
}));
const CompanyInfo = () => {
  return (
    <InfoWrapper>
      <div>
        <Card variant="outlined" className="odd">
          <h3>Achievements</h3>
          <h4>Successfully delivered 500+ projects with excellence.</h4>
        </Card>
      </div>
      <div>
        <Card variant="outlined" className="even">
          <h3>Vision</h3>
          <h4>Empowering Tomorrow, Today: Innovate with AI & ML</h4>
        </Card>
      </div>
      <div>
        <Card variant="outlined" className="odd">
          <h3>Our Journey</h3>
          <h4>Rebuilding with passion, delivering with precision.</h4>
        </Card>
      </div>
      <div>
        <Card variant="outlined" className="even">
          <h3>Client-Centric Approach</h3>
          <h4>Your vision, our mission – let's grow together.</h4>
        </Card>
      </div>
    </InfoWrapper>
  );
};

export default CompanyInfo;