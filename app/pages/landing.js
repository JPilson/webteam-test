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


const idesListContainer = document.querySelector(".ides-list")
const extensionPluginsContainer = document.querySelector(".extension-plugins")
const idesList = [
  {name: "intellijIdeaCe", logo: intellijIdeaCe,label:"IntelliJ IDEA Ultimate",tags:["Kotlin","Java"]},
  {name: "webstorm", logo: webstorm,label:"WebStorm",tags:["Javascript","Typescript"]},
  {name: "resharper", logo: resharper,label:"ReSharper Ultimate",tags:["C++"]},
  {name: "rider", logo: rider,label:"Rider",tags:["C#",".NET"]},
  {name: "appcode", logo: appcode,label:"AppCode",tags:["IOS","SWIFT"]},
  {name: "clion", logo: clion,label:"CLion",tags:["C","C++"]},
  {name: "rubymine", logo: rubymine,label:"RubyMine",tags:["Ruby","Rails"]},
  {name: "datagrip", logo: datagrip,label:"DataGrip",tags:["mysql"]},
  {name: "phpstorm", logo: phpstorm,label:"PhpStorm",tags:["Php","Database"]},
  {name: "pycharm", logo: pycharm,label:"PyCharm",tags:["Python"]},

]
const extensionAndProfilers = [
  {name: "resharper", logo: resharper,label:"ReSharper Ultimate",tags:["C++"]},
  {name: "resharperCpp", logo: resharperCpp,label:"ReSharper C++",tags:["C++"]},
  {name: "dotcover", logo: dotcover,label:"dotCover",tags:[".Net","Test"]},
  {name: "dotmemory", logo: dotmemory,label:"dotMemory",tags:[".Net","Test"]},
  {name: "dottrace", logo: dottrace,label:"dotTrace",tags:[".Net","Test"]}

]


idesList.forEach(it => {
  const img = document.createElement("img")
  img.src = it.logo
  img.alt = it.name
  idesListContainer.appendChild(img)
})

extensionAndProfilers.forEach(it=>{
  const img = document.createElement("img")
  img.src = it.logo
  img.alt = it.name
  extensionPluginsContainer.appendChild(img)
})
