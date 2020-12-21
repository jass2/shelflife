import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#B8336A',
            secondary: '#C490D1',
            tertiary: '#ACACDE',
            accent: '#ABDAFC',
            face: '#E5FCFF' 
          },
        },
      },
});
