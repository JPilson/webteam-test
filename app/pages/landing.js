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


const logosGrid = document.querySelector(".ides-logos-grid")
const idesList = [
  {name: "intellijIdeaCe", logo: intellijIdeaCe},
  {name: "webstorm", logo: webstorm},
  {name: "resharper", logo: resharper},
  {name: "rider", logo: rider},
  {name: "appcode", logo: appcode},
  {name: "clion", logo: clion},
  {name: "rubymine", logo: rubymine},
  {name: "datagrip", logo: datagrip},
  {name: "phpstorm", logo: phpstorm},
  {name: "pycharm", logo: pycharm},

]
const extentionAndProfilers = [
  {name: "resharper", logo: resharper},
  {name: "resharperCpp", logo: resharperCpp},
  {name: "dotcover", logo: dotcover},
  {name: "dotmemory", logo: dotmemory},
  {name: "dottrace", logo: dottrace}

]


idesList.forEach(it => {
  const img = document.createElement("img")
  img.src = it.logo
  img.alt = it.name
  logosGrid.appendChild(img)
})
