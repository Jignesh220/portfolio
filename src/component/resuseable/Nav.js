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
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import AOS from "aos";

const drawerWidth = 240;

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    AOS.init({
      // Global settings:
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 199, // the delay on throttle used while scrolling the page (advanced)
      easing: "ease", // default easing for AOS animations
    });
  }, []);

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
          data-aos="zoom-out-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <b>About</b>
        </Link>
        <Link
          to="#project"
          className="col-12 mt-5 bt btn py-2 border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 text-decoration-none"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <b>Project</b>
        </Link>
        <Link
          to="#contact"
          className="col-12 mt-5 btn bt py-2 border-0 px-4 shadow-lg t1 text-theme2 me-4 ms-1 fs-6 text-decoration-none"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="450"
          data-aos-duration="1000"
        >
          <b>Contact</b>
        </Link>
        <Link
          to="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Resume_Jignesh_Baria.pdf?alt=media&token=b4bef8d4-0c7f-42ad-b61a-aad7d481b275"
          className="col-12 mt-5 bt btn py-2 border-0 px-4 shadow-lg t1 text-theme2 me-2 ms-1 fs-6 text-decoration-none"
          target="_blank"
          data-aos="zoom-out-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="650"
          data-aos-duration="1000"
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
            data-aos="zoom-out-up"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <MenuIcon color="primary" />
          </IconButton>
          <IconButton
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "none" }, marginLeft: "auto" }}
            onClick={() => scrollTo("#header")}
            data-aos="zoom-out-up"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <img src={Logo} alt="logo" width="25px" className="t1 ms-2" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="mt-3"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={() => scrollTo("#header")}
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
          >
            <img src={Logo} alt="logo" width="35px" className="t1 ms-2" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div class="d-flex mt-3">
              <button
                onClick={() => scrollTo("#about")}
                className="border-0 px-4 shadow-lg bg-theme text-light me-4 fs-6 py-2 Nav-bar"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="700"
              >
                <Tooltip title="About me">
                  <div className="ms-0 text-light">1.About</div>
                </Tooltip>
              </button>
              <button
                onClick={() => scrollTo("#project")}
                className="border-0 px-4 shadow-lg bg-theme text-light me-4 ms-1 fs-6 py-2 Nav-bar"
                data-aos="fade-down"
                data-aos-delay="250"
                data-aos-duration="700"
              >
                <Tooltip title="Let's Goto Project">
                  <div className="ms-0 text-light">2.Project</div>
                </Tooltip>
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="border-0 px-4 shadow-lg bg-theme text-light me-4 ms-1 fs-6 py-2 Nav-bar"
                data-aos="fade-down"
                data-aos-delay="450"
                data-aos-duration="700"
              >
                <Tooltip title="Contact me">
                  <div className="ms-0 text-light">3.Contact</div>
                </Tooltip>
              </button>

              <Link
                to="https://firebasestorage.googleapis.com/v0/b/jignesh-baria.appspot.com/o/Resume_Jignesh_Baria.pdf?alt=media&token=b4bef8d4-0c7f-42ad-b61a-aad7d481b275"
                className="border-0 px-4 shadow-lg bg-theme text-light me-2 ms-1 fs-6 py-2 text-decoration-none Nav-bar"
                target="_blank"
                data-aos="fade-down"
                data-aos-delay="650"
                data-aos-duration="700"
              >
                <Tooltip title="Download Resume">
                  <div className="ms-0 text-light">4.Resume</div>
                </Tooltip>
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
