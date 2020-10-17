import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip } from "@material-ui/core";
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
  let id = props.match.params.id;
  console.log(id);
  console.log(cars);
  let car = cars.filter((car) => car.id === Number(id));
  console.log(car);
  return (
    <Container maxwidth="sm" className="car-container">
      <Paper elevation={3} className="car-paper">
        <h2>{car[0].Name}</h2>
        <Chip label={`id:${car[0].id}`} />
        <Chip label={`Name:${car[0].Name}`} />
        <Chip label={`Miles_per_Gallon:${car[0].Miles_per_Gallon}`} />
        <Chip label={`Cylinders:${car[0].Cylinders}`} />
        <Chip label={`Displacement:${car[0].Displacement}`} />
        <Chip label={`Horsepower:${car[0].Horsepower}`} />
        <Chip label={`Weight_in_lbs:${car[0].Weight_in_lbs}`} />
        <Chip label={`Year:${car[0].Year}`} />
        <Chip label={`Origin:${car[0].Origin}`} />
      </Paper>
    </Container>
  );
};

export default Car;
