import { Box} from "@mui/material";
import { } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "react-feather";
import carouselImage from '../../assets/carouselImage.avif'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right:'20px',
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
      <Box position={"absolute"}  style={{ background: "gray", width: "30px",height:'30px', borderRadius:'50%' }}></Box>
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
        left:'10px',
        height:'31px',
        color: "white",
      }}
      onClick={onClick}
    >
        <Box zIndex={10}>
      <ArrowLeft size={'25px'}/>
        </Box>
      <Box position={"absolute"}  style={{ background: "gray", width: "30px",height:'30px', borderRadius:'50%' }}></Box>
      {/* <Typography style={style}>Next</Typography> */}
    </div>
  );
}

const CustomCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box>
      <Slider {...settings}>
        <Box
         sx={{
             background:`url(${carouselImage})`,
             backgroundSize:'cover',
             height:400
         }} 
        >
        </Box>
        <Box
         sx={{
             background:`url(${carouselImage})`,
             backgroundSize:'cover',
             height:400
         }} 
        >
        </Box>
        <Box
         sx={{
             background:`url(${carouselImage})`,
             backgroundSize:'cover',
             height:400
         }} 
        >
        </Box>
        
      </Slider>
    </Box>
  );
};

export default CustomCarousel;
