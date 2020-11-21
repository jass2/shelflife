import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#FCFC62',
            secondary: '#FEFFEA',
            accent: '#C9C9C9', 
          },
        },
      },
});
