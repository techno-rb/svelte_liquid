<div class="modal">
  <div class="overlay" />
  <div class="modal-container">
    <p>modal</p>
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
  }
</style>