import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../images/Jignesh_logo.png";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

const drawerWidth = 240;

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="my-auto"
    >
      <Divider />
      <div class="mt-3 col-8 mx-auto">
        <Link
          to="#about"
          className="col-12 bt btn border-0 px-4 shadow-lg t1 text-theme2 me-4 fs-6 text-decoration-none"
        >
          <b>About</b>
        </Link>
        <Link
        to="#project"
          className="col-12 mt-5 bt btn py-2 border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 text-decoration-none"
        >
          <b>Project</b>
        </Link>
        <Link
          to="#contact"
          className="col-12 mt-5 btn bt py-2 border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 text-decoration-none"
        >
          <b>Contact</b>
        </Link>
        <Link
          to="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Resume_Jignesh_Baria.pdf?alt=media&token=2f1f8e39-4734-4bc1-84cb-4fe532f9fd51"
          className="col-12 mt-5 bt btn py-2 border-0 px-4 shadow-lg t1 text-theme2 me-2 ms-1 fs-6 text-decoration-none"
          target="_blank"
        >
          <b>Resume</b>
        </Link>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="fixed-top">
      <div className="bg-theme col-12">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon color="primary" />
          </IconButton>
          <IconButton
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "none" }, marginLeft: "auto" }}
            onClick={() => scrollTo('#header')}
          >
            <img src={Logo} alt="logo" width="25px" className="t1 ms-2"/>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="mt-3"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={() => scrollTo('#header')}
          >
            <img src={Logo} alt="logo" width="35px" className="t1 ms-2" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div class="d-flex mt-3">
              <button
                onClick={() => scrollTo('#about')}
                className="bt border-0 px-4 shadow-lg t1 text-theme2 me-4 fs-6 py-2"
              >
                <b>About</b>
              </button>
              <button
                onClick={() => scrollTo('#project')}
                className="bt border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 py-2"
              >
                <b>Project</b>
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="bt border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 py-2"
              >
                <b>Contact</b>
              </button>
              <Link
                to="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Resume_Jignesh_Baria.pdf?alt=media&token=2f1f8e39-4734-4bc1-84cb-4fe532f9fd51"
                className="bt border-0 px-4 shadow-lg t1 text-theme2 me-2 ms-1 fs-6 py-2 text-decoration-none"
                target="_blank"
              >
                <b>Resume</b>
              </Link>
            </div>
          </Box>
        </Toolbar>
      </div>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            shiftTextLeft: {
              marginLeft: "0px",
            },
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#06152c",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Nav.propTypes = {
  window: PropTypes.func,
};

export default Nav;
