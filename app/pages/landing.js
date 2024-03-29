import intellijIdea from "@jetbrains/logos/intellij-idea/intellij-idea.svg";
import webstorm from "@jetbrains/logos/webstorm/webstorm.svg";
import resharper from "@jetbrains/logos/resharper/resharper.svg";
import resharperCpp from "@jetbrains/logos/resharper-cpp/resharper-cpp.svg";
import rider from "@jetbrains/logos/rider/rider.svg"

import appcode from "@jetbrains/logos/appcode/appcode.svg";
import clion from "@jetbrains/logos/clion/clion.svg";
import rubymine from "@jetbrains/logos/rubymine/rubymine.svg";
import datagrip from "@jetbrains/logos/datagrip/datagrip.svg";
import phpstorm from "@jetbrains/logos/phpstorm/phpstorm.svg";
import pycharm from "@jetbrains/logos/pycharm/pycharm.svg";
import dotcover from "@jetbrains/logos/dotcover/dotcover.svg";
import dotmemory from "@jetbrains/logos/dotmemory/dotmemory.svg";
import dottrace from "@jetbrains/logos/dottrace/dottrace.svg";

const IDE_PREFIX = "ide";
const EXTENSION_PREFIX = "ex"
let isMobile = (window.innerWidth <= 640)
const idesLogoListContainer = document.querySelector(".js-ides-reference")
const extensionPluginsLogosContainer = document.querySelector(".extension-plugins")
const idesDetailsReference = document.querySelector(".js-ides-details-reference")
const pluginsDetailsReference = document.querySelector(".js-plugin-extensions-reference")
const trustedBusinessLogosContainer = document.querySelector(".business-logos")
let dropDownToggle;
let dropDownMenu;
let isDropdownVisible = false

/**
 *
 * @type {{name: string, logo: *, label: string, tags: string[]}[]}
 */
const idesList = [
  {name: "intellijIdeaCe", logo: intellijIdea, label: "IntelliJ IDEA Ultimate", tags: ["Kotlin", "Java"]},
  {name: "webstorm", logo: webstorm, label: "WebStorm", tags: ["Javascript"]},
  {name: "resharper", logo: resharper, label: "ReSharper Ultimate", tags: ["C++"]},
  {name: "rider", logo: rider, label: "Rider", tags: ["C#",]},
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
const trustedBusinessLogosImageNameList = ["google-2015-logo", "hphewlett-packardlogo", "samsung-logo",
  "salesforce-2", "expedia", "twitter-logo-blue"]


function setup() {
  idesList.forEach(it => {
    addLogoToContainer(it, idesLogoListContainer, `logo_${IDE_PREFIX}`)
    addToDetailsContainer(it, idesDetailsReference, IDE_PREFIX)

  })

  extensionAndProfilers.forEach(it => {
    addLogoToContainer(it, extensionPluginsLogosContainer, `logo_${EXTENSION_PREFIX}`)
    addToDetailsContainer(it, pluginsDetailsReference, EXTENSION_PREFIX)
  })
  trustedBusinessLogosImageNameList.forEach(it => {
    const div = document.createElement("div")
    div.classList.add("wt-col", "wt-col_align-self_center")
    const img = document.createElement("img")
    img.src = `static/${it}.png`
    img.alt = it
    div.appendChild(img)
    trustedBusinessLogosContainer.appendChild(div)
  })

  if (!dropDownToggle) {
    dropDownToggle = document.querySelector("#drop-down-toggle")
    dropDownToggle.addEventListener("click", changeDropdownMenu)
    dropDownMenu = document.querySelector(".drop-down-menu-content")
    dropDownMenu.addEventListener("click", () => {
      if (isDropdownVisible) changeDropdownMenu()
    })

  }
}


/**
 *
 * @param ide {{name: string, logo: *, label: string, tags: string[]}}
 * @param container {HTMLElement}
 * @param idPrefix
 */
function addLogoToContainer(ide, container, idPrefix = '') {
  const img = document.createElement("img")
  img.src = ide.logo
  img.alt = ide.name
  img.id = `${idPrefix}_${ide.name}`
  container.appendChild(img)
}

/**
 * Adds Ide description into the description container
 * @param ide {{name: string, logo: *, label: string, tags: string[]}}
 * @param container {HTMLElement}
 * @param idPrefix
 */
function addToDetailsContainer(ide, container, idPrefix = '') {
  const itemDiv = document.createElement("div")
  const name = document.createElement("span")
  const tagsDiv = document.createElement("div")
  const id = `${idPrefix}_${ide.name}`
  itemDiv.setAttribute("id", id)
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
  const logoRef = document.querySelector(`#logo_${id}`)

  itemDiv.addEventListener("mouseover", (it) => {
    const parent = logoRef.parentNode
    // name.classList.remove("ide-list-item-name")
    for (let child of parent.children) {
      if (child.id !== logoRef.id) {
        child.classList.add("opaque-element")
      }
    }
  })
  itemDiv.addEventListener("mouseout", (it) => {
    // name.classList.add("ide-list-item-name")
    for (let child of logoRef.parentNode.children) {
      child.classList.remove("opaque-element")
    }
  })


  const img = document.createElement("img")
  img.src = ide.logo
  img.alt = ide.name
  img.width = 48
  img.classList.add("sm-only")
  itemDiv.appendChild(img)


  itemDiv.appendChild(name)
  itemDiv.appendChild(tagsDiv)

  container.appendChild(itemDiv)
}

function changeDropdownMenu() {

  if (isDropdownVisible) {
    dropDownMenu.style.height = "0px"
    dropDownMenu.style.top = "-30px"
  } else {
    dropDownMenu.style.height = "auto"
    dropDownMenu.style.top = "0"
  }
  isDropdownVisible = !isDropdownVisible
}

setup()





