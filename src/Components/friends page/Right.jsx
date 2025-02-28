import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import friendRequest from '../images/friendRequest.png';
import friendRequest1 from '../images/friendRequest1.jpg';
import friendRequest2 from '../images/friendRequest2.jpg';
import Grid from "@mui/material/Grid2";

const Right = () => {
  const Requests = [
    {
      name: "Abdul Samad Shah",
      img: friendRequest,
      mutual: 10,
    },
    {
      name: "Saleem Memon",
      img: friendRequest1 ,
      mutual: 1,
    },
    {
      name: "Ali Raza",
      img: friendRequest2,
      mutual: 12,
    },
    {
      name: "Saad",
      img: friendRequest,
      mutual: 2,
    },
  ];

  return (
    <>
      <Grid container>
        <Grid size={{ lg: 12, md:6}}>
          <div className="d-flex align-items-center justify-content-evenly">
          {Requests.map((request, index) => (
          <Card key={index} className="p-3" sx={{ maxWidth: 250 }}>
            <CardMedia
              component="img"
              className="rounded"
              height="190"
              image={request.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {request.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {request.mutual} Mutual Friends
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">
                Confirm
              </Button>
              <Button variant="contained" size="small">
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Right;
