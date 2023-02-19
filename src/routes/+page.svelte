<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Button from '../lib/Button.svelte';
  import VanillaTilt from 'vanilla-tilt';

  let visible = false;

  let jsonDetails;

  onMount( () => {
    visible = true;

    VanillaTilt.init(jsonDetails, {
      startX: 20,
      glare: true,
      "max-glare":  0.1,
      perspective: 800,
      scale: 1.1,
      reset: false,
      "full-page-listening": true,
      reverse: true
    });
  })

  function getCurrentAge() {
    let today = new Date();
    let birthDate = new Date("2000/08/18");

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
<h1>Hello, my name is
  {#if visible}
  <span transition:fade="{{duration: 700}}">
    Aleks
  </span>
  {/if}
</h1>
<p>I'm a {getCurrentAge()} year old aspiring developer that loves working with frontend, backend, UX and design.</p>
<Button class={"first-button"} text={"Get to know me"} variant={"gradient"}/>
<Button text={"See my work"} variant={"outlined"}/>
</div>
<div id="json-parent">
  <div bind:this={jsonDetails} class="json">
    <img alt={"details about Aleks as a developer"} src={"/images/carbonStats.png"}/>
  </div>
</div>
</section>

<section id="about">

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
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  main::-webkit-scrollbar {
  display: none;
  }

  section {
    display: flex;
    height: 100vh;
    width: 100%;
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
    background: linear-gradient(135deg, #fc00ff , #00dbde);
    height: fit-content;
    max-width: 20rem;
    border-radius: 10px;
  }

  img {
    transform: translateZ(30px);
    box-shadow: 0 10px 25px 10px rgb(51 51 51 / 90%);
  }

  section :global(.first-button) {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 600px) {
  h1 {
    min-height: 240px;
  }
}

</style>
