import React, { memo } from "react";
import MovieCard from "../MovieCard";
import { CardGridLayout, CardGridLayoutItem } from "../../layouts/CardGridLayout";

const MemoizedMovieCard = memo(MovieCard);

export default function MovieCardsLoading() {
  return (
    <CardGridLayout>
      {[...Array(12)].map((_, index) => (
        <CardGridLayoutItem key={index}>
          <MemoizedMovieCard loading={true} />
        </CardGridLayoutItem>
      ))}
    </CardGridLayout>
  );
}
