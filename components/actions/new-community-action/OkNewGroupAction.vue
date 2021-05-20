<template>
    <div class="ok-new-group-action" v-if="loggedInUser">
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
    import { Component, Vue } from 'nuxt-property-decorator'
    import { IUserService } from '~/services/user/IUserService';
    import { TYPES } from '~/services/inversify-types';
    import { okunaContainer } from '~/services/inversify';
    import { BehaviorSubject } from '~/node_modules/rxjs';
    import { IUser } from '~/models/auth/user/IUser';
    import OkNewGroupButton from "~/components/actions/new-community-action/components/OkNewGroupButton.vue";


    @Component({
        name: "OkNewGroupAction",
        components: {OkNewGroupButton},
        subscriptions: function () {
            return {
                loggedInUser: this['userService'].loggedInUser
            }
        },
    })
    export default class OkNewGroupAction extends Vue {
        $observables!: {
            loggedInUser: BehaviorSubject<IUser | undefined>
        };
        private userService: IUserService = okunaContainer.get<IUserService>(TYPES.UserService);
    }
</script>



