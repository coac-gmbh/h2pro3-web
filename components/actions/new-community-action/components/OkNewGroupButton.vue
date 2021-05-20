<template>
    <button 
        class="button is-fullwidth has-text-weight-bold has-text-white ok-has-background-accent-gradient justify-center align-items-center ok-new-group-button"
        @click="onButtonClicked"
    >
        <span class="">{{$t('global.snippets.create_group')}}</span>
    </button>
</template>

<style lang="scss">
    button.ok-new-group-button {
        font-size: 1.2rem;
        border-radius: 4rem;
        box-shadow: 0px 8px 15px rgba(255, 223, 45, 0.1);
        transition: all 0.3s ease 0s;
        border: 0;
        padding: 1.5rem;
    }

    .ok-new-group-button:hover {
        box-shadow: 0px 15px 20px hsla(41, 82%, 68%, 0.6);
        color: #fff;
        transform: translateY(-7px);
        border: 0;
    }
    button.ok-new-group-button:focus:not(:active) {
        box-shadow: 0 0 0 2px #E9A039;
    }
</style>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { TYPES } from "~/services/inversify-types";
import { IModalService } from "~/services/modal/IModalService";
import { okunaContainer } from '~/services/inversify';

@Component({
        name: 'OkNewGroupButton',
        components: {}
})
export default class OkNewGroupButton extends Vue {
    private modalService: IModalService = okunaContainer.get<IModalService>(TYPES.ModalService);

    async onButtonClicked() {
        await this.modalService.openCreateCommunityModal({
            images: {
                avatarUrl: '',
                avatarBlob: null,
                coverUrl: '',
                coverBlob: null
            }
        });
    }
}
</script>



