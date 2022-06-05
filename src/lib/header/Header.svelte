<script>
	import logo from './svelte-logo.svg';
	import github from './github-logo.svg';
  import linkedin from './linkedin-logo.svg';
	import HeaderAnchor from './HeaderAnchor.svelte';
  import ThemeSwitch from './ThemeSwitch.svelte';

  let socials = [
    {
      src: github,
      alt: "Github profile",
      href: "https://github.com/AleksNords"
    },
    {
      src: linkedin,
      alt: "LinkedIn profile",
      href: "https://linkedin.com/in/aleks-nordstrand-9bba08203"
    }]

  let navigationLinks = [
    {
      text: "About me",
      href: "/"
    },
    {
      text: "Projects",
      href: "/"
    },
    {
      text: "Contact",
      href: "/"
    }
  ]
    

  //TODO: Find more links to include in the header
  //TODO: Center middle links, they are slightly offset to the left
</script>

<header>
	<div class="corner-logo">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

  <nav>
    <ul class="navigation-links-list">
      {#each navigationLinks as { text, href }}
        <li>
          <a class="navigation-link" {href}>{text}</a>
        </li>
      {/each}
    </ul>
  </nav>


  <!-- TODO: fix this, ThemeSwitch shouldn't be inside the UL-->
	<ul>
    <li>
      <ThemeSwitch/>
    </li>
    {#each socials as { src, alt, href }}
      <li>
        <HeaderAnchor {src} {alt} {href}/>
      </li>
    {/each}
	</ul>
</header>

<style>

	* {
		margin: 0;
	}

	header {
		display: flex;
    justify-content: space-between;
		background-color: var(--header-color);
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2)); 
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

  .navigation-link {
    font-family: 'Segoe UI', Verdana, sans-serif;
    font-size: 1.5em;
    font-weight: 400;
    text-decoration: none;
    color: var(--accent-color);
    transition: color ease-in-out 0.15s;
  }

  .navigation-link:hover {
    color: var(--primary-color);
  }

  .navigation-links-list > li:not(:last-child) {
    margin-right: 40px;
  }

  .navigation-links-list {
    justify-self: center;
    height: 100%;
  }

	ul {
    padding: 0;
		list-style-type: none;
    display: flex;
    align-items: center;
	}

	ul > li {
		display: inline-block;
    margin-right: 10px;
	}
</style>
