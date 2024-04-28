<script>
    import {page} from '$app/stores'
</script>

<h2>{$page.status} {$page.error.message}</h2>
<p>{$page.error.hint}</p>