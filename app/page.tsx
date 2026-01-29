"use client";

import { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Skeleton,
} from "@mui/material";
import { ChildProduct } from "@/types/product";
import Popup from "@/components/Popup";

export default function Home() {
  const [products, setProducts] = useState<ChildProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [detailProduct, setDetailProduct] = useState<ChildProduct | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    fetch("/api/tiles")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleCardClick = async (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
    setDetailLoading(true);

    const res = await fetch(`/api/tiles/${id}`);
    const data = await res.json();

    setDetailProduct(data);
    setDetailLoading(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        Kids Corner
      </Typography>

      <Grid container spacing={3}>
        {loading
          ? Array.from(new Array(7)).map((_, index) => (
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <Skeleton variant="rectangular" height={200} />
                <Skeleton variant="text" />
                <Skeleton variant="text" width="60%" />
              </Grid>
            ))
          : products.map((product) => (
              <Grid key={product.id} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    "&:hover": { boxShadow: 6 },
                  }}
                  onClick={() => handleCardClick(product.id)}
                >
                  <CardMedia
                    component="img"
                    image={product.imageUrl}
                    alt={product.title}
                    sx={{
                      height: 200,
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.category}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                      {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>

      <Popup
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={detailProduct}
        loading={detailLoading}
      />
    </Container>
  );
}
