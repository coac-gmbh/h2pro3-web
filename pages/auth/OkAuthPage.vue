<template>
    <section class="hero is-fullheight ok-has-background-primary-highlight">
        <ok-modals></ok-modals>
        <div class="columns is-flex-1 is-flex-touch flex-direction-column-reverse-touch is-marginless">
            <div class="column ok-has-background-primary is-flex flex-direction-column">
                <div class="columns is-flex-1 is-vcentered is-centered is-marginless">
                    <div class="column content is-medium is-11-desktop">
                        <h1 class="has-text-rounded ok-has-text-primary-invert">
                            Die App zur Vernetzung von Akteuren für erfolgreiche Wasserstoff-Projekte
                        </h1>
                        <h6>Willkommen bei H2Pro3. Hier vernetzen sich Akteure und Interessenten, um innovative Projekte und Anwendungen mit Wasserstoff produktiver und erfolgreicher voranzutreiben.</h6>
                        <div class="has-padding-bottom-10 is-size-6">
                            <ul>
                                <li>
                                    Sie wollen als privates oder kommunales Unternehmen (z.B. ÖPNV-, Energieversorger) oder als Privatinvestor Projekte mit Wasserstofftechnologie Projekte realisieren und suchen nach Informationen und Partnern für die Planung, Umsetzung und Finanzierung?
                                </li>
                                <li>
                                    Sie sind ein Unternehmen, das Produkte, Anlagen oder Dienstleistungen im Bereich Wasserstofftechnologie anbietet und diese zielgerichtet präsentieren will?
                                </li>
                                <li>
                                    Sie sind KMU oder Start-up und suchen nach Kooperationspartnern für die Entwicklung neuer Produkte oder Dienstleistungen im Bereich Wasserstofftechnologien?
                                </li>
                                <li>
                                    Sie benötigen zur Entscheidungsfindung für Ihre Stadt oder Ihren Kreis Informationen zum Thema Wasserstoff-Nutzung oder wollen eigene Projekte durchführen?
                                </li>
                                <li>
                                    Sie sind Forschungsinstitution oder Hochschule und wollen Ihre Erkenntnisse aus Forschung und Lehre im Bereich Wasserstofftechnologie teilen?
                                </li>
                                <li>
                                    Sie sind einfach nur am Thema Wasserstofftechnologie interessiert und wollen sich über Grundlagen, Möglichkeiten der Nutzung im Rheinischen Revier sowie über Erfahrungen der Anwender informieren?
                                </li>
                            </ul>
                            <p>
                                Dann sind Sie hier richtig! Registrieren Sie sich kostenfrei auf unserer Plattform und vernetzen Sie sich mit anderen Akteuren.
                            </p>
                        </div>
                        <div class="columns is-vcentered is-centered is-mobile has-padding-top-20 has-padding-bottom-20 has-padding-left-20-desktop has-padding-right-20-desktop">
                            <div class="column is-flex justify-center">
                                <img src="./assets/hyc-logo.svg" alt="HyCologne">
                            </div>
                            <div class="column is-flex justify-center">
                                <img src="./assets/th-koeln-logo.svg" alt="TH Köln">
                            </div>
                            <div class="column is-flex justify-center">
                                <img src="./assets/coac-logo.svg" alt="coac">
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
    import OkModals from '~/pages/home/components/modals/OkModals.vue';

    @Observer
    @Component({
        name: "OkAuthPage",
        components: {
            OkFooter,
            OkModals
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
