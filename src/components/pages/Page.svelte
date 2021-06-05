<script lang="ts">
  import { rootStore } from '../../store/index';
  import Card from '../organisms/Card.svelte';

  rootStore.width.subscribe(val => alert(val));

  const increment = () => {
    rootStore.width.update(val => val + 1);
  }
  const decrement = () => {
    rootStore.width.update(val => val - 1);
  }
</script>

<div class="container__header">
  <div class="d-flex">
    <div class="header__add-card-btn">
      <button type="button" on:click={increment}>+</button>
      <button type="button" on:click={decrement}>-</button>
    </div>
    <div class="header__total-label">
      <span>総額：</span>
    </div>
    <div class="header__average-label">
      <span>平均：</span>
    </div>
    <div class="header__save-btn">
      <button type="button">Save</button>
    </div>
  </div>
</div>
<div class="container__content">
  <Card />
</div>

<style lang="scss">
.d-flex {
  display: flex;
  justify-content: space-around;
}
</style>