<template>
    <div>
        <v-row
                class="w-50"
                justify="center"
        >
            <v-row
                    class="w-50"
                    justify="center"
            >
                <v-col class="col-6">
                    <v-btn
                            block
                            color="primary"
                            class="ma-2"
                            @click="dialog = true"
                    >
                        Войти
                    </v-btn>
                    <v-btn
                            block
                            color="success"
                            class="ma-2"
                            @click="dialogReg = true"
                    >
                        Зарегистрироваться
                    </v-btn>

                </v-col>
            </v-row>
            <v-dialog
                    v-model="dialog"
                    fullscreen
                    hide-overlay
                    transition="dialog-bottom-transition"
                    scrollable
            >
                <v-card tile>
                    <v-toolbar
                            style="max-height: 70px;"
                            flat
                            dark
                            color="primary"
                    >
                        <v-btn
                                icon
                                dark
                                @click="dialog = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>SignIn</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn
                                    :disabled="!valid"
                                    color="success"
                                    class="mr-4"
                                    @click="validate"
                            >
                                Войти
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <v-form
                                class="mt-3"
                                ref="form"
                                v-model="valid"
                                lazy-validation
                        >
                            <v-text-field
                                    v-model="username"
                                    :counter="20"
                                    :rules="usernameRules"
                                    label="Username"
                                    required
                            ></v-text-field>

                            <v-text-field
                                    v-model="password"
                                    label="Password"
                                    required
                                    type="password"
                            ></v-text-field>


                        </v-form>

                    </v-card-text>

                    <div style="flex: 1 1 auto;"></div>
                </v-card>
            </v-dialog>


            <v-dialog
                    v-model="dialogReg"
                    fullscreen
                    hide-overlay
                    transition="dialog-bottom-transition"
                    scrollable
            >
                <v-card tile>
                    <v-toolbar
                            style="max-height: 70px;"
                            flat
                            dark
                            color="primary"
                    >
                        <v-btn
                                icon
                                dark
                                @click="dialogReg = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>SignUp</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn
                                    :disabled="!valid || password.trim() !== confirmPassword.trim()"
                                    color="success"
                                    class="mr-4"
                                    @click="validate"
                            >
                                Зарегистрироваться
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <v-form
                                class="mt-3"
                                ref="form"
                                v-model="valid"
                                lazy-validation
                        >
                            <v-text-field
                                    v-model="username"
                                    :counter="20"
                                    :rules="usernameRules"
                                    label="Username"
                                    required
                            ></v-text-field>

                            <v-text-field
                                    v-model="password"
                                    label="Password"
                                    required
                                    type="password"
                            ></v-text-field>

                            <v-text-field
                                    v-model="confirmPassword"
                                    label="Confirm password"
                                    required
                                    type="password"
                            ></v-text-field>
                        </v-form>

                    </v-card-text>

                    <div style="flex: 1 1 auto;"></div>
                </v-card>
            </v-dialog>

        </v-row>
    </div>
</template>

<script>
    import axios from "../api"

    export default {
        name: "Login",
        data: () => ({
            password: "",
            confirmPassword: "",
            dialog: false,
            dialogReg: false,
            valid: true,
            username: '',
            usernameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
        }),

        methods: {
            validate() {

                if (this.$refs.form.validate()) {

                    this.snackbar = true

                    this.login()
                }
            },
            login() {
                axios.post("login", {
                    params: {
                        username: this.username,
                        password: this.password
                    }
                })
                    .then(res => {
                        console.log(res, "res")
                        this.$router.push("/news")
                    })
                    .catch(err => {
                        console.log(err, "res")
                    })

                // axios.post(`login?username=${this.username}&password=${this.password}`)
                //     .then(() => {
                //         this.$router.push("/news")
                //     })
            },
        },
    }
</script>

<style scoped>

</style>