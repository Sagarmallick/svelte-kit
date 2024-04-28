<script>
    let emptyAddress=''
    export let data 
    const {addressList}=data 
</script>

<h1>select your address</h1>

<select bind:value={emptyAddress}>
    <option value="">pick an address</option>
        {#each addressList as mapAddress}
        <option value={mapAddress}>{mapAddress}</option>
        {/each}
    
</select>