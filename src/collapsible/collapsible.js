import {customAttribute, bindable, bindingMode, inject} from 'aurelia-framework';

@customAttribute('material-collapsible')
@bindable({ name: 'accordion', defaultValue: false })
@inject(Element)

export class MaterialCollapsible {
  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).collapsible({
      accordion : this.accordion 
    });
  }
}