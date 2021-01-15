setDomElementModule = (() => {
  return {
    replaceImageSrc: (id) => {
      const element = document.getElementById(id)
      console.log(element)
      element.setAttribute("src", "penginsuizokukan.jpeg")
    },
  }
})();