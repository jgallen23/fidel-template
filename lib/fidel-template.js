
Fidel.prototype.render = function(data) {
  var tmpl = $('#'+this.templateId).html();
  this.el.html(template(tmpl, data));
};
