import { faker } from '@faker-js/faker';
import configPromise from '@payload-config';
import type { BasePayload } from 'payload';
import { getPayload } from 'payload';
import downloadImage from './downloadImage';

interface SeedFnProps {
  payload: BasePayload;
  count?: number;
}

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

const imageFn = async ({ count = 10 }) => {
  const payload = await getPayload({ config: configPromise });
  const images = await seedImages({ payload, count, category: 'abstract' });
  return images;
};

export default imageFn;
