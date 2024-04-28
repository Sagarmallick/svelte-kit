<script>
   export let data
   const product=data.product
</script>

<h1>product detail</h1>
<div>
    <h2>{product.title} - ${product.price}</h2>
    <p>{product.description}</p>
</div>