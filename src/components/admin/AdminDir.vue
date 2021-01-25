<template>
    <v-container>
    <v-btn @click="newPostModal = true">New Post</v-btn>
    <v-dialog class="fill-height" width="900" v-model="newPostModal">
        <v-card>
            <v-card-title>Create new blog post</v-card-title>
            <v-divider/>
            <br>
            <v-card-text>
            <v-text-field
                label="Recipe Name"
                v-model="newPostTitle"
            ></v-text-field>
            </v-card-text>
            <v-card-text>
            <v-text-field
                label="Description"
                v-model="newPostSubTitle"
            ></v-text-field>
            <v-col>
                <v-row>
                    <v-col>
                        <span class="title">Ingredient List</span>
                        <v-divider/>
                        <br>
                        <v-list v-if="newPostIngredientList.length > 0" >
                            <draggable v-model="newPostIngredientList" @start="drag=true" @end="drag=false">    
                            <v-list-item prepend-icon="mdi-minus" v-for="(item, i) in newPostIngredientList" :key="i">
                                <v-list-item-icon>
                                    <v-btn icon color="error" @click="removeIngredient(i)"><v-icon>mdi-minus</v-icon></v-btn>
                                </v-list-item-icon>              
                                <v-list-item-content>
                                    {{newPostIngredientList[i]}}
                                </v-list-item-content>             
                            </v-list-item>
                            </draggable>
                        </v-list>
                        <span v-else>
                            <li>No Ingredients Yet </li>
                        </span>
                        <br>
                        <v-row align="center" justify="center">
                            <v-text-field label="Add Ingredient" v-model="ingredient"></v-text-field>
                            <v-btn @click="addIngredient(ingredient)" icon><v-icon color="success">mdi-plus</v-icon></v-btn>
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-row>
                            <v-col>
                            </v-col>
                            <v-col>
                        <v-select
                            label="Prep Time"
                            :items="timeSelectors"
                            v-model="newPostPrepTime"
                        ></v-select>
                         <v-select
                            label="Cook Time"
                            :items="timeSelectors"
                            v-model="newPostCookTime"
                        ></v-select>
                        <v-row justify="space-between" align="start">
                        <span class="subheading">
                            Total time: 
                        </span>
                        <span>
                            {{newPostPrepTime + newPostCookTime}} minutes
                        </span>
                        </v-row>
                        </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
            <v-divider/>
            <v-col>
                <span class="title">
                    Procedure
                </span>
                <br>
                <v-list v-if="newPostProcedureList.length > 0" >
                            <draggable v-model="newPostProcedureList" @start="drag2=true" @end="drag2=false">    
                            <v-list-item prepend-icon="mdi-minus" v-for="(item, i) in newPostProcedureList" :key="i">     
                                <v-list-item-content>
                                   {{i + 1}}. {{newPostProcedureList[i]}}
                                </v-list-item-content>             
                                 <v-list-item-icon>
                                    <v-btn icon color="error" @click="removeStep(i)"><v-icon>mdi-minus</v-icon></v-btn>
                                </v-list-item-icon>         
                            </v-list-item>
                            </draggable>
                        </v-list>
                        <span v-else>
                            <li>No Steps Yet </li>
                            <br>
                        </span>
                 <v-row align="center" justify="center">
                    <v-textarea name="step" filled label="Add Step" v-model="step"></v-textarea>
                    <v-btn @click="addStep(step)" icon><v-icon color="success">mdi-plus</v-icon></v-btn>
                </v-row>
            </v-col>
            </v-card-text>
            <v-card-actions> 
                <v-row>
                    <v-btn @click="postRecipe()">Post</v-btn>
                    <v-btn>Cancel</v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-dialog>    
    </v-container>
</template>

<script>
import draggable from 'vuedraggable'

export default {

    components: {
        draggable
    },

    data: () => {
        return {
            newPostModal: true,
            newPostTitle: null,
            newPostSubTitle: null,
            newPostIngredientList: [],
            newPostProcedureList: [],
            newPostEstimatedTime: null,
            newPostCookTime: null,
            newPostPrepTime: null,
            ingredient: null,
            step: null,
            drag2: false,
            timeSelectors: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 75, 90, 120, 180, 240]
        }
    },
    methods: {
        addIngredient (ingredient) {
            this.newPostIngredientList.push(ingredient)
            this.ingredient = null
        },
        removeIngredient (index) {
            this.newPostIngredientList.splice(index, 1)
        },
        addStep (step) {
            this.newPostProcedureList.push(step)
            this.step = null
        },
        removeStep (index) {
            this.newPostProcedureList.splice(index, 1)
        },
        postRecipe () {
            this.newPostModal = false
        }
    }
}
</script>

<style scoped>

</style>