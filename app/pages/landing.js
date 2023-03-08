import intellijIdeaCe from "@jetbrains/logos/intellij-idea-ce/intellij-idea-ce.svg";
import webstorm from "@jetbrains/logos/webstorm/webstorm.svg";
import resharper from "@jetbrains/logos/resharper/resharper.svg";
import resharperCpp from "@jetbrains/logos/resharper-cpp/resharper-cpp.svg";
import rider from "@jetbrains/logos/rider/rider.svg";
import appcode from "@jetbrains/logos/appcode/appcode.svg";
import clion from "@jetbrains/logos/clion/clion.svg";
import rubymine from "@jetbrains/logos/rubymine/rubymine.svg";
import datagrip from "@jetbrains/logos/datagrip/datagrip.svg";
import phpstorm from "@jetbrains/logos/phpstorm/phpstorm.svg";
import pycharm from "@jetbrains/logos/pycharm/pycharm.svg";
import dotcover from "@jetbrains/logos/dotcover/dotcover.svg";
import dotmemory from "@jetbrains/logos/dotmemory/dotmemory.svg";
import dottrace from "@jetbrains/logos/dottrace/dottrace.svg";


const idesLogoListContainer = document.querySelector(".js-ides-reference")
const extensionPluginsLogosContainer = document.querySelector(".extension-plugins")
const idesDetailsReference = document.querySelector(".js-ides-details-reference")
const pluginsDetailsReference = document.querySelector(".js-plugin-extensions-reference")
const trustedBusinessLogosContainer = document.querySelector(".business-logos")
/**
 *
 * @type {{name: string, logo: *, label: string, tags: string[]}[]}
 */
const idesList = [
  {name: "intellijIdeaCe", logo: intellijIdeaCe, label: "IntelliJ IDEA Ultimate", tags: ["Kotlin", "Java"]},
  {name: "webstorm", logo: webstorm, label: "WebStorm", tags: ["Javascript", "Typescript"]},
  {name: "resharper", logo: resharper, label: "ReSharper Ultimate", tags: ["C++"]},
  {name: "rider", logo: rider, label: "Rider", tags: ["C#", ".NET"]},
  {name: "appcode", logo: appcode, label: "AppCode", tags: ["IOS", "SWIFT"]},
  {name: "clion", logo: clion, label: "CLion", tags: ["C", "C++"]},
  {name: "rubymine", logo: rubymine, label: "RubyMine", tags: ["Ruby", "Rails"]},
  {name: "datagrip", logo: datagrip, label: "DataGrip", tags: ["mysql"]},
  {name: "phpstorm", logo: phpstorm, label: "PhpStorm", tags: ["Php", "Database"]},
  {name: "pycharm", logo: pycharm, label: "PyCharm", tags: ["Python"]},

]
/**
 *
 * @type {{name: string, logo: *, label: string, tags: string[]}[]}
 */
const extensionAndProfilers = [
  {name: "resharper", logo: resharper, label: "ReSharper Ultimate", tags: ["C++"]},
  {name: "resharperCpp", logo: resharperCpp, label: "ReSharper C++", tags: ["C++"]},
  {name: "dotcover", logo: dotcover, label: "dotCover", tags: [".Net", "Test"]},
  {name: "dotmemory", logo: dotmemory, label: "dotMemory", tags: [".Net", "Test"]},
  {name: "dottrace", logo: dottrace, label: "dotTrace", tags: [".Net", "Test"]}

]
const trustedBusinessLogosImageNameList = ["google-2015-logo","hphewlett-packardlogo","samsung-logo",
  "salesforce-2","expedia","twitter-logo-blue"]


idesList.forEach(it => {
  addLogoToContainer(it, idesLogoListContainer)
  addToDetailsContainer(it,idesDetailsReference)

})

extensionAndProfilers.forEach(it => {
  addLogoToContainer(it, extensionPluginsLogosContainer)
  addToDetailsContainer(it,pluginsDetailsReference)
})
trustedBusinessLogosImageNameList.forEach(it =>{

  const div = document.createElement("div")
  div.classList.add("wt-col","wt-col_align-self_center")
  const img = document.createElement("img")
  img.src = `static/${it}.png`
  img.alt = it
  div.appendChild(img)
  trustedBusinessLogosContainer.appendChild(div)
})


/**
 *
 * @param ide {{name: string, logo: *, label: string, tags: string[]}}
 * @param container {HTMLElement}
 */
function addLogoToContainer(ide, container) {
  const img = document.createElement("img")
  img.src = ide.logo
  img.alt = ide.name
  container.appendChild(img)
}

/**
 * Adds Ide description into the description container
 * @param ide {{name: string, logo: *, label: string, tags: string[]}}
 * @param container {HTMLElement}
 */
function addToDetailsContainer(ide, container) {
  const itemDiv = document.createElement("div")
  const name = document.createElement("span")
  const tagsDiv = document.createElement("div")

  itemDiv.classList.add("ide-list-item")
  name.classList.add("ide-list-item-name")
  tagsDiv.classList.add("ide-list-item-tags")
  name.textContent = ide.label

  ide.tags.forEach(it => {
    const tag = document.createElement("span")
    tag.classList.add("tag")
    tag.textContent = it.toString()
    tagsDiv.appendChild(tag)
  })

  itemDiv.appendChild(name)
  itemDiv.appendChild(tagsDiv)

  container.appendChild(itemDiv)
}
