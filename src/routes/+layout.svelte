<script>
  import "../app.css";
  import imageUrlBuilder from "@sanity/image-url";
  import { sanityClient } from "../lib/sanityClient";
  import Navbar from "../components/Navbar/navbar.svelte";
  import Footer from "../components/Footer/footer.svelte";
  export let data;
  const builder = imageUrlBuilder(sanityClient);
  let logo = builder.image(data.data[0].logo).url();
</script>

<Navbar {logo} />
<slot />
<Footer />
