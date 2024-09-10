import fs from 'fs';
import { faker } from '@faker-js/faker';
import tmp from 'tmp';

export default async function downloadImage(url: string): Promise<string> {
  try {
    // Fetch the image
    let response = await fetch(url);
    if (!response.ok) {
      const picsumUrl = faker.image.urlPicsumPhotos();
      response = await fetch(picsumUrl);
    }

    if (!response.ok) {
      const placeholditUrl = faker.image.urlPlaceholder();
      response = await fetch(placeholditUrl);
    }

    if (!response.ok) {
      const avatarUrl = faker.image.avatar();
      response = await fetch(avatarUrl);
    }

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
