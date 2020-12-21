<template>
<v-sheet>
    <v-row align="center" justify="center" id="instafeed"></v-row>
</v-sheet>
</template>

<script>

import Instafeed from '../plugins/instafeed.js'

export default {

    data: () => {
        return {
            facebookApp: 0
        }
    },

    mounted: function () {

        let userFeed = new Instafeed({
            get: 'the_shelf_life',
            resolution: 'low_resolution',
            accessToken: 'IGQVJYVzQteE9pcmR0SFdfbUE0TW15OVA4bGxwbzZA5MFpaLXRzeEpNWi0zdThEaVR4T3JQektFa0t5UkFyYlBxU0wwUzhlTnNVd2h0LVpBRndyNFNxbnlxcmhmZA3BfRmVpZAkkyUUM0ejlHZAlprUmprQQZDZD'
            });

    userFeed.run();
    }
}
</script>

<style scoped>

</style>