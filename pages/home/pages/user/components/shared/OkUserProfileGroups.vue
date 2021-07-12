<template>
    <div class="columns is-multiline is-variable is-1 is-mobile">
        <div class="column is-narrow is-paddingless has-padding-right-10 has-padding-top-10"
             v-for="community in communities" :key="community.name">
            <ok-dynamic-styles-button @handleButtonClick="communityRedirect" :community="community" :key="community.name"/>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import OkDynamicStylesButton from "~/components/buttons/OkDynamicStylesButton.vue";
import { ICommunityMembership } from "~/models/communities/community/community-membership/ICommunityMembership";


@Component({
    name: "OkUserProfileGroups",
    components: {OkDynamicStylesButton},
})
export default class OkUserProfileGroups extends Vue {

    @Prop({
        type: Array,
        required: true
    }) readonly communities: ICommunityMembership;

    communityRedirect(community) {
        this.$router.push({ path: `/c/${community.name}` })
    }

}

</script>

