<template>
    <footer>
        <nav role="navigation" aria-label="footer navigation"
             class="ok-has-border-top-primary-highlight has-padding-10">
            <div class="container">
                <div class="columns has-text-rounded is-centered has-text-centered">
                    <!-- <a href="#" rel="noreferrer nofollow" class="column footer-link footer-link--about-us ok-has-text-primary-invert-60">
                        {{$t('global.snippets.about_us')}}
                    </a> -->
                    <div class="column footer-link footer-link--privacy-policy ok-has-text-primary-invert-60 has-cursor-pointer"
                        @click="openWhatIsH2pro3Modal" v-html="$t('global.snippets.what_is_h2pro3')">
                    </div>
                    <div class="column footer-link footer-link--privacy-policy ok-has-text-primary-invert-60 has-cursor-pointer"
                        @click="openAboutUsModal">
                        {{$t('global.snippets.about_us')}}
                    </div>
                    <div class="column footer-link footer-link--privacy-policy ok-has-text-primary-invert-60 has-cursor-pointer"
                        @click="onWantsToOpenPrivacyPolicy">
                        {{$t('global.snippets.privacy_policy')}}
                    </div>
                    <div class="column footer-link footer-link--privacy-policy ok-has-text-primary-invert-60 has-cursor-pointer"
                        @click="openImprintModal">
                        {{$t('global.snippets.imprint')}}
                    </div>
                    <!-- <div class="column footer-link footer-link--terms-of-use ok-has-text-primary-invert-60 has-cursor-pointer"
                         @click="onWantsToOpenTou">
                        {{$t('global.snippets.terms_of_use')}}
                    </div>
                    <div class="column footer-link footer-link--status ok-has-text-primary-invert-60 has-cursor-pointer"
                         @click="onWantsToOpenCommunityGuidelines">
                        {{$t('global.keywords.guidelines')}}
                    </div> -->
                </div>
            </div>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
    .footer-link {
        &--about-us {
            &:focus, &:hover {
                color: #6bd509 !important;
            }
        }

        &--privacy-policy {
            &:focus, &:hover {
                color: #379eff !important;
            }
        }

        &--terms-of-use {
            &:focus, &:hover {
                color: #6ace8f !important;
            }
        }

        &--status {
            &:focus, &:hover {
                color: #f6006f !important;
            }
        }


        &--github {
            &:focus, &:hover {
                color: #6bd509 !important;
            }
        }
    }

</style>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator"
    import { okunaContainer } from "~/services/inversify";
    import { TYPES } from "~/services/inversify-types";
    import { IModalService } from "~/services/modal/IModalService";
    import { ModalType } from "~/services/modal/lib/ModalType";

    @Component({
        name: "OkFooter",
    })
    export default class OkFooter extends Vue {
        private modalService: IModalService = okunaContainer.get<IModalService>(TYPES.ModalService);

        openAboutUsModal() {
            this.modalService.openModalByType(ModalType.aboutUs);
        }
        
        openWhatIsH2pro3Modal() {
            this.modalService.openModalByType(ModalType.whatIsH2pro3);
        }

        openImprintModal() {
            this.modalService.openModalByType(ModalType.imprint);
        }

        onWantsToOpenTou() {
            this.modalService.openTermsOfUseModal();
        }

        onWantsToOpenPrivacyPolicy() {
            this.modalService.openPrivacyPolicyModal();
        }

        onWantsToOpenCommunityGuidelines(){
            this.modalService.openCommunityGuidelinesModal();
        }

    }
</script>
