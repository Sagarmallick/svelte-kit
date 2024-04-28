<script>
   export let data;
   const products=data.products
</script>
<h1>products list</h1>
<h2>{data.title}</h2>
{#each products as product (product)}
<div>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <hr/>
</div>
{/each}

