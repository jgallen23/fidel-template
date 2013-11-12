/*!
 * fidel-template - A fidel plugin to render a clientside template
 * v0.3.0
 * https://github.com/jgallen23/fidel-template
 * copyright Greg Allen 2013
 * MIT License
*/

(function(Fidel) {
  Fidel.template = template.noConflict();

  Fidel.prototype.render = function(data, el) {
    var tmpl = (this.template) ? this.template : $('#'+this.templateId).html();
    el = el || this.el;
    el.html(Fidel.template(tmpl, data));
  };
})(window.Fidel);
