import Vue from 'vue';
// The path is relative to the project root.
import testMe from '@/components/testMe';

describe('testMe.vue', () => {
  it(`should update when dataText is changed.`, done => {
    const Constructor = Vue.extend(testMe);

    const comp = new Constructor().$mount();

    comp.dataProp = 'New Text';

    Vue.nextTick(() => {
      expect(comp.$el.textContent)
        .to.equal('New Text');
      // Since we're doing this asynchronously, we need to call done() to tell Mocha that we've finished the test.
      done();
    });
  });
});