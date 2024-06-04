<script>
  import imageUrlBuilder from '@sanity/image-url';
  import{sanityClient} from '../lib/sanityClient';
  import Header from "../components/header/header.svelte";
  import About from '../components/about/about.svelte';
  import Projects from '../components/projects/projects.svelte';
  export let data;

  const builder = imageUrlBuilder(sanityClient);

  let headerimageUrl = builder.image(data.data[0].portrait).url();
  console.log(data.data[0])

</script>
<div class="px-6 md:px-10">
  <Header name={data.data[0].name} headerImage={headerimageUrl} />
  <About/>
  <Projects/>
</div>

