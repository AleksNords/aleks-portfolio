<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Button from '../lib/Button.svelte';
	import VanillaTilt from 'vanilla-tilt';

	let visible = false;

	let jsonDetails;

	onMount(() => {
		visible = true;

		VanillaTilt.init(jsonDetails, {
			startX: 20,
			glare: true,
			'max-glare': 0.1,
			perspective: 800,
			scale: 1.1,
			reset: false,
			'full-page-listening': true,
			reverse: true
		});
	});

	function getCurrentAge() {
		let today = new Date();
		let birthDate = new Date('2000/08/18');

		let age = today.getFullYear() - birthDate.getFullYear();
		let months = today.getMonth() - birthDate.getMonth();
		if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}
</script>

<svelte:head>
	<title>Aleks Nordstrand</title>
	<meta name="description" content="Aleks Nordstrand portfolio" />
</svelte:head>

<main>
	<section id="home">
		<div id="text-introduction">
			<h1>
				Hello, my name is
				{#if visible}
					<span transition:fade={{ duration: 700 }}> Aleks </span>
				{/if}
			</h1>
			<p>
				I'm a {getCurrentAge()} year old developer that loves working with frontend, backend,
				UX and design.
			</p>
			<Button class={'first-button'} text={'Get to know me'} variant={'gradient'} />
			<Button text={'See my work'} variant={'outlined'} />
		</div>
		<div id="json-parent">
			<div bind:this={jsonDetails} class="json">
				<img
					id="json-img"
					alt={'details about Aleks as a developer'}
					src={'/images/carbonStats.png'}
				/>
			</div>
		</div>
	</section>

	<section id="about">
		<div class="right-side-header">
			<h1 class="section-header">About Me</h1>
		</div>
    <div id="about-content">
      <img class="memoji" alt={'avatar of Aleks waving'} src="/images/memojiWave.png"/>
      <p id="about-paragraph">I'm an aspiring developer living in Ålesund that's looking for his first job in software development.
        I love learning and experimenting with new things, and love maintaining a positive outlook on life. I love working in teams, especially when theres alot of knowledge
        to be shared that I can grow and benefit from. I'm very motivated by positive feedback, as well as seeing the product I'm working on come to life.
        In addition to front and back-end work I also have an eye for design and UX, which in turn makes me prefer the front-end work whenever I'm given the choice.
        In my freetime my passions lie in working out 🏋️, gaming 🎮 and motorcycling 🏍️
      </p>
    </div>
	</section>
</main>

<style>
	* {
		margin: 0;
	}

	main {
		margin: 5%;
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	main::-webkit-scrollbar {
		display: none;
	}

	section {
		display: flex;
		width: 100%;
		height: 100vh;
	}

	main section {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	p {
		margin-bottom: 1rem;
	}

	span {
		background: -webkit-linear-gradient(60deg, var(--primary-color) 10%, var(--accent-color) 90%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		/* Fixes clipping issue on span */
		padding-left: 1%;
	}

	h1 {
		font-family: 'League Spartan';
		font-weight: bold;
		color: var(--bold-text-color);
		font-size: 2.3rem;
	}

	p {
		color: var(--text-color);
		font-size: 18px;
	}

	#text-introduction {
		max-width: 50%;
	}

	#json-parent {
		flex-grow: 100;
		display: flex;
		justify-content: center;
	}

	.json {
		margin: 5% 0 0 5%;
		right: 2.5rem;
		padding: 2.5rem;
		background: linear-gradient(135deg, #fc00ff, #00dbde);
		height: fit-content;
		max-width: 20rem;
		border-radius: 10px;
	}

	#json-img {
		transform: translateZ(30px);
		box-shadow: 0 10px 25px 10px rgb(51 51 51 / 90%);
	}

	section :global(.first-button) {
		margin-right: 1rem;
	}

	.right-side-header {
		width: 100%;
		height: fit-content;
		display: flex;
		justify-content: flex-end;
	}

	.section-header {
		height: fit-content;
		background: -webkit-linear-gradient(260deg, var(--primary-color) 40%, var(--accent-color) 60%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
    padding-left: 1%;
	}

	#about {
    flex-direction: column;
    align-items: flex-start;
	}

  #about-content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #about-paragraph {
    margin-top: 5rem;
    width: 30%;
    letter-spacing: 0.1rem;
  }

  /* TODO: Animate on visibility */
	.memoji {
    margin-left: 10%;
		max-width: 424px;
		max-height: 420px;
	}

	@media only screen and (max-width: 600px) {
		h1 {
			min-height: 240px;
		}
	}
</style>
