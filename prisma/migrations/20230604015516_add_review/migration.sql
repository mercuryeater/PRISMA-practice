-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "nombreModelId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_nombreModelId_fkey" FOREIGN KEY ("nombreModelId") REFERENCES "nombreModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
