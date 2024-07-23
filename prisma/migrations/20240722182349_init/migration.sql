-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "role_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "Tickets" (
    "ticket_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "assets_url_1" TEXT,
    "assets_url_2" TEXT,
    "assets_url_3" TEXT,
    "user_id" INTEGER NOT NULL,
    "nomenclature_id" INTEGER NOT NULL,
    "period_id" INTEGER NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("ticket_id")
);

-- CreateTable
CREATE TABLE "Period" (
    "period_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("period_id")
);

-- CreateTable
CREATE TABLE "Nomenclatures" (
    "nomenclature_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Nomenclatures_pkey" PRIMARY KEY ("nomenclature_id")
);

-- CreateTable
CREATE TABLE "Status" (
    "status_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("status_id")
);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Roles"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_nomenclature_id_fkey" FOREIGN KEY ("nomenclature_id") REFERENCES "Nomenclatures"("nomenclature_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_period_id_fkey" FOREIGN KEY ("period_id") REFERENCES "Period"("period_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status"("status_id") ON DELETE RESTRICT ON UPDATE CASCADE;
