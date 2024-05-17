-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fone" TEXT,
    "userImage" TEXT,
    "tipo" TEXT NOT NULL,
    "status" TEXT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "userCommentsId" INTEGER,
    CONSTRAINT "User_userCommentsId_fkey" FOREIGN KEY ("userCommentsId") REFERENCES "UserComments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Title" TEXT NOT NULL,
    "image1" TEXT NOT NULL,
    "image2" TEXT,
    "image3" TEXT,
    "image4" TEXT,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "produtoCommentsId" INTEGER,
    CONSTRAINT "Produto_produtoCommentsId_fkey" FOREIGN KEY ("produtoCommentsId") REFERENCES "ProdutoComments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserComments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ProdutoComments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "comment" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "produtoCommentsId" INTEGER,
    "userCommentsId" INTEGER,
    CONSTRAINT "Comments_produtoCommentsId_fkey" FOREIGN KEY ("produtoCommentsId") REFERENCES "ProdutoComments" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Comments_userCommentsId_fkey" FOREIGN KEY ("userCommentsId") REFERENCES "UserComments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Likes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "like" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Likes_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Likes_produtoId_key" ON "Likes"("produtoId");
