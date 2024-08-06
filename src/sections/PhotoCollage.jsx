import { Box } from "@mui/material";
import PhotoAlbum from "react-photo-album";
const vertical = { height: 1386, width: 924 };
const horizontal = { height: 924, width: 1386 };

const photos = [
  { src: "/assets/pictures/osiris/proposal-n.png", ...vertical },
  { src: "/assets/pictures/osiris/h-1.png", ...horizontal },
  { src: "/assets/pictures/osiris/h-3.png", ...horizontal },
  { src: "/assets/pictures/osiris/h-2.png", ...horizontal },
  { src: "/assets/pictures/osiris/h-4.png", ...horizontal },
  { src: "/assets/pictures/osiris/h-5.png", ...horizontal },
  { src: "/assets/pictures/osiris/h-6.png", ...horizontal },
  { src: "/assets/pictures/osiris/v-1.png", ...vertical },
  { src: "/assets/pictures/osiris/h-7.png", ...horizontal },
  { src: "/assets/pictures/osiris/h-8.png", ...horizontal },
  { src: "/assets/pictures/osiris/h-9.png", ...horizontal },
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
