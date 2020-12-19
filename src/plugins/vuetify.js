import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#94AE89',
            secondary: '#A8BCA1',
            tertiary: '#C0DA74',
            accent: '#BEEDAA',
            face: '#D5FFD9' 
          },
        },
      },
});
