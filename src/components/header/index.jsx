import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { capabilitiesMenu, howWeServeMenu, industriesMenu, lifeAtKaalpanik, ourOrganizationMenu } from "./menu-list";
import Grid from '@mui/material/Grid2';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import {
  Button, styled, Paper, Collapse,
  AppBar, Toolbar, IconButton, Typography, Menu, MenuItem,
  Box, useMediaQuery, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const HeaderWrapper = styled("div")(({ theme }) => ({
 ".appBar": {
    backgroundColor: "#000",
    color: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    // transform: "translateY(0)",
    // transition: "transform 0.3s ease-in-out",
    // zIndex: "1000",
    // display: "block",
  },
  // "&.hidden": {
  //   transform: "translateY(-100%)",
  // },
  // "&.visible": {
  //   transform: "translateY(0)"
  // },
  ".logo" : {
    lineHeight: 3,
    paddingLeft: '10px',
  },
  ".logoName": {
    fontSize: '22px',
    fontWeight: 700,
    lineHeight: 2,
    paddingLeft: '10px',
  },
  ".megaMenuWrapper": {
    position: "fixed",
    zIndex: "1000",
    marginTop: "20px",
  },
  ".navbarWrapper": {
    width: "100%",
  },
  ".navbar": {
    display: "block",
    textAlign: "center",
    padding: "10px",
  },
  ".navbar .nav_btn": {
    backgroundColor: "#000",
  },
  ".navbar .highlightMenu": {
    backgroundColor: "#ffffff40",
  },
  ".navbar li": {
    display: "inline",
    padding: "0 20px"
  },
  ".appBar .megaMenulist": {
    top: "60px",
    left: "0",
    width: "100%",
    position: "absolute",
  },
  ".mb-menu .MuiPaper-root-MuiDrawer-paper": {
    backgroundColor: "#000",
  },
  ".mb-menu .MuiPaper-root-MuiDrawer-paper .MuiListItemText-root .MuiTypography-root a":{
    textDecoration: "none",
    color: "#fff",
  },
}));

const Header = () => {
  const [anchor1, setAnchor1] = useState(false);
  const [anchor2, setAnchor2] = useState(false);
  const [anchor3, setAnchor3] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const [isHovered, setIsHovered] = useState(false);
  const [menu1, setMenu1] = useState(null);
  const [menu2, setMenu2] = useState(null);
  const openMenu1 = Boolean(menu1);
  const openMenu2 = Boolean(menu2);
  const [openWhatWeDo, setOpenWhatWeDo] = useState(false);
  const [openHowWeServe, setOpenHowWeServe] = useState(false);
  const [openCareers, setOpenCareers] = useState(false);
  const [mbWeDoOpen, setMbWeDoOpen] = useState(false);
  const [mbServesOpen, setMbServesOpen] = useState(false);
  const [mbCareersOpen, setMbCareersOpen] = useState(false);
  const [openCapabilities, setOpenCapabilities] = useState(false);
  const [openIndustries, setOpenIndustries] = useState(false);
  const [openOurOrganization, setOpenOurOrganization] = useState(false);
  const [openHowWeServeMenu, setOpenHowWeServeMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const megaMenuRef = useRef(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const resetMobileMenu = () => {
    setMbWeDoOpen(false);
    setOpenCapabilities(false);
    setOpenIndustries(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowMenu(false);
      } else {
        // Scrolling up
        setShowMenu(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleMegaMenuLeave = () => {
    setShowMegaMenu(false);
  };
  const handleWhatWeDoMenu = (event) => {
    setAnchor1(prev => !prev);
    setAnchor2(false);
    setAnchor3(false);
    setShowMegaMenu(true);
    // setMenu1(event.currentTarget);
    setOpenHowWeServe(false);
    setOpenCareers(false);
    setOpenWhatWeDo(prev => !prev);
  };

  const handleCloseWhatWeDoMenu = () => {
    setAnchor1(false);
    setShowMegaMenu(false);
    setOpenWhatWeDo(false);
  };

  const handleHowWeServeMenu = (event) => {
    setAnchor2(prev => !prev);
    setAnchor1(false);
    setAnchor3(false);
    setShowMegaMenu(true);
    // setMenu2(event.currentTarget);
    setOpenWhatWeDo(false);
    setOpenCareers(false);
    setOpenHowWeServe(prev => !prev);
  };
  const handleCloseHowWeServeMenu = () => {
    setAnchor2(false);
    setShowMegaMenu(false);
    setOpenHowWeServe(false)
  };

  const handleCareerMenu = (event) => {
    setAnchor3(prev => !prev);
    setAnchor1(false);
    setAnchor2(false);
    setShowMegaMenu(true);
    setOpenWhatWeDo(false);
    setOpenHowWeServe(false);
    setOpenCareers(prev => !prev);
  };
  const handleCloseCareerMenu = () => {
    setAnchor3(prev => !prev);
    setShowMegaMenu(false);
    setOpenCareers(false);
  };

  useEffect(() => {
    // Disable scroll when the mega-menu is open
    if (anchor1 || anchor2 || anchor3) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scroll
    }
    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [anchor1, anchor2, anchor3]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target)
      ) {
        setShowMegaMenu(false);
        setAnchor1(false);
        setAnchor2(false);
        setAnchor3(false);
        setOpenWhatWeDo(false);
        setOpenHowWeServe(false);
        setOpenCareers(false);
      }
    };

    if (showMegaMenu) {
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMegaMenu]);
  
  return (
    <HeaderWrapper>
      <AppBar className="appBar">
        <Toolbar>
          {/* <span className="logoName absolute px-3 py-1 rounded-lg shadow-lg visible" onClick={() => navigate("/")}>KAALPANIK</span> */}
         
          {isMobile ? (
            <>
              <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={() => navigate("/")}>
                KAALPANIK
              </Typography>
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                PaperProps={{ sx: { backgroundColor: '#000', color: '#fff' } }}
              >
                <Box className="mb-menu-list" sx={{ width: 250 }} role="presentation">
                  <div style={{padding: "10px"}}>
                    <CloseIcon onClick={toggleDrawer}/>
                  </div>
                  <List>
                    <ListItem button onClick={() => setMbWeDoOpen(!mbWeDoOpen)}>
                      <ListItemText primary="What We Do" />
                      {mbWeDoOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={mbWeDoOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ pl: 3 }}>
                        <ListItem button onClick={() => setOpenCapabilities(!openCapabilities)}>
                          <ListItemText primary="Capabilities" />
                          {openCapabilities ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openCapabilities} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding sx={{ pl: 3 }}>
                            {capabilitiesMenu.map((item, index) => (
                              <ListItem button key={index}
                              onClick={() => { resetMobileMenu(); toggleDrawer(); }}
                              >
                               <ListItemText
                                disableTypography
                                primary={
                                  <Typography className="menuItem">
                                    {item}
                                  </Typography>
                                }
                              />
                              </ListItem>
                            ))}
                          </List>
                        </Collapse>

                        <ListItem button onClick={() => setOpenIndustries(!openIndustries)}>
                          <ListItemText primary="Industries" />
                          {openIndustries ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openIndustries} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding sx={{ pl: 3 }}>
                            {industriesMenu.map((item, index) => (
                              <ListItem button key={index} onClick={() => { resetMobileMenu(); toggleDrawer(); }}>
                                <ListItemText 
                                  disableTypography
                                  primary={
                                    <Typography className="menuItem">
                                      {item}
                                    </Typography>
                                  }
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Collapse>
                      </List>
                    </Collapse>

                    <ListItem button onClick={() => setMbServesOpen(!mbServesOpen)}>
                      <ListItemText primary="Who We Are" />
                      {mbServesOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={mbServesOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ pl: 3 }}>
                        <ListItem button onClick={() => setOpenOurOrganization(!openOurOrganization)}>
                          <ListItemText primary="Our Organization" />
                          {openOurOrganization ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openOurOrganization} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding sx={{ pl: 3 }}>
                            {ourOrganizationMenu.map((item, index) => (
                              <ListItem button key={index} onClick={() => { resetMobileMenu(); toggleDrawer(); }}>
                                <ListItemText 
                                  disableTypography
                                  primary={
                                    <Typography className="menuItem">
                                      {item}
                                    </Typography>
                                  }
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Collapse>

                        <ListItem button onClick={() => setOpenHowWeServeMenu(!openHowWeServeMenu)}>
                          <ListItemText primary="How We Serve" />
                          {openHowWeServeMenu ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openHowWeServeMenu} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding sx={{ pl: 3 }}>
                            {howWeServeMenu.map((item, index) => (
                              <ListItem button key={index} onClick={() => { resetMobileMenu(); toggleDrawer(); }}>
                                <ListItemText 
                                  disableTypography
                                  primary={
                                    <Typography className="menuItem">
                                      {item}
                                    </Typography>
                                  }
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Collapse>
                      </List>
                    </Collapse>

                    <ListItem button onClick={() => setMbCareersOpen(!mbCareersOpen)}>
                      <ListItemText primary="Careers" />
                      {mbCareersOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={mbCareersOpen} timeout="auto" unmountOnExit>
                      {/* <List component="div" disablePadding sx={{ pl: 3 }}>
                        <ListItem button onClick={() => setOpenCareersMenu(!openCareersMenu)}>
                          <ListItemText primary="Our Organization" />
                          {openCareersMenu ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openCareersMenu} timeout="auto" unmountOnExit> */}
                          <List component="div" disablePadding sx={{ pl: 3 }}>
                            {lifeAtKaalpanik.map((item, index) => (
                              <ListItem button key={index} onClick={() => { resetMobileMenu(); toggleDrawer(); }}>
                                <ListItemText 
                                  disableTypography
                                  primary={
                                    <Typography className="menuItem">
                                      {item}
                                    </Typography>
                                  }
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Collapse>
                      {/* </List>
                    </Collapse> */}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Typography variant="h6" onClick={() => navigate("/")}>
                KAALPANIK
              </Typography>
              <div className="navbarWrapper">
                <div className="navbar">
                  <Button
                    color="inherit"
                    onClick={handleWhatWeDoMenu}
                  >
                    What we do
                    {openWhatWeDo ? <ExpandLess /> : <ExpandMore />}
                  </Button>
                  <Button
                    color="inherit"
                    onClick={handleHowWeServeMenu}
                  >
                    How we serve
                    {openHowWeServe ? <ExpandLess /> : <ExpandMore />}
                  </Button>
                  <Button
                    color="inherit"
                    onClick={handleCareerMenu}
                  >
                    Careers
                    {openCareers ? <ExpandLess /> : <ExpandMore />}
                  </Button>
                </div>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Mega Menu (Desktop) */}
      {!isMobile && (
        <>
        {(anchor1 && showMegaMenu) && (
          <Paper sx={{ width: '100%' }} ref={megaMenuRef} className="megaMenuWrapper">
            <section
              className="mega-menu-container"
            >
              <div className="menu-section">
                <h3>Capabilities</h3>
                <div className="menu-columns">
                  <div className="column">
                    {capabilitiesMenu.slice(0, Math.ceil(capabilitiesMenu.length / 2)).map((item, index) => (
                      <div key={index} className="menu-item" onClick={handleCloseWhatWeDoMenu}>{item}</div>
                    ))}
                  </div>
                  <div className="column">
                    {capabilitiesMenu.slice(Math.ceil(capabilitiesMenu.length / 2)).map((item, index) => (
                      <div key={index} className="menu-item" onClick={handleCloseWhatWeDoMenu}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="menu-section">
                <h3>Industries</h3>
                <div className="menu-columns">
                  <div className="column">
                    {industriesMenu.slice(0, Math.ceil(industriesMenu.length / 2)).map((item, index) => (
                      <div key={index} className="menu-item" onClick={handleCloseWhatWeDoMenu}>{item}</div>
                    ))}
                  </div>
                  <div className="column">
                    {industriesMenu.slice(Math.ceil(industriesMenu.length / 2)).map((item, index) => (
                      <div key={index} className="menu-item" onClick={handleCloseWhatWeDoMenu}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Paper>
        )}

          {/* <Menu
          open={anchor2}
          onClose={handleCloseHowWeServeMenu}
          MenuListProps={{ onMouseLeave: handleCloseHowWeServeMenu }}
          className="megaMenulist"
          > */}
          {(anchor2 && showMegaMenu) && (
            <Paper sx={{ width: '100%' }} ref={megaMenuRef}>
              <section
                className="mega-menu-container"
              >
                <div className="menu-section">
                  <Grid container spacing={2}>
                    <Grid size={3}>
                      <h3>Our Organization</h3>
                      {ourOrganizationMenu.map((item, index) => (
                        <div key={index} className="menu-item" onClick={handleCloseHowWeServeMenu}>{item}</div>
                      ))}
                    </Grid>
                    <Grid size={3}>
                      <h3>How we Serve</h3>
                      {howWeServeMenu?.map((item, index) => (
                        <div key={index} className="menu-item" onClick={handleCloseHowWeServeMenu}>{item}</div>
                      ))}
                    </Grid>
                  </Grid>
                </div>
              </section>
            </Paper>
          )}
          {/* </Menu> */}

          {/* <Menu
            open={anchor3}
            onClose={handleCloseCareerMenu}
            MenuListProps={{ onMouseLeave: handleCloseCareerMenu }}
            className="megaMenulist"
          > */}
           {(anchor3 && showMegaMenu) && (
            <Box className="megaMenulist" ref={megaMenuRef}>
            <section
              className="mega-menu-container"
            >
              <div className="menu-section">
                <Grid container spacing={2}>
                  <Grid size={3}>
                    <h3>Life at Kaalpanik</h3>
                    {lifeAtKaalpanik.map((item, index) => (
                      <div key={index} className="menu-item" onClick={handleCloseCareerMenu}>{item}</div>
                    ))}
                  </Grid>
                </Grid>
              </div>
            </section>
          </Box>
           )}
         
        </>
      )}
    </HeaderWrapper>
  )
}

export default Header;