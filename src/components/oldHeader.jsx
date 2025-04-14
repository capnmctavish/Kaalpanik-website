  {/* <Grid container spacing={2}>
        <Grid size={2}>
          <span className="logoName absolute px-3 py-1 rounded-lg shadow-lg visible" onClick={() => navigate("/")}>KAALPANIK</span>
        </Grid>
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
           {!isHovered && (
            <a href="/" className="logo transition-opacity duration-300"> 
              <img src="/images/logo_bg_black.png" height="50px"></img>
            </a>
          )}
          {isHovered && (
           <span className="logoName absolute px-3 py-1 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 visible">KAALPANIK</span>
          )}
      
        <Grid size={8}>
          <nav className="navbar">
            <Button id="basic-button"
              aria-controls={openMenu1 ? 'customized_menu1' : null}
              aria-haspopup="true"
              aria-expanded={openMenu1 ? 'true' : null}
              variant="contained"
              className={openWhatWeDo ? "highlightMenu" : "nav_btn"}
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
              className={openHowWeServe ? "highlightMenu" : "nav_btn"}
              disableElevation
              onClick={handleClickWeDoMenu}
              endIcon={<KeyboardArrowDownIcon />}>
              Who we are
            </Button>
            <Button
              variant="contained"
              className={openCareers ? "highlightMenu" : "nav_btn"}
              onClick={handleClickCareerMenu}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Careers
            </Button>
          </nav>
      </Grid>
      <Grid size={2}>
      </Grid>
      </Grid>
        <div className={`menu ${showMenu ? "visible" : "hidden"}`}>
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
          </div> */}