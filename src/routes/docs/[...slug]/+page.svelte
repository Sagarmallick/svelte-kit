<script>
    import {page} from '$app/stores'
    const {slug}=$page.params
    console.log(slug)
    let slugArr=slug.split('/')
    console.log(slugArr)
</script>

{#if slugArr.length===1}
<h2>Viewing docs for feature {slugArr[0]}</h2>
{:else if slugArr.length===2}
<h2>Viewing docs for feature {slugArr[0]} and concept {slugArr[0]}</h2>
{/if}