<script lang="ts">
  import ContactMe from "../NavComponent/contactMe.svelte";
  export let logo:string;
  export let options:any;
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    console.log(isMenuOpen);
  }
</script>


<div class="flex flex-row justify-between">
  <div class=" flex flex-row justify-center ">
    <a href="">
        <img src={logo} class="h-7 w-7" alt="">
    </a>
</div>
  <div class="">
    <div class="flex flex-col items-center {isMenuOpen ? 'hidden' : ''}">
      <button on:click={toggleMenu}>
        <i class="fa-solid fa-bars hover:text-deep-orange navFont"></i>
      </button>
    </div>
    <div class="flex flex-col items-end  {isMenuOpen ? '' : 'hidden'} ">
      <button on:click={toggleMenu}>
        <i class="fa-solid fa-square-xmark hover:text-deep-orange navFont"></i>
      </button>
      <div class=" bg-white/90 px-10 py-5 rounded-2xl backdrop-blur-sm text-center absolute top-12 shadow-2xl ">
        <div class="flex flex-col text-xl">
          {#each options as option}
            <a href={option.link}>{option.name}</a>
          {/each}
        </div>
        <div class="pt-6"><ContactMe /></div>

      </div>
    </div>
  </div>
</div>
