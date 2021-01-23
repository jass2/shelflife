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
            isAdmin: true,
            clicked: false
        }
    }
}
</script>

<style scoped>

</style>