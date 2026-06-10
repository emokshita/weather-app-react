import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SevereColdIcon from "@mui/icons-material/SevereCold";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs=";
  let HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=800";

  let COLD_URL =
    "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800";

  let RAIN_URL =
    "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800";

  let SNOW_URL =
    "https://images.unsplash.com/photo-1516431883659-655d41c09bf9?w=800";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.weather.toLowerCase().includes("snow")
                ? SNOW_URL
                : info.humidity > 80
                  ? RAIN_URL
                  : info.temp > 15
                    ? HOT_URL
                    : COLD_URL
            }
            title="weather"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.weather.toLowerCase().includes("snow") ? (
                <AcUnitIcon />
              ) : info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <SevereColdIcon />
              )}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="div"
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temperature = {info.tempMin}&deg;C</p>
              <p>Max Temperature = {info.tempMax}&deg;C</p>
              <p>The weather feels like {info.feelsLike}&deg;C</p>
              <p>The weather can be described as {info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
