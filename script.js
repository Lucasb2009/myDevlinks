function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains('light'))   {
  //  html.classList.remove('light')
  //} else{
  //html.classList.add('light')}

  //pegar a tag img
  const img = document.querySelector("#Profile img")
  //substituir a img

  if (html.classList.contains("light")) {
    //se tiver light mode,coloca a light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver  sem light mantem a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }"src", "./assets/avatar-light.png"
}
