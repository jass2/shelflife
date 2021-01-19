<template>
    <v-container>
        <v-col 
            v-for="i in 5" 
            :key="i"
        >
            <v-row align="center" justify="center">
               <BlogEntry/>
            </v-row>
        </v-col>
        <v-btn v-if="isAdmin">New Post</v-btn>
    </v-container>
    
</template>

<script>
import BlogEntry from './blog/BlogEntry'
export default {
    components: {
        BlogEntry
    },
    data () {
        return {
            isAdmin: true
        }
    }
}
</script>

<style scoped>

</style>