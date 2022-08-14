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
          to=""
          className="col-12 bt btn border-0 px-4 shadow-lg t1 text-theme2 me-4 fs-6 text-decoration-none"
        >
          <b>Work</b>
        </Link>
        <Link
          to=""
          className="col-12 mt-5 bt btn border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 text-decoration-none"
        >
          <b>About</b>
        </Link>
        <Link
          to=""
          className="col-12 mt-5  bt btn border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 text-decoration-none"
        >
          <b>Contact</b>
        </Link>
        <Link
          to=""
          className="col-12 mt-5 bt btn border-0 px-4 shadow-lg t1 text-theme2 me-2 ms-1 fs-6 text-decoration-none"
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
          >
            <img src={Logo} alt="logo" width="25px" className="t1 ms-2" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="mt-3"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={Logo} alt="logo" width="35px" className="t1 ms-2" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div class="d-flex mt-3">
              <Link
                to=""
                className="bt btn border-0 px-4 shadow-lg t1 text-theme2 me-4 fs-6 text-decoration-none"
              >
                <b>Work</b>
              </Link>
              <Link
                to=""
                className="bt btn border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 text-decoration-none"
              >
                <b>About</b>
              </Link>
              <Link
                to=""
                className="bt btn border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 text-decoration-none"
              >
                <b>Contact</b>
              </Link>
              <Link
                to=""
                className="bt btn border-0 px-4 shadow-lg t1 text-theme2 me-2 ms-1 fs-6 text-decoration-none"
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
