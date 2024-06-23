<script>
    import {PortableText} from '@portabletext/svelte'
    import ListItem from '../../components/ListItem.svelte'
    export let data;
    console.log(data.data[0])
</script>



<PortableText
        value={data.data[0].content}
        components={{
    // types: {
    //   // block-level components
    //   callout: Callout,
    //   // inline-level components
    //   userInfo: UserInfo
    // },
    // marks: {
    //   absUrl: AbsoluteURL,
    //   // Overwrite default mark renderers
    //   strong: CustomStrong
    // },
    // block: {
    //   normal: CustomParagraph,
    //   blockquote: Quote,
    //   // Re-using the same component across multiple styles
    //   h1: CustomHeading,
    //   h2: CustomHeading,
    //   h3: CustomHeading,
    //   // Custom user-defined style
    //   textCenter: CentralizedText
    // },
    // list: {
    //   // Swap only the list parts you need
    //   bullet: UnorderedListWrapper,
    //   // Custom user-defined list type
    //   checklist: ChecklistWrapper
    // },
    list: {
      bullet: ListItem,
      // checklist: ChecklistItem
    }
  }}
/>