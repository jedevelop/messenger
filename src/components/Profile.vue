<template>
    <v-card
            max-width="375"
            class="mx-auto"
            style="box-shadow: none;"
    >

        <v-btn icon class="mr-4 mt-1"
               color="primary"
               border="primary"
               style="position: absolute;z-index: 1000;right: 0;border: 1px solid blue;"
               @click.stop="editing = true">
            <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-img
                @click="downloadFile"
                src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                height="300px"
                dark
        >
            <v-row>
                <v-card-title class="white--text pl-12 pt-12">
                    <div class="display-1 pl-12 pt-12">Ali Conners</div>
                </v-card-title>
            </v-row>
        </v-img>

        <v-list two-line>
            <v-list-item @click="">
                <v-list-item-icon>
                    <v-icon color="indigo">mdi-phone</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>(650) 555-1234</v-list-item-title>
                    <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                </v-list-item-icon>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item @click="">
                <v-list-item-icon>
                    <v-icon color="indigo">mdi-email</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>aliconnors@example.com</v-list-item-title>
                    <v-list-item-subtitle>Personal</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item @click="">
                <v-list-item-icon>
                    <v-icon color="indigo">mdi-map-marker</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>1400 Main Street</v-list-item-title>
                    <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-navigation-drawer
                style="width: 350px;"
                v-model="editing"
                app
                right
                flat
        >

            <ProfileForm/>

        </v-navigation-drawer>

        <v-file-input class="d-none" id="file" multiple label="File input"></v-file-input>


        <v-card-actions class="d-flex justify-end">
            <v-btn color="orange" style="color: white;"
                   @click="logout">
                Выйти
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import ProfileForm from "../components/ProfileForm"

    export default {
        name: "Profile",
        components: {
            ProfileForm
        },
        data: () => ({
            editing: false,
            loading: false,
            selection: 1,
        }),

        methods: {
            reserve() {
                this.loading = true

                setTimeout(() => (this.loading = false), 2000)
            },
            downloadFile() {
                const file = document.getElementById("file")
                file.click()
            },
            logout() {
                axios.post("http://localhost:8080/logout")
                    .then(res => {
                        console.log(res, "res")
                    })
            }
        },
    }
</script>

<style scoped>

</style>