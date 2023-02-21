<script>
  export let text;
  export let variant;

  let classes = variant + " " + $$props.class;
</script>

<button class={classes}>{text}</button>

<style>
  button {
    font-family: 'Segoe UI', 'Open Sans';
    font-size: 1rem;
    font-weight: 600;
    height: 2.5rem;
    padding: 0 .75rem;
    outline: none;
    border: none;
    border-radius: 7px;
    box-sizing: border-box;
  }

  button.gradient {
    color: var(--pure-white);
    background-image: linear-gradient(60deg, var(--primary-color) 10%, var(--accent-color) 90%);
    border: 0;
    background-size: 100%;
    transition: background-size ease-in-out 0.15s;
  }

  button.outlined {
    background-color: transparent;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    transition: all ease-in-out 0.15s;
  }

  button.outlined:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  button:hover {
    background-size: 200%;
    cursor: pointer;
  }

  button:active {
    transform: translateY(1px);
  }

</style>