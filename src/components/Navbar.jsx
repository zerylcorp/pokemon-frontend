import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/user.action";

const pages = ["Pokemon"];

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginUser = () => {
    dispatch(
      loginUser({
        username: "nanas",
        password: "112233",
      })
    );
  };

  const handleHomePage = () => {
    navigate("/pokemon");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonIcon onClick={handleHomePage} sx={{ cursor: "pointer", display: { xs: "none", md: "flex" }, mr: 1, fontSize: "2.7rem" }} />
          <CatchingPokemonIcon onClick={handleHomePage} sx={{ cursor: "pointer", display: { xs: "flex", md: "none" }, mr: 1, fontSize: "1.8rem" }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/pokemon"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#FFF455",

              textDecoration: "none",
            }}>
            POKEMON
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component="a"
                href="/pokemon"
                sx={{
                  mr: 2,
                  display: { xs: "flex" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                  color: "#FFF455",
                }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Jhon Doe" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {localStorage.getItem("access_token") && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    component="a"
                    onClick={() => {
                      navigate("/pokemon/my-list");
                    }}
                    textAlign="center">
                    My Pokemon
                  </Typography>
                </MenuItem>
              )}

              {!localStorage.getItem("access_token") && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={handleLoginUser} component="a" textAlign="center">
                    Login
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
