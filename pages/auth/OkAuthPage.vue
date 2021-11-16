<template>
    <section class="hero is-fullheight ok-has-background-primary-highlight">
        <ok-modals></ok-modals>
        <div class="columns is-flex-1 is-flex-touch flex-direction-column-reverse-touch is-marginless">
            <div class="column ok-has-background-primary is-flex flex-direction-column">
                <about-h2pro3-modal></about-h2pro3-modal>
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
        mounted() {
        }

        layout() {
            return "auth";
        }

    }
</script>
