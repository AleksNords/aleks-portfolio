<script>
  export let href;
  export let src;
  export let alt;
</script>

<a {href} rel="noopener noreferrer" target="_blank">
  <img {src} {alt}/>
</a>


<style>
  a {
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px var(--accent-color) solid;
    border-radius: 5px;
    transition: border-color ease-in-out 0.15s;
  }

  a:hover {
    border-color: var(--primary-color);
  }

  img {
    width: 80%;
    height: 80%;
  }
</style>