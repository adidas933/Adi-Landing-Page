import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import { galleryImages } from "../../Utils/Variables/Variables";

export function Gallery(): JSX.Element {
  const [index, setIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const cols = isXs ? 1 : isMd ? 2 : 3;

  // Number of images to show when collapsed
  const visibleCount = 9;
  const imagesToShow = showAll ? galleryImages : galleryImages.slice(0, visibleCount);

  return (
    <Box
      id="gallery"
      sx={{
        px: 4,
        textAlign: "center",
        overflowX: "hidden",
      }}
    >
      <Typography variant="h4" gutterBottom>
        גלריה
      </Typography>

      <ImageList
        sx={{
          justifyContent: "center",
          maxWidth: 1200,
          margin: "0 auto",
        }}
        cols={cols}
        gap={8}
      >
        {imagesToShow.map((item, i) => (
          <ImageListItem
            key={i}
            sx={{
              cursor: "pointer",
              borderRadius: 2,
              overflow: "hidden",
            }}
            onClick={() => setIndex(showAll ? i : i)}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {galleryImages.length > visibleCount && (
        <Button
          variant="outlined"
          onClick={() => setShowAll((prev) => !prev)}
          sx={{ mt: 2 }}
        >
          {showAll ? "הראה פחות" : "הראה עוד"}
        </Button>
      )}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={galleryImages.map((img) => ({ src: img.src }))}
        plugins={[Thumbnails]}
      />
    </Box>
  );
}
