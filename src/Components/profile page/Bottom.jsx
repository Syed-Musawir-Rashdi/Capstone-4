import React from "react";
import { Button, Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "../images/profile.jpg";

const Bottom = () => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 2 }}>
      <Grid>
        <Card>
          <CardContent>
            <Typography variant="h6">Intro</Typography>
            <Button fullWidth variant="contained" className="text-secondary bg-body-tertiary border-dark-subtle"  sx={{ my: 1 }}>Add bio</Button>
            <Button fullWidth variant="contained" className="text-secondary bg-body-tertiary border-dark-subtle" sx={{ my: 1 }}>Edit details</Button>
            <Button fullWidth variant="contained" className="text-secondary bg-body-tertiary border-dark-subtle" sx={{ my: 1 }}>Add featured</Button>
          </CardContent>
        </Card>
      </Grid>
      
      {/* Right Panel: Posts Section */}
      <Grid>
      <Box className="my-3">
        <Card className="py-4 px--2 rounded-3">
          <Box className="d-flex align-items-center ms-2">
            <img
              src={Profile}
              className="rounded-circle img-fluid"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              alt="Profile"
            />
            <input
              type="text"
              placeholder="What on your mind, Musawir"
              className="p-2 rounded-pill bg-body-tertiary border border-1 w-75 mx-2"
            />
          </Box>
          <hr />
          <Box className="d-flex align-items-center flex-grow-1 gap-2">
            <Button
              variant="outline"
              className="d-flex align-items-center gap-1 hover-1"
            >
              <VideoCameraBackIcon className="text-danger" />
              <span className="text-secondary" style={{ fontSize: "11px" }}>
                Live 
              </span>
            </Button>
            <Button
              variant="outline"
              className="d-flex align-items-center gap-1 hover-1"
            >
              <PhotoSizeSelectActualIcon className="text-success" />
              <span className="text-secondary" style={{ fontSize: "11px" }}>
                Photo/Video
              </span>
            </Button>
            <Button
              variant="outline"
              className="d-flex align-items-center gap-1 hover-1"
            >
              <EmojiEmotionsIcon className="text-warning" />
              <span className="text-secondary" style={{ fontSize: "11px" }}>
                Activity
              </span>
            </Button>
          </Box>
        </Card>
      </Box>
      </Grid>
    </Grid>
  );
};

export default Bottom;
