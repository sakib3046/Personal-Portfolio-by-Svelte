<script lang="ts">
  import ContactMe from "../NavComponent/contactMe.svelte";
  import Dropdown from "./dropdown.svelte";
  export let logo: string;
  let scrollY = 0;
  $: yPosition =
    scrollY > 50
      ? "bg-white/90 p-4 rounded-2xl backdrop-blur-sm shadow-xl mt-2"
      : "";
  let navOptions = [
    { name: "Home", link: "" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Thoughts", link: "" },
  ];
</script>

<svelte:window bind:scrollY />
<div class="fixed left-0 top-0 z-50 w-full py-2 px-14 {yPosition}">
  <div class="hidden md:grid grid-cols-3">
    <div class=" flex flex-row justify-start">
      {#each navOptions as option}
        <div class="px-2 mx-1 navFont">
          <a href={option.link}>{option.name}</a>
        </div>
      {/each}
    </div>
    <div class=" flex flex-row justify-center">
      <a href="">
        <img src={logo} class="h-8 w-8" alt="" />
      </a>
    </div>
    <div class=" flex flex-row justify-end">
      <ContactMe />
    </div>
  </div>
  <div class="md:hidden">
    <Dropdown options={navOptions} {logo} />
  </div>
</div>
