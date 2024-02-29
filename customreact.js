function customRender(customElement, container) {
  /*
 
 const domElement = document.createElement(customElement.type);
  domElement.innerHTML = customElement.children;
  domElement.setAttribute("href", customElement.props.href);
  domElement.setAttribute("target", customElement.props.target);

  container.appendChild(domElement);

  */
}
const customElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click here to visit google",
};
const mainContainer = document.querySelector("#root");

customRender(customElement, mainContainer);
