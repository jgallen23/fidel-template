/*!
 * fidel-template - A fidel plugin to render a clientside template
 * v0.2.1
 * https://github.com/jgallen23/fidel-template
 * copyright Greg Allen 2013
 * MIT License
*/

(function(Fidel) {
  Fidel.template = template.noConflict();

  Fidel.prototype.render = function(data) {
    var tmpl = (this.template) ? this.template : $('#'+this.templateId).html();
    this.el.html(Fidel.template(tmpl, data));
  };
})(window.Fidel);
