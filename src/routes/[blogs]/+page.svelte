<script>
    import Blog from "../../components/blog/blog.svelte"
    export let data;
</script>
<div class="h-screen bg-100 ">
    <div class="p-6">
        <div class=" bg-white mt-8 rounded-3xl shadow-xl">
            <Blog blogData={data.data[0]}/>

        </div>
    </div>

</div>
