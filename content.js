function processChatMessage(messageNode) {
  const spans = messageNode.querySelectorAll('.text-fragment');
  spans.forEach(span => {
    formatMessage(span);
  });
}

function observeChat(chatContainer) {
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1) {
          processChatMessage(node);
        }
      }
    }
  });
  observer.observe(chatContainer, { childList: true });
}

function waitForChat() {
  const observer = new MutationObserver((mutations, obs) => {
    const chat = document.querySelector('.chat-scrollable-area__message-container');
    if (chat) {
      obs.disconnect();
      console.log("Twitch chat loaded.");
      observeChat(chat);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

waitForChat();
