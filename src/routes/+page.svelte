<script>
    import {goto,beforeNavigate, afterNavigate} from '$app/navigation'
    const handleClick=()=>{
        console.log('placing your order')
        goto('/products')
    }
    beforeNavigate((navigation)=>{
        console.log({before:navigation})
    })
    afterNavigate((navigation)=>{
        console.log({after:navigation})
    })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Deep Dive in Svelte Concepts</p>
<a href="/blog">blog</a>

<button on:click={handleClick}>place order</button>