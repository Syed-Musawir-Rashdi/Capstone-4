import { Box, Card, Typography } from "@mui/material";
import React from "react";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CakeIcon from "@mui/icons-material/Cake";
import './friend.css'

const Left = () => {
  return (
    <>
      <Box>
        <Card className="p-4 h-100">
          {/* friends */}
          <Box className="d-flex justify-content-between align-items-center">
            <Typography variant="h5" className="fw-bold">
              Friends
            </Typography>

            <SettingsRoundedIcon className="rounded-circle p-1 fs-2" />
          </Box>

          {/* home */}

          <Box className="d-flex align-items-center mt-4" style={{cursor:"pointer"}}>
            <GroupIcon className="rounded-circle text-primary p-1 fs-2" />

            <Typography variant="h5" className="mx-1">
              Home
            </Typography>
          </Box>

          {/* Request */}

          <Box className="hover-1  d-flex justify-content-between align-items-center mt-4">
            <Box className="d-flex align-items-center">
              <PersonAddAlt1Icon className="border rounded-circle p-1 fs-2" />

              <Typography variant="body2" className="mx-1 fs-6">
                Friends Requests
              </Typography>
            </Box>

            <Box>
              <ArrowForwardIosIcon className="text-secondary" />
            </Box>
          </Box>

          {/* Suggestions */}

          <Box className="hover-1  d-flex justify-content-between align-items-center mt-4">
            <Box className="d-flex align-items-center">
              <PersonAddAlt1Icon className="border rounded-circle p-1 fs-2" />

              <Typography variant="body2" className="mx-1 fs-6">
                Suggestions
              </Typography>
            </Box>

            <Box>
              <ArrowForwardIosIcon className="text-secondary" />
            </Box>
          </Box>

          {/* All Friends */}

          <Box className="hover-1  d-flex justify-content-between align-items-center mt-4">
            <Box className="d-flex align-items-center">
              <PersonAddAlt1Icon className="border rounded-circle p-1 fs-2" />

              <Typography variant="body2" className="mx-1 fs-6">
                All friends
              </Typography>
            </Box>

            <Box>
              <ArrowForwardIosIcon className="text-secondary" />
            </Box>
          </Box>

          {/* Birdthdays */}

          <Box className="hover-1  d-flex justify-content-between align-items-center mt-4">
            <Box className="d-flex align-items-center">
              <CakeIcon className="border rounded-circle p-1 fs-2" />

              <Typography variant="body2" className="mx-1 fs-6">
                Birthdays
              </Typography>
            </Box>

            <Box>
              <ArrowForwardIosIcon className="text-secondary" />
            </Box>
          </Box>

          {/* Custom list */}

          <Box className="hover-1  d-flex justify-content-between align-items-center mt-4">
            <Box className="d-flex align-items-center">
              <PersonAddAlt1Icon className="border rounded-circle p-1 fs-2" />

              <Typography variant="body2" className="mx-1 fs-6">
                Custom Lists
              </Typography>
            </Box>

            <Box>
              <ArrowForwardIosIcon className="text-secondary" />
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Left;
