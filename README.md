# Prisma - Test Case Insesitive Join
This project is a simple demo to show where the Prisma Engine breaks on joining case insesitive MSQL DB

## Initialization
```sh
npm i
npx prisma generate
```

## Launch Test
```sh
# Launching MSSQL DB on docker
docker compose -f ./docker/docker-compose.yml up -d
# Migrate the DB
npm run migrate
# Seed the DB
npx prisma db seed
# Launching demo and expecting a result
npm run dev
```