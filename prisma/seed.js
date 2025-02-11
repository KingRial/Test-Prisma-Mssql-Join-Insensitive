const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function main() {
  // Unit Measures
  await prisma.uM.upsert({where: {Cd_UM: 'KG'}, update: {}, create: {Cd_UM: 'KG'}})
  await prisma.uM.upsert({where: {Cd_UM: 'M2'}, update: {}, create: {Cd_UM: 'M2'}})
  await prisma.uM.upsert({where: {Cd_UM: 'M3'}, update: {}, create: {Cd_UM: 'M3'}})
  await prisma.uM.upsert({where: {Cd_UM: 'L'}, update: {}, create: {Cd_UM: 'L'}})
  await prisma.uM.upsert({where: {Cd_UM: 'T'}, update: {}, create: {Cd_UM: 'T'}})
  await prisma.uM.upsert({where: {Cd_UM: 'KM'}, update: {}, create: {Cd_UM: 'KM'}})

  // Articles (Cd_UM Uppercase)
  await prisma.article.upsert({where: {Cd_Article: 'ART1', Cd_UM: 'KG'}, update: {}, create: {Cd_Article: 'ART1', Cd_UM: 'KG'}})
  await prisma.article.upsert({where: {Cd_Article: 'ART2', Cd_UM: 'M2'}, update: {}, create: {Cd_Article: 'ART2', Cd_UM: 'M2'}})
  await prisma.article.upsert({where: {Cd_Article: 'ART3', Cd_UM: 'M3'}, update: {}, create: {Cd_Article: 'ART3', Cd_UM: 'M3'}})

  // Articles (Cd_UM Lowercase)
  await prisma.article.upsert({where: {Cd_Article: 'ARTfoo1', Cd_UM: 'l'}, update: {}, create: {Cd_Article: 'ARTfoo1', Cd_UM: 'l'}})
  await prisma.article.upsert({where: {Cd_Article: 'ARTfoo2', Cd_UM: 't'}, update: {}, create: {Cd_Article: 'ARTfoo2', Cd_UM: 't'}})
  await prisma.article.upsert({where: {Cd_Article: 'ARTfoo3', Cd_UM: 'km'}, update: {}, create: {Cd_Article: 'ARTfoo3', Cd_UM: 'km'}})

  // Disconnect
  await prisma.$disconnect()
}

main();