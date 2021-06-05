<script lang="ts" context="module">
  export const showModal = () => {
    modalState.active.update(state => {
      state = true;
      return state;
    })
  };

</script>

<script lang="ts">
  import { modalState } from '../../store/index';

  let active;
  modalState.active.subscribe(state => {
    active = state;
  });

  const closeModal = () => {
    modalState.active.update(state => {
      state = false;
      return state;
    })
  }
</script>

<div class:modal={true} class:active={active}>
  <div class="overlay" />
  <div class="modal-container">
    <button type="button" class="close" on:click={closeModal}>x</button>
    <div class="modal-header">
      <slot name="header"></slot>
    </div>
    <div class="modal-body">
      <slot name="body"></slot>
    </div>
    <div class="modal-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</div>

<style lang="scss">
  .modal {
    display: none;

    // コンポーネントのstyleで使用されないcssがコンパイル対象外にならないように対処
    // See: https://github.com/sveltejs/svelte/issues/1594#issuecomment-405269805
    &:global(.active) {
      display: flex;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: gray;
    opacity: 0.5;
    z-index: 100;
  }
  .modal-container {
    background: white;
    border: solid 1px gray;
    border-radius: 3px;
    box-shadow: grey 5px 5px 5px;
    width: 400px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 110;

    button.close {
      position: absolute;
      right: 2px;
      top: 2px;
    }
  }
</style>