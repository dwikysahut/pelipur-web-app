class ChatButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button class="btn-open-chat" id="btnOpenChat" disabled>
        <i class="fa fa-commenting fa-2x" aria-hidden="true"></i>
    </button>
            `;
  }
}
customElements.define('chat-button', ChatButton);
