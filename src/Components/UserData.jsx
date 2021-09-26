import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function UserData(props) {
  return (
    <CardContent
      sx={{
        height: "300px",
        width: "250px",
        borderRadius: "2%",
        backgroundColor: "#fff",
        margin: "20px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={props.user.avatar}
        alt={props.user.first_name}
        sx={{ borderRadius: "2%" }}
      />
      <Typography sx={{ marginTop: "20px" }}>
        <strong>Name</strong> :{" "}
        {props.user.first_name + " " + props.user.last_name}
      </Typography>
      <Typography>
        <strong>Email</strong> : {props.user.email}
      </Typography>
    </CardContent>
  );
}
