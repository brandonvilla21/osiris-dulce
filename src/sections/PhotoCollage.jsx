import { Box } from "@mui/material";
import PhotoAlbum from "react-photo-album";
const vertical = { height: 1386, width: 924 };
const horizontal = { height: 924, width: 1386 };

const photos = [
  { src: "/assets/pictures/1-min.jpeg", ...vertical },
  { src: "/assets/pictures/2-min.jpeg", ...vertical },
  { src: "/assets/pictures/3-min.jpeg", ...horizontal },
  { src: "/assets/pictures/4-min.jpeg", ...horizontal },
  { src: "/assets/pictures/5-min.jpeg", ...horizontal },
  { src: "/assets/pictures/6-min.jpeg", ...vertical },
  { src: "/assets/pictures/7-min.jpeg", ...vertical },
  { src: "/assets/pictures/8-min.jpeg", ...horizontal },
  { src: "/assets/pictures/9-min.jpeg", ...horizontal },
  { src: "/assets/pictures/10-min.jpeg", ...vertical },
  { src: "/assets/pictures/11-min.jpeg", ...horizontal },
  { src: "/assets/pictures/12-min.jpeg", ...horizontal },
  { src: "/assets/pictures/13-min.jpeg", ...horizontal },
  { src: "/assets/pictures/14-min.jpeg", ...horizontal },
  { src: "/assets/pictures/15-min.jpeg", ...horizontal },
];

const PhotoCollage = () => {
  return (
    <Box px={1} pt={5}>
      <PhotoAlbum
        layout="columns"
        photos={photos}
        componentsProps={() => ({
          imageProps: { style: { borderRadius: "15px" } },
        })}
      />
    </Box>
  );
};

export default PhotoCollage;
