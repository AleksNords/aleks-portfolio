<script>
	import logo from './svelte-logo.svg';
	import github from './github-logo.svg';
  import linkedin from './linkedin-logo.svg';
	import HeaderAnchor from './HeaderAnchor.svelte';

  //TODO: Find more links to include in the header
</script>

<header>
	<div class="corner-logo">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>
	<ul>
		<li>
			<HeaderAnchor src={github} alt={'Github profile'} href={'https://github.com/AleksNords'} />
		</li>

		<li>
			<HeaderAnchor src={linkedin} alt={'LinkedIn profile'} href={'https://linkedin.com/in/aleks-nordstrand-9bba08203'} />
		</li>
	</ul>
</header>

<style>
	* {
		margin: 0;
	}

	header {
		display: flex;
    justify-content: space-between;
		background-color: #161b22;
	}

	.corner-logo {
		width: 4em;
		height: 4em;
	}

	.corner-logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner-logo img {
		width: 3em;
		height: 3em;
	}

	ul {
		list-style-type: none;
    display: flex;
    align-items: center;
    width: 6em;
	}

	ul > li {
		display: inline-block;
    align-self: center;
    margin-left: 10px;
	}
</style>
