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
  height: 2em;
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
  -webkit-transition: .3s;
  transition: .3s;
}

span:before {
  border-radius: 50%;
  position: absolute;
  content: "";
  height: 1.6em;
  width: 1.6em;
  left: 4px;
  bottom: 3px;
  -webkit-transition: .3s;
  transition: .3s;
}

span.moon:before {
  background-image: url("./moon.svg");
}

span.sun:before {
  background-image: url("./sun.svg");
}

input:checked + span {
  background-color: var(--pitch-black);
}

input:checked + span:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>