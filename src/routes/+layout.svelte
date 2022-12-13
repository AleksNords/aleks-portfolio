<script>
	import Header from '$lib/header/Header.svelte';
	import { theme } from '$lib/stores';
	import { browser } from '$app/environment';
	import '../app.css';

	//Update localstorage when theme store changes
	if (browser) {
		theme.subscribe((value) => {
			localStorage.setItem('theme', value === 'light' ? 'light' : 'dark');
		});
	}
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme} />
	<link rel="stylesheet" href={`../themes/${$theme}.css`} /></svelte:head>
<Header/>

<main>
	<slot />
</main>