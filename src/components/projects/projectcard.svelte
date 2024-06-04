<script>
export let image;
export let title;
export let shortDes;
</script>

<div class=" bg-200/30 backdrop-blur-sm  rounded-lg p-6 flex flex-col justify-center m-auto">
    <img src={image} alt="" class="object-cover h-[400px] rounded-lg">
    <a href="/">
        <h1 class="text-2xl mt-4 font-bold hover:font-black duration-200">{title}</h1>
    </a>

    <p>{shortDes}</p>
</div>