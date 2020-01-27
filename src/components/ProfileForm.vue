<template>
    <v-card
            max-width="375"
            class="mx-auto"
            style="box-shadow: none;padding: 20px;"
    >
        <v-form
                ref="form"
                v-model="valid"
                lazy-validation
        >
            <v-text-field
                    v-model="firstName"
                    :counter="10"
                    :rules="nameRules"
                    label="FirstName"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="lastName"
                    :counter="10"
                    :rules="nameRules"
                    label="LastName"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="middleName"
                    :counter="10"
                    :rules="nameRules"
                    label="MiddleName"
                    required
            ></v-text-field>

            <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
            >
                Сохранить
            </v-btn>

        </v-form>
    </v-card>
</template>

<script>
    export default {
        name: "ProfileForm",
        data: () => ({
            firstName: "",
            lastName: "",
            middleName: "",
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
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
                }
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>

<style scoped>

</style>