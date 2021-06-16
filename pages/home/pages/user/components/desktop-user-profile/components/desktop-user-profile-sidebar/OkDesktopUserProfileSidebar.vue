<template>
    <div class="card ok-has-background-primary ok-desktop-user-profile-sidebar">
        <div class="card-header ok-has-border-bottom-primary-highlight" v-if="headerVisible">
            <div class="columns has-padding-left-20 has-padding-right-20 has-padding-top-10 has-padding-bottom-10 has-width-100-percent is-marginless">
                <div class="column is-narrow is-flex align-items-center">
                    <ok-user-avatar :user="user"></ok-user-avatar>
                </div>
                <div class="column">
                    <div class="columns is-gapless is-marginless flex-direction-column">
                        <div class="column">
                            <ok-user-profile-name :user="user"></ok-user-profile-name>
                        </div>
                        <div class="column">
                            <ok-user-profile-username :user="user"></ok-user-profile-username>
                        </div>
                    </div>
                </div>
                <div class="column is-narrow">
                    <ok-user-profile-action-buttons :user="user"></ok-user-profile-action-buttons>
                </div>
            </div>
        </div>
        <div :class="{'ok-has-border-bottom-primary-highlight': user.profile.bio}">
            <p class="menu-label ok-has-text-primary-invert-80 has-padding-left-20 has-padding-right-20 has-padding-top-20 is-marginless">
                {{$t('global.keywords.about')}}
            </p>
            <div v-if="user.profile.bio" class="ok-has-text-primary-invert has-padding-top-10 has-padding-right-20 has-padding-left-20 has-padding-bottom-10">
                <ok-smart-text :text="user.profile.bio"></ok-smart-text>
            </div>
            <div v-if="user.categories.length" class="column has-padding-bottom-20 has-padding-left-20 has-padding-top-10">
                <ok-community-profile-categories :categories="user.categories"></ok-community-profile-categories>
            </div>
        </div>
        <div class="card-content">
            <div class="ok-has-border-bottom-primary-highlight">
                <p class="menu-label ok-has-text-primary-invert-80 has-padding-left-20 has-padding-right-20 has-padding-top-20 is-marginless">
                    {{$t('global.keywords.communities')}}
                </p>
                <div class="has-padding-left-20 has-padding-right-20 has-padding-top-10 is-marginless">
                    <ok-user-profile-groups :communities="communities" />
                </div>
            </div>
            <div class="columns is-mobile is-multiline is-variable is-3 is-marginless">
                <div class="column is-narrow" v-if="user.profile.location">
                    <ok-user-profile-location :user="user"></ok-user-profile-location>
                </div>
                <div class="column is-narrow" v-if="user.profile.url">
                    <ok-user-profile-url :user="user"></ok-user-profile-url>
                </div>
                <div class="column is-narrow">
                    <ok-user-profile-age :user="user"></ok-user-profile-age>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import { Component, Prop, Vue } from "nuxt-property-decorator"
    import { IUser } from "~/models/auth/user/IUser";
    import OkSmartText from '~/components/smart-text/OkSmartText.vue';
    import OkUserProfileLocation from '~/pages/home/pages/user/components/shared/OkUserProfileLocation.vue';
    import OkUserProfileUrl from '~/pages/home/pages/user/components/shared/OkUserProfileUrl.vue';
    import OkUserProfileAge from '~/pages/home/pages/user/components/shared/OkUserProfileAge.vue';
    import OkUserAvatar from '~/components/avatars/user-avatar/OkUserAvatar.vue';
    import OkUserProfileName from '~/pages/home/pages/user/components/shared/OkUserProfileName.vue';
    import OkUserProfileUsername from '~/pages/home/pages/user/components/shared/OkUserProfileUsername.vue';
    import OkUserProfileActionButtons from '~/pages/home/pages/user/components/shared/OkUserProfileActionButtons.vue';
    import OkCommunityProfileCategories
        from '~/pages/home/pages/community/components/shared/OkCommunityProfileCategories.vue';
    import {ICommunity} from "~/models/communities/community/ICommunity";
    import {IUserService} from "~/services/user/IUserService";
    import {okunaContainer} from "~/services/inversify";
    import {TYPES} from "~/services/inversify-types";
    import OkUserProfileGroups from "~/pages/home/pages/user/components/shared/OkUserProfileGroups.vue";

    @Component({
        name: "OkDesktopUserProfileSidebar",
        components: {
            OkUserProfileActionButtons,
            OkUserProfileUsername,
            OkUserProfileName,
            OkUserAvatar,
            OkUserProfileAge,
            OkUserProfileUrl,
            OkUserProfileLocation,
            OkSmartText,
            OkCommunityProfileCategories,
            OkUserProfileGroups
        },
        subscriptions: function () {
            return {
                loggedInUser: this["userService"].loggedInUser,
            }
        }
    })
    export default class OkDesktopUserProfileSidebar extends Vue {

        @Prop({
            type: Object,
            required: true
        }) readonly user: IUser;

        @Prop({
            type: Boolean,
            required: true
        }) readonly headerVisible: boolean;

        private userService: IUserService = okunaContainer.get<IUserService>(TYPES.UserService);

        communities: ICommunity[] = [];

        async mounted() {
            this.communities = await this.joinedCommunitiesRefresher()
        }


        joinedCommunitiesRefresher(): Promise<ICommunity[]> {
            return this.userService.getJoinedCommunities();
        }

    }
</script>



