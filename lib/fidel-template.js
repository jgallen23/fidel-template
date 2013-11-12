
(function(Fidel) {
  Fidel.template = template.noConflict();

  Fidel.prototype.render = function(data, el) {
    var tmpl = (this.template) ? this.template : $('#'+this.templateId).html();
    el = el || this.el;
    el.html(Fidel.template(tmpl, data));
  };
})(window.Fidel);
