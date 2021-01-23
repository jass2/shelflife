<template>
    <v-card width="1200" color="whitesmoke" class="fill-height">
        <v-card-title class="headline">{{repsieTitle}}</v-card-title>
        <v-card-subtitle>{{repsieSubtitle}}</v-card-subtitle>
        <v-carousel>
            <v-carousel-item
                 v-for="(item,i) in photos"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
            >
                <v-img :src="item.src"/>
            </v-carousel-item>
        </v-carousel>
        <v-row>
            <v-col>
                <v-card-title>Ingredients</v-card-title>
                <hr>
                <v-card-text v-for="(ingredient, i) in ingredientList" :key="i">
                    {{ingredient}}
                </v-card-text>
            </v-col>
            <v-col>
                <v-card-title>Process</v-card-title>
                <hr>
                <v-card-text v-for="(instruction, i) in instructions" :key="i">
                    {{i + 1}}. {{instruction}}
                </v-card-text>
            </v-col>
        </v-row>
        <v-card-actions>
             <v-btn>Share Post</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { db } from '../../plugins/firebase'
export default {
    data: () => ({
            repsieTitle: 'Broccoli Mac and Cheese',
            repsieSubtitle: 'Jason\'s favorite recipie.',
            ingredientList: ['1 pound (455g) pasta', '6 Cups Finely Chopped Broccoli', '1 cup(120 g) whole unroasted cashews', '1 Cup Vegetable Broth', '1/4 Cup Nutritional yeast flakes', '1/4 teaspoon ground turmeric', '1 tablespoon fresh lemon juice', '3/4 teaspoon chipotle powder', '1 tablespoon onion powder', '1/4 teaspoon salt'],
            equiptmentList: ['1 large pot', '1 high-speed blender'],
            instructions: ['In a large pot, bring 4 quarts of salted water to a boil for the pasta.', 'While the water is coming to a boil, make the sauce: Place all the sauce ingredients in a high-speed blender and blend for about a minute or until completely smooth, using a rubber spatula to scrape down the sides every 20 seconds or so.', 'Cook the pasta in the boiling water for about 5 minutes, then add the broccoli. Boil until the pasta is cooked, stirring often with a slotted pasta spoon, 3 to 5 mintues', 'Drain the pasta in a large colander and immediately return it to the pot. It should still be piping hot and wet with the cooking water. Do not rinse and do not wait. This part is important because you need the wet, hot pasta to help make the sauce creamy and awesome and cling to the noodles', 'Add the sauce to the pasta pot and use the rubber spatula to blend. Turn the heat on low and stir for about 2 minutes to get everything warmed through. Taste for salt and seasoning, then serve.'],
            estimatedTime: 40,
            photos: [{'src': require('../../assets/shlef.jpg')},{'src': require('../../assets/emfingies.jpg')},{'src': require('../../assets/emfingies.jpg')},{'src': require('../../assets/emfingies.jpg')},{'src': require('../../assets/emfingies.jpg')}]
    }),
    async created () {
        await this.getPost()
    },
    methods: {
        async getPost() {
            const cityRef = db.collection('recipe').doc('z82huVRpjmN0TuXUE5cn');
            const doc = await cityRef.get();
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                console.log('Document data:', doc.data());
            }
        }
    }
}
</script>

<style scoped>

</style>