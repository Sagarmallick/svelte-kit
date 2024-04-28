<script>
	export let data;
	const products = data.products;
    const Component = data.Component
</script>

<h1>products list</h1>
<h2>{data.title}</h2>
{#each products as product (product)}
	<Component {product} />
{/each}
