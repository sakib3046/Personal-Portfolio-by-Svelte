import { createClient } from '@sanity/client';

export const sanityClient = createClient({
    projectId: '0jhbsoiq',
    dataset: 'production',
    apiVersion:'2021-10-21',
    useCdn: false
  });
