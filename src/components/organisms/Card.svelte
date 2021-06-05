<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  // props
  export let form;
  export let index: number;

  const dispatch = createEventDispatcher();
  const onInputForm = (event) => {
    console.log('onInputForm', event.target.value);
    dispatch('inputForm', { value: event.target.value, index: index });
  };

</script>

<div class="container__card">
  <input type="text" bind:value={form.name} on:input={onInputForm} />
</div>