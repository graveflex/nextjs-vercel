import { faker } from '@faker-js/faker';
import configPromise from '@payload-config';
import fs from 'fs';
import type { BasePayload } from 'payload';
import { getPayload } from 'payload';
import tmp from 'tmp';

interface SeedFnProps {
  payload: BasePayload;
  count?: number;
}

async function downloadImage(url: string): Promise<string> {
  try {
    // Fetch the image
    const response = await fetch(url);

    // Check if response is ok
    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    // Convert response body to buffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Create a temporary file
    const tempFile = tmp.fileSync({ postfix: '.jpg' });

    // Write image data to the temporary file
    fs.writeFileSync(tempFile.name, buffer);

    // Return the path to the temporary file
    return tempFile.name;
  } catch (error) {
    console.error('Error downloading image:', error);
    throw error;
  }
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

const imageFn = async () => {
  const count = 10;
  const payload = await getPayload({ config: configPromise });
  const images = await seedImages({ payload, count, category: 'abstract' });
  return images;
};

export default imageFn;
