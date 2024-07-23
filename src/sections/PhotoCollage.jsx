import { Box } from "@mui/material";
import PhotoAlbum from "react-photo-album";
const vertical = { height: 1386, width: 924 };
const horizontal = { height: 924, width: 1386 };

const photos = [
  { src: "/assets/pictures/osiris/proposal.jpg", ...vertical },
  { src: "/assets/pictures/osiris/h-1.jpg", ...horizontal },
  { src: "/assets/pictures/osiris/h-3.jpg", ...horizontal },
  { src: "/assets/pictures/osiris/v-1.jpg", ...vertical },
  { src: "/assets/pictures/osiris/h-2.jpg", ...horizontal },
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
