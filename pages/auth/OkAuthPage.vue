<template>
    <section class="hero is-fullheight ok-has-background-primary-highlight">
        <ok-modals></ok-modals>
        <div class="columns is-flex-1 is-flex-touch flex-direction-column-reverse-touch is-marginless">
            <div class="column ok-has-background-primary is-flex flex-direction-column">
                <div class="columns is-flex-1 is-vcentered is-centered is-marginless">
                    <div class="column content is-medium is-11-desktop">
                        <img :src="logoImage" alt="H2pro3 logo" style="width: 200px;">
                        <h1 class="has-text-rounded ok-has-text-primary-invert" style="margin-top: 20px;">
                            Die App zur Vernetzung von Akteuren für erfolgreiche Wasserstoff-Projekte
                        </h1>
                        <h6>Willkommen bei H2Pro3. Hier vernetzen sich Akteure und Interessenten, um innovative Projekte und Anwendungen mit Wasserstoff produktiver und erfolgreicher voranzutreiben.</h6>

                        <h5 class="has-text-grey has-margin-top-60 is-marginless">Gefördert durch:</h5>
                        <div class="is-flex align-items-center">
                            <div>
                                <img src="@/pages/auth/assets/bundesministerium-wirtschaft-und-energie.png" alt="Bundesministerium für Wirtschaft und Energie">
                            </div>
                            <div>
                                <img src="@/pages/auth/assets/unternehmen-revier.png" alt="Unternehmen Revier">
                            </div>
                        </div>
                    </div>
                </div>

                <ok-footer></ok-footer>
            </div>
            <div class="column is-paddingless">
                <nuxt-child></nuxt-child>
            </div>
        </div>
    </section>
</template>

<style>
    .has-background-emojis {
        background: url("./assets/emojis-bg.png") no-repeat center center fixed;
        background-size: cover;
    }
</style>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator"
    import { Observer } from "~/node_modules/mobx-vue";
    import OkFooter from "~/components/layout/footer/OkFooter.vue";
    import ensureHasNoStoredAuthToken from '~/middleware/ensure-has-no-stored-auth-token';
    import AboutH2pro3Modal from '~/pages/home/components/modals/components/AboutH2Pro3Modal.vue';
    import OkModals from '~/pages/home/components/modals/OkModals.vue';

    @Observer
    @Component({
        name: "OkAuthPage",
        components: {
            OkFooter,
            OkModals,
            AboutH2pro3Modal
        },
        middleware: [
            ensureHasNoStoredAuthToken
        ]
    })
    export default class extends Vue {
        get logoImage() {
            return require("~/components/okuna-logo/assets/h2pro3.svg");
        }

        layout() {
            return "auth";
        }

    }
</script>
