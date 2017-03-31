import Ember from 'ember';

export default Ember.Controller.extend({

  tags: [{
    tag: 'h1',
    classNames: 'h1 h2'
  }, {
    tag: 'h2',
    classNames: 'h2'
  }, {
    tag: 'h3',
    classNames: 'h3'
  }, {
    tag: 'h4',
    classNames: 'h4'
  }, {
    tag: 'h5',
    classNames: 'h5'
  }, {
    tag: 'p',
    classNames: 'p-like'
  }, {
    tag: 'small',
    classNames: 'small-like'
  }, {
    tag: 'b',
    classNames: 'b-like'
  }],

  miscTag: 'span'

});


// <b> - Bold text
// <strong> - Important text
// <i> - Italic text
// <em> - Emphasized text
// <mark> - Marked text
// <small> - Small text
// <del> - Deleted text
// <ins> - Inserted text
// <sub> - Subscript text
// <sup> - Superscript text
