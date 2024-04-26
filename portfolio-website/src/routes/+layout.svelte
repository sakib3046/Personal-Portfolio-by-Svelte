<script>
    import "../app.css";
    import imageUrlBuilder from '@sanity/image-url';
    import{sanityClient} from '../lib/sanityClient';
    import Navbar from "../components/Navbar/navbar.svelte";
    export let data;
    const builder = imageUrlBuilder(sanityClient);
    let logo = builder.image(data.data[0].logo).url();
    
    
  </script>
  <slot />
  <Navbar logo={logo}/>