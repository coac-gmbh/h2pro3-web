<template>
    <div class="ok-new-group-action">
        <div class="has-padding-20">
            <ok-new-group-button/>
        </div>
    </div>
</template>

<style lang="scss">
    .ok-new-group-action{
        position: fixed;
        bottom: 68px;
        right: 0;

        @include for-size(tablet-portrait-up) {
            bottom: 0;
        }
    }
</style>


<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator"
    import OkNewGroupButton from '~/pages/home/pages/communities/components/OkNewGroupButton.vue';


    @Component({
        name: "OkNewGroupAction",
        components: {OkNewGroupButton},
    })
    export default class OkNewGroupAction extends Vue {}
</script>



