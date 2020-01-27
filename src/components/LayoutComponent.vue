<template>
    <v-app id="inspire" style="overflow: hidden;">
        <v-navigation-drawer
                style="width: 350px;"
                v-model="drawerRight"
                app
                clipped
                right
                flat
        >
            <Profile/>

        </v-navigation-drawer>
        <v-app-bar
                app
                clipped-right
                color="blue-grey"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Messenger</v-toolbar-title>
            <v-spacer/>
            <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"/>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                app
        >

            <v-list dense
                    v-for="(route, index) in routes"
                    :key="index">
                <v-list-item
                        @click.stop="changeRoute(route.link)">
                    <v-list-item-action>
                        <v-icon>{{route.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{route.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>

        <v-navigation-drawer
                v-model="left"
                fixed
                temporary
        />

        <v-content class="pa-0">
            <v-container
                    fluid
            >
                <v-row>
                    <v-col class="shrink col-12">
                        <router-view/>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-navigation-drawer
                v-model="right"
                fixed
                right
                temporary
        />

        <v-footer
                app
                color="blue-grey"
                class="white--text"
        >
            <span>Messenger</span>
            <v-spacer/>
            <span>&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Profile from "./Profile";

    export default {
        name: "LayoutComponent",
        components: {Profile},
        props: {
            source: String,
        },
        data: () => ({
            drawer: false,
            drawerRight: false,
            right: false,
            left: false,
            routes: [
                {
                    icon: "mdi-account-group",
                    link: "/friends",
                    title: "Друзья",
                },
                {
                    icon: "mdi-forum",
                    link: "/messages",
                    title: "Сообщения",
                },
                {
                    icon: "mdi-newspaper-variant",
                    link: "/news",
                    title: "Новости",
                },
                {
                    icon: "mdi-account",
                    link: "/users",
                    title: "Пользователи",
                }
            ],
        }),
        methods: {
            changeRoute(link) {
                this.$router.push(link)
                this.left = false
            },
        }
    }
</script>