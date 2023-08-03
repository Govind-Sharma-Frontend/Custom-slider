import { Box, Typography } from "@mui/material";
import { } from "react";
import "./slider.css";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import { ArrowLeft, ArrowRight } from "react-feather";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems:'center',
        zIndex: "100",
        height:'31px',
        color: "white",
      }}
      onClick={onClick}
    >
        <Box zIndex={10}>
      <ArrowRight size={'25px'}/>
        </Box>
      <Box position={"absolute"} right={'11px'} style={{ background: "black", width: "30px",height:'30px', borderRadius:'50%' }}></Box>
      {/* <Typography style={style}>Next</Typography> */}
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems:'center',
        zIndex: "100",
        height:'31px',
        color: "white",
      }}
      onClick={onClick}
    >
        <Box zIndex={10}>
      <ArrowLeft size={'25px'}/>
        </Box>
      <Box position={"absolute"} left={'15px'} style={{ background: "black", width: "30px",height:'30px', borderRadius:'50%' }}></Box>
      {/* <Typography style={style}>Next</Typography> */}
    </div>
  );
}

const CustomSlider = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box>
      <Typography> Multiple items </Typography>
      <Slider {...settings}>
        <Box
          display={"flex"}
          justifyContent={"center"}
        >
          <SliderCard />
        </Box>
        <Box >
          <SliderCard />
        </Box>
        <Box >
          <SliderCard />
        </Box>
        <Box >
          <SliderCard />
        </Box>
        <Box >
          <SliderCard />
        </Box>
        <Box >
          <SliderCard />
        </Box>
        <Box >
          <SliderCard />
        </Box>
        <Box >
          <SliderCard />
        </Box>
        <Box >
          <SliderCard />
        </Box>
      </Slider>
    </Box>
  );
};

export default CustomSlider;
