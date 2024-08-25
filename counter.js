

function Htmlelement (){
  this.click =  function (){
    console.log("clicked");
  };
}

Htmlelement.prototype.focus(function() {
  console.log('focus')
});

function HtmlSelctelement(items = []){ 
  this.items = items;
  this.addItem = function (item){
    this.items.push(item);
  }
  this.removeItem = function (item){
  this.items.splice(this.items.indexOf(item), 1);
  }
}
