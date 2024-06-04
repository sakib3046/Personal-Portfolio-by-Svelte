<script lang="ts">
    export let name:string;
    export let headerImage:string;
    // export let sociallinks:string;
</script>
<div class=" w-200 flex flex-col md:flex-row  mt-12  mb-10 justify-between">
    <div class=" w-full h-full shadow-xl rounded-lg flex flex-col p-4 bg-white/30 backdrop-blur-xl">
        <img src={headerImage} class="rounded-lg" alt="">
    </div>
    <div class=" w-full h-full flex flex-col p-2 m-auto justify-between">
        <div class="p-2 flex flex-col ">
            <h1 class="font-bold text-4xl">Hi! There,</h1>
            <h1 class="font-black text-4xl sm:text-6xl">I'm <span class="text-deep-orange">{name}</span></h1>
            <h1 class="font-black text-2xl sm:text-4xl">I'm a expert <span class="text-orange">Web Developer & Graphics Designer</span></h1>
            <p class="text-lg sm:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ad voluptas molestiae recusandae reiciendis eius, iusto, velit deleniti tempore explicabo placeat eos commodi sunt suscipit optio dolor possimus enim. Expedita?</p>
        </div>
        <div class="text-3xl sm:text-4xl text-center mt-4 md:mt-8 px-1 ">
            <a href=""><i class="fa-brands fa-square-facebook px-1 textHover hover:text-blue-600"></i></a>
            <a href=""><i class="fa-brands fa-square-instagram px-1 textHover hover:text-red-500"></i></a>
            <a href=""><i class="fa-brands fa-square-x-twitter px-1 textHover hover:text-black"></i></a>
            <a href=""><i class="fa-brands fa-linkedin px-1 textHover hover:text-blue-800"></i></a>
            <a href=""><i class="fa-brands fa-square-whatsapp px-1 textHover hover:text-green-600"></i></a>
            <a href=""><i class="fa-brands fa-square-github px-1 textHover hover:text-black"></i></a>
        </div>
    </div>
    
</div>