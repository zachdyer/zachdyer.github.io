var zachdyerdesign = zachdyerdesign || {};

zachdyerdesign.chat = {
  chatWindow: null,
  input: null,
  output: null,
  tab: null,
  minimize: false,
  createWindow: function (width, height) {
    this.tab = document.createElement("div");
    this.tab.setAttribute("class", "tab");
    this.tab.style.width = width + "px";

    this.output = document.createElement("div");
    this.output.setAttribute("class", "output");

    this.input = document.createElement("input");
    this.input.setAttribute("class", "form-control input");
    this.input.setAttribute("type", "text");

    this.chatWindow = document.createElement("div");
    this.chatWindow.setAttribute("class", "chat");
    this.chatWindow.style.width = width + "px";
    this.chatWindow.style.height = height + "px";

    this.chatWindow.appendChild(this.tab);
    this.chatWindow.appendChild(this.input);
    this.chatWindow.appendChild(this.output);
    document.body.appendChild(this.chatWindow);
  },
  build: function () {
    this.createWindow(250, 300);
    this.createListeners();

  },
  clear: function () {
    this.input.value = "";
  },
  draw: function () {
    let input = document.createTextNode(this.input.value);
    let br = document.createElement("br");
    this.output.appendChild(input);
    this.output.appendChild(br);
    this.scrollDown();
  },
  createListeners: function () {
    var self = zachdyerdesign.chat;

    window.addEventListener("keypress", function (evt) {
      if(evt.keyCode == 13) {
        self.draw();
        self.clear();
      }
    });

    this.tab.addEventListener("click", function () {
      console.log("click");
      if(self.minimize) {
        self.output.style.display = "block";
        self.input.style.display = "block";
        self.chatWindow.style.height = "300px";
        self.scrollDown();
        self.minimize = false;
      } else {
        self.output.style.display = "none";
        self.input.style.display = "none";
        self.chatWindow.style.height = "30px";
        self.minimize = true;
      }
    });
  },
  scrollDown: function () {
    this.output.scrollTop = this.output.scrollHeight;
  }
};
