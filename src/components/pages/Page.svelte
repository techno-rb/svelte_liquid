<script lang="ts">
  import { rootState } from '../../store/index';
  import type { FormType } from '../../store/types';
  import Card from '../organisms/Card.svelte';
  import Modal, { showModal } from '../organisms/Modal.svelte';

  let formList: FormType[];
  rootState.formList.subscribe(list => {
    console.log("subscribe list is ", list);
    formList = list;
  });

  const increment = () => {
    rootState.formList.update(list => {
      list.push({ name: '' });
      return list;
    });
  };

  const inputForm = (customEvent) => {
    console.log(customEvent.detail);
    rootState.formList.update(list => {
      list[customEvent.detail.index].name = customEvent.detail.value;
      return list;
    })
  };

</script>

<div class="container__header">
  <div class="d-flex">
    <div class="header__add-card-btn">
      <button type="button" on:click={showModal}>+</button>
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
  {#each formList as form, i}
    <Card form={form} index={i} on:inputForm={inputForm} />
  {/each}

  <Modal>
    <p slot="header">Modal Header</p>
    <p slot="body">Modal Body</p>
    <p slot="footer">Modal Footer</p>
  </Modal>
</div>

<style lang="scss">
.d-flex {
  display: flex;
  justify-content: space-around;
}
</style>