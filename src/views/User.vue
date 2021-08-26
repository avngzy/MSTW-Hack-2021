
<template>
    <v-container>
        <v-row>
            <v-col>
                <UserPage />
            </v-col>
        </v-row>
    </v-container>
        
</template>

<script>
import UserPage from "../components/UserPage.vue";
export default {
    props: ["userId"],

    components: {
        UserPage,
    }
}
</script>