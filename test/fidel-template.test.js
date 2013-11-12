//fidel-template.test.js


suite('fidel-template', function() {
  
  beforeEach(function() {
    $('#fixture').html('<div class="widget"></div><div class="widget2"></div>');
  });

  test('exists', function() {
    assert.equal(typeof Fidel.prototype.render, 'function');
  });

  test('render template with id', function() {

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

  test('render template inline', function() {

    $.declare('widget', {
      template: 'Hello <%= name %>',
      init: function() {
        this.render({ name: 'Bob' });
      }
    });
    var el = $('#fixture .widget');
    el.widget();
    assert.equal(el.text(), 'Hello Bob');
  });

  test('render template to a specific element', function() {
    $.declare('widget', {
      template: 'Hello <%= name %>',
      init: function() {
        this.render({ name: 'Bob' }, $('#fixture .widget2'));
      }
    });
    $('#fixture .widget').widget();
    assert.equal($('#fixture .widget2').text(), 'Hello Bob');
  });

});
