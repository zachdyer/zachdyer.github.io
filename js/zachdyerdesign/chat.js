var zachdyerdesign = zachdyerdesign || {};

zachdyerdesign.chat = {
  createWindow: function (width, height) {
    var tab = document.createElement("div");
    var chat = document.createElement("div");
    var input = document.createElement("input");

    chat.setAttribute("class", "chat");
    tab.setAttribute("class", "tab");
    input.setAttribute("class", "form-control input");
    input.setAttribute("type", "text");

    chat.style.width = width + "px";
    chat.style.height = height + "px";

    tab.style.width = width + "px";

    chat.appendChild(tab);
    chat.appendChild(input);
    document.body.appendChild(chat);
  },
  build: function () {
    this.createWindow(250, 300);
  }
};
