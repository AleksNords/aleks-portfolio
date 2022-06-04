<script>
	import logo from './svelte-logo.svg';
</script>

<header>
  <div class="corner-logo">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>
</header>

<style>
  header {
    display: flex;
  }

  .corner-logo {
		width: 3em;
		height: 3em;
	}

  .corner-logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

  .corner-logo img {
    width: 2em;
    height: 2em;
  }
</style>