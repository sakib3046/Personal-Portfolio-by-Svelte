<script>
    // @ts-ignore
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
  import Projectcard from './projectcard.svelte';
  
    // @ts-ignore
    let carousel; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
      // @ts-ignore
      carousel.goToNext()
    }

    let projects=[
        {title: "Sanity Project",
            shortDes:"This is a test project. It will complete soon",
            image:"./src/Asstes/sanity.png",
            p_url:""

        },
        {title: "Svelte Project",
            shortDes:"This is a test project. It will complete soon",
            image:"./src/Asstes/Svelte.png",
            p_url:""

        },
        {title: "E-commerce Project",
            shortDes:"This is a test project. It will complete soon",
            image:"./src/Asstes/ecommerce.jpg",
            p_url:""

        }
    ]

  </script>
  <div class="w-screen m-auto flex justify-center mt-10 font-black text-4xl">
<h1>My Projects</h1>
  </div>
  {#if browser}
    <Carousel
    autoplay
    autoplayDuration={4000}
    autoplayProgressVisible
    pauseOnFocus
      bind:this={carousel}
    >
  {#each projects as project}
  <div class="my-6 w-screen">
    <Projectcard image={project.image} shortDes={project.shortDes} title={project.title}/>
  </div>

  {/each}
    </Carousel>
  {/if}
  