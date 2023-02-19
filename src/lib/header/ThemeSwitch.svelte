<script>
  import { theme } from '$lib/stores';
  let dark = $theme === "dark";

  $: $theme = dark ? "dark" : "light";
</script>

<label class="switch">
  <input type="checkbox" bind:checked={dark}>
  <span class="{dark ? "moon" : "sun"}"/>
</label>

<style>
  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 1.55rem;
}

span {
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--light-primary-color);
  box-shadow: -5px 5px 15px -7px var(--accent-color),
              inset 5px -5px 12px -9px #FF9800;
  -webkit-transition: .3s;
  transition: all .3s;
}

span:before {
  position: absolute;
  content: "";
  height: 1.25em;
  width: 1.25em;
  left: 4px;
  bottom: 4px;
  -webkit-transition: .3s;
  transition: .3s;
}

input[type="checkbox"]{
  display: none;
}

span.moon:before {
  background-image: url("./moon.svg");
}

span.sun:before {
  background-image: url("./sun.svg");
}

input:checked + span {
  background-color: var(--pitch-black);
  box-shadow: 4px -4px 15px -7px #3962CB,
              inset -6px 6px 8px -8px #3962CB;
}

input:checked + span:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>