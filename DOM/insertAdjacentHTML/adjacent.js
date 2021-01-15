const setDomElementModule = (() => {
  let counter = 1;
  return {
    appendChildNode: (id) => {
      const element = document.getElementById(id)
      element.insertAdjacentHTML(
        "beforeend",
        `<div>${counter}つ目の子要素だよ</div>`
      )
      counter++;
    }
  }
})();