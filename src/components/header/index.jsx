import React, { useEffect, useState } from "react";
import { Button, styled, Paper } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { capabilitiesMenu, howWeServeMenu, industriesMenu, lifeAtKaalpanik, ourOrganizationMenu } from "./menu-list";
import Grid from '@mui/material/Grid2';

const HeaderWrapper = styled("div")(({ theme }) => ({
 "&": {
    // display: "flex",
    backgroundColor: "#000",
    color: "#fff",
  },
  ".navbar": {
    textAlign: "center",
    padding: "10px",
  },
  ".navbar .nav_btn": {
    backgroundColor: "#000",
  },
  ".navbar li": {
    display: "inline",
    padding: "0 20px"
  },
}));

const Header = () => {
  const [menu1, setMenu1] = useState(null);
  const [menu2, setMenu2] = useState(null);
  const openMenu1 = Boolean(menu1);
  const openMenu2 = Boolean(menu2);
  const [openWhatWeDo, setOpenWhatWeDo] = useState(false);
  const [openHowWeServe, setOpenHowWeServe] = useState(false);
  const [openCareers, setOpenCareers] = useState(false);

  const handleClickMenu1 = (event) => {
    setMenu1(event.currentTarget);
    setOpenHowWeServe(false);
    setOpenCareers(false);
    setOpenWhatWeDo(!openWhatWeDo);
  };

  const handleClickWeDoMenu = (event) => {
    setMenu2(event.currentTarget);
    setOpenWhatWeDo(false);
    setOpenCareers(false);
    setOpenHowWeServe(!openHowWeServe);
  };

  const handleClickCareerMenu = (event) => {
    setOpenWhatWeDo(false);
    setOpenHowWeServe(false);
    setOpenCareers(!openCareers);
  };

  useEffect(() => {
    // Disable scroll when the mega-menu is open
    if (openWhatWeDo || openHowWeServe || openCareers) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scroll
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openWhatWeDo, openHowWeServe, openCareers]);

  return (
    <HeaderWrapper>
      <nav className="navbar">
        <Button id="basic-button"
          aria-controls={openMenu1 ? 'customized_menu1' : null}
          aria-haspopup="true"
          aria-expanded={openMenu1 ? 'true' : null}
          variant="contained"
          className="nav_btn"
          disableElevation
          onClick={handleClickMenu1}
          endIcon={<KeyboardArrowDownIcon />}
        >
          What we do
        </Button>
        <Button id="basic-button2"
          aria-controls={openMenu2 ? 'customized_menu2' : null}
          aria-haspopup="true"
          aria-expanded={openMenu2 ? 'true' : null}
          variant="contained"
          className="nav_btn"
          disableElevation
          onClick={handleClickWeDoMenu}
          endIcon={<KeyboardArrowDownIcon />}>
          Who we are
        </Button>
        <Button
          variant="contained"
          className="nav_btn"
          onClick={handleClickCareerMenu}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Careers
        </Button>
      </nav>
      {openWhatWeDo && (
        <Paper sx={{ width: '100%' }}>
          <section
            className="mega-menu-container"
          >
            <div className="menu-section">
              <h3>Capabilities</h3>
              <div className="menu-columns">
                <div className="column">
                  {capabilitiesMenu.slice(0, Math.ceil(capabilitiesMenu.length / 2)).map((item, index) => (
                    <div key={index} className="menu-item">{item}</div>
                  ))}
                </div>
                <div className="column">
                  {capabilitiesMenu.slice(Math.ceil(capabilitiesMenu.length / 2)).map((item, index) => (
                    <div key={index} className="menu-item">{item}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="menu-section">
              <h3>Industries</h3>
              <div className="menu-columns">
                <div className="column">
                  {industriesMenu.slice(0, Math.ceil(industriesMenu.length / 2)).map((item, index) => (
                    <div key={index} className="menu-item">{item}</div>
                  ))}
                </div>
                <div className="column">
                  {industriesMenu.slice(Math.ceil(industriesMenu.length / 2)).map((item, index) => (
                    <div key={index} className="menu-item">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Paper>
      )}
      {openHowWeServe && (
        <Paper sx={{ width: '100%' }}>
          <section
            className="mega-menu-container"
          >
            <div className="menu-section">
              <Grid container spacing={2}>
                <Grid size={3}>
                  <h3>Our Organization</h3>
                  {ourOrganizationMenu.map((item, index) => (
                    <div key={index} className="menu-item">{item}</div>
                  ))}
                </Grid>
                <Grid size={3}>
                  <h3>How we Serve</h3>
                  {howWeServeMenu?.map((item, index) => (
                    <div key={index} className="menu-item">{item}</div>
                  ))}
                </Grid>
              </Grid>
            </div>
          </section>
        </Paper>
      )}
      {openCareers && (
         <Paper sx={{ width: '100%' }}>
         <section
           className="mega-menu-container"
         >
           <div className="menu-section">
             <Grid container spacing={2}>
               <Grid size={3}>
                 <h3>Life at Kaalpanik</h3>
                 {lifeAtKaalpanik.map((item, index) => (
                   <div key={index} className="menu-item">{item}</div>
                 ))}
               </Grid>
             </Grid>
           </div>
         </section>
       </Paper>
      )}
    </HeaderWrapper>
  )
}

export default Header;