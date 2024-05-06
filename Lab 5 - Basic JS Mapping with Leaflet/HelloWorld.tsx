import {subclass, declared, property} from "esri/core/accessorSupport/decorators";
import Widget = require("esri/widgets/Widget");
import { renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-hello-world",
  emphasis: "esri-hello-world--emphasis"
};

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget){
@property()
@renderable()
firstName: string = "YOURNAMEHERE";

@property()
@renderable()
lastName: string = "YOURNAMEHERE";

@property()
@renderable()
isCool: boolean = true;
}
render() {
  const greeting = this._getGreeting();
  const classes = {
    [CSS.emphasis]: this.isCool
  };

  return (
    <div bind={this}
         class={CSS.base}
         classes={classes}>
    {greeting}
    </div>
  );
private _getGreeting(): string {
  return `Hello, my name is ${this.firstName} ${this.lastName}!`;}
}

export = HelloWorld;