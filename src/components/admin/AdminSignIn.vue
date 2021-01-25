<template>
    <v-container>
        <v-card-text v-if="!authed">redirecting...</v-card-text>
        <v-card-text v-else-if="!validAdmin">No Permission</v-card-text>
        <AdminDir v-if="authed && validAdmin"/>
    </v-container>
</template>

<script>
// import { auth, adminSignIn, db } from '../../plugins/firebase'
import AdminDir from './AdminDir'

export default {
    components: {
        AdminDir
    },
    data: () => ({
        credential: '',
        token: '',
        user: '',
        validAdmin: true,
        notValidAdmin: null,
        authed: true,
        // authRef: db.collection('roles')
        }),
    created () {
        // auth.signInWithPopup(adminSignIn).then(async (result) => {
        //     this.credential = result.credential
        //     this.token = result.accessToken
        //     this.user = result.user
        //     this.authed = true
        //     const adminAuth = await this.authRef.where('UID', '==', auth.currentUser.uid).where('isAdmin', '==', true).get()
        //     this.validAdmin = !adminAuth.empty
        // }).catch((error) => {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     console.log(errorCode)
        //     var errorMessage = error.message;
        //     console.log(errorMessage)
        //     // The email of the user's account used.
        //     var email = error.email;
        //     console.log(email)
        //     // The firebase.auth.AuthCredential type that was used.
        //     var credential = error.credential;
        //     console.log(credential)
        //     this.authed = false
        // })
    },
    methods: {
    }
}

//  // Getting user id
// var uid = firebase.auth().currentUser.uid;
// //User Data Insertion
// if(uid !=null){
//  db.collection("users").doc(uid).add({
//     UserName: txtname,
//     Email: txtEmail,
//     Password: txtPass
// })
// // .then(function(uid) {
// //     console.log("Document written with ID: ", uid);
// // })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
// }


</script>

<style scoped>

</style>

