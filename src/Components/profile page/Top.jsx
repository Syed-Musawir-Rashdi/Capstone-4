import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid2";
import CoverPhoto from "../images/Cover.jpeg";
import Profile from "../images/profile.jpg";

const Top = () => {
  return (
    <Grid Container>
      <Grid size={{ xs: 12, sm: 12, lg: 12, md: 12 }}>
        <Container
          className="p-0"
          style={{ maxWidth: "900px", background: "#fff" }}
        >
          <div className="position-relative">
            <img
              src={CoverPhoto}
              alt="cover photo"
              className="w-100 rounded"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <IconButton
              className="position-absolute bottom-0 end-0 m-3 bg-light"
              size="small"
            >
              <CameraAltIcon fontSize="small" />
            </IconButton>
          </div>
          <div className="position-relative d-flex align-items-center p-3">
            <Avatar
              src={Profile} 
              alt="Profile"
              className="border border-3 border-white"
              sx={{
                width: 100,
                height: 100,
                position: "absolute",
                top: "-60px",
              }}
            />
            <IconButton
              className="position-absolute"
              style={{ top: "4px", left: "80px", background: "#fff" }}
            >
              <CameraAltIcon fontSize="small" />
            </IconButton>
            <div className="ms-2 mt-4">
              <h4 className="fw-bold">Syed Musawir Shah Rashdi</h4>
              <span className="text-muted">1.1K friends</span>
            </div>
          </div>
          <Row className="px-3 mb-3">
            <Col>
              <Button variant="primary" className="me-2">
                <AddIcon /> Add to story
              </Button>
              <Button variant="light" className="me-2 border">
                <EditIcon /> Edit profile
              </Button>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Col>
          </Row>
          <nav className="border-top">
            <ul className="nav">
              {["Posts", "About", "Friends", "Photos", "Videos", "Reels"].map(
                (tab) => (
                  <li className="nav-item" key={tab}>
                    <a className="nav-link text-light-emphasis px-3" href="#">
                      {tab}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Top;
