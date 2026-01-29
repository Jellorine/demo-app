import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ChildProduct } from "@/types/product";

interface Props {
  open: boolean;
  onClose: () => void;
  product: ChildProduct | null;
  loading: boolean;
}

export default function Popup({ open, onClose, product, loading }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      fullScreen={isMobile}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {loading ? "Loading Details..." : product?.title}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
            <CircularProgress />
          </Box>
        ) : (
          product && (
            <Box>
              <img
                src={product.imageUrl}
                alt={product.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                {product.price}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                Category: {product.category}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {product.description}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, fontStyle: "italic" }}
              >
                **************
              </Typography>
            </Box>
          )
        )}
      </DialogContent>
    </Dialog>
  );
}
