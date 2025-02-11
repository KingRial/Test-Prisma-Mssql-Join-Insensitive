const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

async function main() {
  // Test JOIN only case sensitive
  console.info('----- GETTING all the articles where the JOIN is case sensitive (All should be fine)')
  const results1 = await db.article.findMany({
    include: {
      UM: true
    },
    skip: 0,
    take: 3
  });
  console.log(results1);

  // Test JOIN only case INsensitive
  console.info('----- GETTING all the articles where the JOIN is case INsensitive (All should be fine)')
  const results2 = await db.article.findMany({
    include: {
      UM: true
    },
    skip: 3,
    take: 3
  });
  console.log(results2);

  // Test JOIN both case sensitive and INsensitive
  console.info('----- GETTING all the articles where the JOIN is both case sensitive AND INsensitive (BOOOOM!!!!!)')
  try {
    const results3 = await db.article.findMany({
      include: {
        UM: true
      },
    });
    console.log(results3);
  } catch (error) {
    console.error('----- This is the error to fix: %o', error);
  }
  
};


main();
