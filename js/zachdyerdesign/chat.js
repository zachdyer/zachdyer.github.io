var zachdyerdesign = zachdyerdesign || {};

zachdyerdesign.chat = {
  chatWindow: null,
  input: null,
  output: null,
  createWindow: function (width, height) {
    var tab = document.createElement("div");
    tab.setAttribute("class", "tab");
    tab.style.width = width + "px";

    this.output = document.createElement("div");
    this.output.setAttribute("class", "output");

    this.input = document.createElement("input");
    this.input.setAttribute("class", "form-control input");
    this.input.setAttribute("type", "text");

    this.chatWindow = document.createElement("div");
    this.chatWindow.setAttribute("class", "chat");
    this.chatWindow.style.width = width + "px";
    this.chatWindow.style.height = height + "px";
    this.chatWindow.appendChild(tab);
    this.chatWindow.appendChild(this.input);
    this.chatWindow.appendChild(this.output);

    document.body.appendChild(this.chatWindow);
  },
  build: function () {
    this.createWindow(250, 300);

    window.addEventListener("keypress", function (evt) {
      var self = zachdyerdesign.chat;
      if(evt.keyCode == 13) {
        console.log(self.input.value);
        let input = document.createTextNode(self.input.value);
        let br = document.createElement("br");
        self.chatWindow.appendChild(input);
        self.chatWindow.appendChild(br);
        self.clear();
      }
    });
  },
  clear: function () {
    this.input.value = "";
  }
};
