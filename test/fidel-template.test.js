//fidel-template.test.js


suite('fidel-template', function() {

  test('exists', function() {
    assert.equal(typeof Fidel.prototype.render, 'function');
  });

  test('render template', function() {

    $.declare('widget', {
      templateId: 'tmpl-main',
      init: function() {
        this.render({ name: 'Bob' });
      }
    });
    var el = $('#fixture .widget');
    el.widget();
    assert.equal(el.text(), 'Hello Bob');

  });

  test('render template to a specific element');

});
