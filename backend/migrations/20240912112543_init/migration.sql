-- CreateTable
CREATE TABLE "MovieActors" (
    "actorId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "MovieActors_pkey" PRIMARY KEY ("actorId","movieId")
);

-- AddForeignKey
ALTER TABLE "MovieActors" ADD CONSTRAINT "MovieActors_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieActors" ADD CONSTRAINT "MovieActors_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
