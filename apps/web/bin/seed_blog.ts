import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';
import configPromise from '@payload-config';
import type { BasePayload } from 'payload';
import { getPayload } from 'payload';
import { slugify } from 'voca';
import downloadImage from './downloadImage';

const randomDoc = <T extends Array<object>>(arr: T) => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx] as T[number];
};

interface SeedFnProps {
  payload: BasePayload;
  count?: number;
}

const seedPage = async ({ payload }: SeedFnProps) => {
  console.info(`@-->seeding blog index page`);

  await payload.updateGlobal({
    slug: 'blogIndex',
    data: {
      pageTitle: 'Blog',
      slug: 'blog'
    }
  });
};

const seedTags = async ({ payload, count = 5 }: SeedFnProps) => {
  console.info(`@-->seeding ${count} tags`);

  const promises = [];
  for (let i = 0; i < count; i += 1) {
    promises.push(
      payload.create({
        collection: 'tags',
        data: {
          label: faker.lorem.word()
        }
      })
    );
  }

  await Promise.all(promises);
};

const downloadImages = ({
  count = 10,
  category = 'abstract',
  width = 640,
  height = 480
}) => {
  const promises = [];
  for (let i = 0; i < count; i += 1) {
    promises.push(
      downloadImage(
        faker.image.urlLoremFlickr({
          category,
          width,
          height
        })
      )
    );
  }

  return Promise.all(promises);
};

const seedImages = async ({
  payload,
  count = 10,
  category = 'abstract',
  width = 640,
  height = 480
}: SeedFnProps & { category?: string; width?: number; height?: number }) => {
  console.info(`@-->seeding ${count} ${category} images`);
  const promises = [];

  const images = await downloadImages({ count, category, width, height });

  for (let i = 0; i < count; i += 1) {
    promises.push(
      payload.create({
        collection: 'images',
        data: {
          alt: faker.lorem.sentence()
        },
        filePath: images[i]
      })
    );
  }

  return Promise.all(promises);
};

const seedAuthors = async ({ payload, count = 5 }: SeedFnProps) => {
  const promises = [];

  const images = await seedImages({ payload, count, category: 'portrait' });

  console.info(`@-->seeding ${count} authors`);

  for (let i = 0; i < count; i += 1) {
    promises.push(
      payload.create({
        collection: 'authors',
        data: {
          fullName: faker.person.fullName(),
          image: images[i].id,
          jobTitle: faker.person.jobTitle(),
          bio: {
            ...genRichText([
              { type: 'paragraph', text: faker.lorem.paragraph(1) }
            ])
          }
        }
      })
    );
  }
};

const seedPosts = async ({ payload, count = 10 }: SeedFnProps) => {
  const promises = [];
  const tags = await payload.find({
    collection: 'tags'
  });

  const authors = await payload.find({ collection: 'authors' });

  const images = await seedImages({
    payload,
    count,
    category: 'abstract',
    width: 1440,
    height: 1000
  });

  console.info(`@-->seeding ${count} posts`);
  for (let i = 0; i < count; i += 1) {
    const title = faker.lorem.sentence();
    const slug = slugify(title);
    promises.push(
      payload.create({
        collection: 'posts',
        data: {
          title,
          slug,
          subTitle: faker.lorem.sentence(),
          date: faker.date.past().toISOString(),
          tags: [randomDoc(tags.docs).id],
          authors: [randomDoc(authors.docs)?.id],
          coverImage: images[i].id,
          thumbnail: images[i].id,
          content: [
            {
              content: {
                ...genRichText([
                  { type: 'paragraph', text: faker.lorem.paragraph(1) }
                ])
              }
            }
          ]
        }
      })
    );
  }

  return Promise.all(promises);
};

const seed = async (): Promise<void> => {
  const payload = await getPayload({ config: configPromise });

  await seedPage({ payload });
  await seedTags({ payload });
  await seedAuthors({ payload });
  await seedPosts({ payload });

  console.info('@-->successfully seeded the blog!');

  process.exit(0);
};

export default seed();
