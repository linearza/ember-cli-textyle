import Ember from 'ember';
import layout from '../templates/components/x-taggable';

const {
  computed: {
    alias
  }
} = Ember;

export default Ember.Component.extend({
  layout,

  classNames: 'x-taggable',

  tag: null,

  // didUpdateAttrs() {
  //   this._super(...arguments);
  //   // debugger;
  //   this.rerender();
  //   this.set('tagName', 'b');
  // }

});
