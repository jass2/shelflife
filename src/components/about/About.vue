<template>
    <v-sheet>
    <p>About</p>
    <br>
    <v-btn @click="navEmma()">Emma</v-btn>
    <v-btn @click="navJason()">Jason</v-btn>
    </v-sheet>
</template>

<script>
export default {
    methods: {
        navJason () {
            this.$router.push('/about/jason')
        },
        navEmma () {
            this.$router.push('/about/emma')
        }
    }
}
</script>

<style scoped>

</style>