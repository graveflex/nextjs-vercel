import { Media } from '@web/payload/payload-types';

const isMedia = (object: Media | number): object is Media => {
  return (object as Media).url !== undefined;
};

export default isMedia;
