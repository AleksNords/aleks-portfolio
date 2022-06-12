<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Button from '../lib/Button.svelte';

  let visible = false;

  onMount( () => {
    visible = true;
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

<section>
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
</section>


<style>

  * {
    margin: 0;
    margin-bottom: 1rem;
  }

  section {
    margin: 5%; 
  }

  span {
    background: -webkit-linear-gradient(60deg, var(--primary-color) 10%, var(--accent-color) 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h1 {
    font-family: 'League Spartan';
    font-weight: bold;
    color: var(--bold-text-color);
    font-size: 4em;
  }

  p {
    color: var(--text-color);
    font-size: 18px;
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