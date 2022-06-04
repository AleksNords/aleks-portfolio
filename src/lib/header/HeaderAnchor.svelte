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
    border: 1px var(--primary-color) solid;
    border-radius: 5px;
  }

  img {
    width: 80%;
    height: 80%;
  }
</style>