<script>
  export let text;
  export let variant;

  let classes = variant + " " + $$props.class;
</script>

<button class={classes}>{text}</button>

<style>
  button {
    font-family: 'Segoe UI', 'Open Sans';
    font-size: 1.3rem;
    font-weight: 600;
    height: 3rem;
    padding: 0 1rem;
    outline: none;
    border: none;
    border-radius: 7px;
    box-sizing: border-box;
  }

  button.gradient {
    color: var(--pure-white);
    background-image: linear-gradient(60deg, var(--primary-color) 3%, var(--accent-color) 97%);
    border: 0;
  }

  button.outlined {
    background-color: transparent;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    transition: border-color ease-in-out 0.15s;
  }

  button.outlined:hover {
    border-color: var(--primary-color);
  }

  button:hover {
    background-size: 200%;
    cursor: pointer;
  }

  button:active {
    transform: translateY(1px);
  }

</style>