<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let visible = false;

  onMount( ()=> {
    visible = true;
  })
</script>

<svelte:head>
	<title>Aleks Nordstrand</title>
	<meta name="description" content="Aleks Nordstrand portfolio" />
</svelte:head>

<h1>Hello, my name is 
  {#if visible}
  <span transition:fade="{{duration: 700}}">
    Aleks
  </span>
  {/if}
</h1>
<p>Welcome to my portfolio.</p>


<style>

  * {
    margin: 0;
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
    margin: 5% 0 0 5%;
    color: var(--pure-white);
    font-size: 4em;
  }

  p {
    color: var(--text-color);
    margin-left: 5%;
  }

  @media only screen and (max-width: 600px) {
  h1 {
    min-height: 240px;
  }
}

</style>