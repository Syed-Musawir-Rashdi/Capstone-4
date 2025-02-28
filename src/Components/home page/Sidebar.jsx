import React from "react";
import { Box, Button } from "@mui/material";
import Profile from "../images/profile.jpg";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import ReplayIcon from "@mui/icons-material/Replay";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import "./home.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Box className="d-none d-lg-block position-fixed">
        {/* user */}

        <Box className="my-2 hover-1">
          <Button variant="outline" className="d-flex align-items-center">
            <Link to={"/profile"}>
              <img
                src={Profile}
                className="rounded-circle img-fluid"
                style={{ width: "30px", height: "30px", objectFit: "cover" }}
                alt="Profile"
              />
            </Link>
            <span className="mx-2 fs-6 d-lg-block d-none text-capitalize">
              Syed Musawir
            </span>
          </Button>
        </Box>

        {/* friends */}

        <Box className="my-2 ms-2 mx-2 d-flex align-items-center hover-1">
          <GroupOutlinedIcon className="fs-1 p-1 text-success" />
          <span className="mx-2 fs-6 d-lg-block d-none">Friends</span>
        </Box>

        {/* facebook icon */}

        <Box className="my-2 ms-2 mx-2 d-flex align-items-center hover-1">
          <FacebookOutlinedIcon className="fs-1 p-1 text-primary" />
          <span className="mx-2 fs-6 d-lg-block d-none">Welcome</span>
        </Box>

        {/* Memories */}

        <Box className="my-2 ms-2 mx-2 d-flex align-items-center hover-1">
          <ReplayIcon className="fs-1 p-1 text-primary-emphasis" />
          <span className="mx-2 fs-6 d-lg-block d-none">Memories</span>
        </Box>

        {/* Saveds */}

        <Box className="my-2 ms-2 mx-2 d-flex align-items-center hover-1">
          <BookmarkIcon className="fs-1 p-1 text-danger-emphasis" />
          <span className="mx-2 fs-6  d-lg-block d-none">Saved</span>
        </Box>

        {/* Groups */}

        <Box className="my-2 ms-2 mx-2 d-flex align-items-center hover-1">
          <GroupsIcon className="fs-2 ms-1 p-1 border rounded-circle bg-primary text-light" />
          <span className="mx-2 fs-6 d-lg-block d-none">Groups</span>
        </Box>

        {/* Video */}

        <Box className="my-2 ms-2 mx-2 d-flex align-items-center hover-1">
          <SmartDisplayIcon className="fs-1 p-1 text-primary" />
          <span className="mx-2 fs-6  d-lg-block d-none">Video</span>
        </Box>

        {/* marketplace */}

        <Box className="my-2 ms-2 mx-2 d-flex align-items-center hover-1">
          <HomeOutlinedIcon className="fs-1 p-1 text-primary" />
          <span className="mx-2 fs-6  d-lg-block d-none">Marketplace</span>
        </Box>

        {/* Events */}

        <Box className="my-2 ms-2 mx-2 d-flex align-items-center hover-1">
          <InsertInvitationIcon className="fs-1 p-1 text-danger" />
          <span className="mx-2 fs-6 d-lg-block d-none">Events</span>
        </Box>

        {/* ads manager */}

        <Box className="my-2 ms-2 mx-2 d-flex align-items-center hover-1">
          <EqualizerIcon className="fs-1 p-1 text-primary" />
          <span className="mx-2 fs-6 d-lg-block d-none">Ads Manager</span>
        </Box>

        {/* see more */}

        <Box className="ms-2 mx-2 d-flex align-items-center hover-1">
          <ExpandCircleDownRoundedIcon className="fs-1 p-1 text-secondary" />
          <span className="mx-2 fs-6 d-lg-block d-none">See more</span>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
