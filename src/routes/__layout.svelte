<script>
	import Header from '$lib/header/Header.svelte';
	import { theme } from '$lib/stores'
	import '../app.css';
</script>

<svelte:head>
  <meta name="color-scheme" content={$theme}/> <link rel="stylesheet" href={`../static/themes/${$theme}.css`} />
</svelte:head>

<Header/>

<main>
	<slot />
</main>