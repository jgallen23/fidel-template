/*!
 * fidel-template - A fidel plugin to render a clientside template
 * v0.1.0
 * https://github.com/jgallen23/fidel-template
 * copyright Greg Allen 2013
 * MIT License
*/


Fidel.prototype.render = function(data) {
  var tmpl = $('#'+this.templateId).html();
  this.el.html(template(tmpl, data));
};
