// const element = document.getElementById("hoge")
// console.log(element.innerText)  //hogeっていうidが指定されているよ

// element.innerText = "fugaに書き換えられたよ"
// console.log(element.innerText)

const setDomElementModule = (() => {
  return {
    setInnerText: (id) => {
      const element = document.getElementById(id)
      console.log(element.innerText)
      element.innerText = "fugaに書き換えられたよ"
      console.log(element.innerText)
    },
  }
})();