const setDomElementModule = (() => {
  return {
    setInnerHtml: (id) => {
      const element = document.getElementById(id)
      const literal = "書き換えられたよ"
      console.log(element.innerHTML)
      element.innerHTML = `<p id="child">HTMLごと${literal}</p>`
      console.log(element.innerHTML)
    },
  }
})();