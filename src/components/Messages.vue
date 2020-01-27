<template>
    <v-row>
        <v-col col="12">
            <v-card v-for="i in 10"
                    :key="i"
                    style="max-width: 70%;"
                    class="mx-auto ma-3"
                    shaped
            >
                <v-card-title>CArd title</v-card-title>
                <v-card-text>sdfsdfsdfdsfdsfdajgfd'sgfds'lg'fdlsgd title</v-card-text>
            </v-card>
        </v-col>
    </v-row>

</template>

<script>
    export default {
        name: "Messages"
    }
</script>

<style scoped>

</style>