import { sanityClient } from '../lib/sanityClient';

import { error } from '@sveltejs/kit';
import groq from 'groq'
export async function load() {
    const data = await sanityClient.fetch(groq`*[_type == "site"]`);


    if (!data) {
        throw error(404);
        
    }
    return {data}

  }
