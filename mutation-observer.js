const handleButtonTextChanges = (staticButton) => {
  const config = { attributes: true, childList: true, subtree: true, characterData: true };

  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "characterData" || mutation.type === "attributes") {
          // update button text ...
      }
    }
  };

  // const targetNode = document.querySelector(`[data-testid*="pdpActionButton"]`);
  const observer = new MutationObserver(callback);
  observer.observe(staticButton, config);
}

optimizely.utils.waitForElement(`[data-testid*="pdpActionButton"]`)
  .then(staticButton => {
    handleButtonTextChanges(staticButton);
  });