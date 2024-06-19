<script>
    import {PortableText} from '@portabletext/svelte'
    export let data;
    console.log(data.data[0])
</script>

<PortableText value={data.data[0].content}/>