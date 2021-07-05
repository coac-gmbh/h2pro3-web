<template>
    <button v-if="activeTheme"
            :disabled="requestInProgress"
            class="button has-text-weight-bol is-small is-borderless is-semi-rounded"
            :style="buttonCssStyle"
            @click="handleButtonClick"
    >
        {{ category ? category.title.toLowerCase() : community.title }}
    </button>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "nuxt-property-decorator"
    import { okunaContainer } from "~/services/inversify";
    import { TYPES } from "~/services/inversify-types";
    import { ICategory } from "~/models/common/category/ICategory";
    import { BehaviorSubject } from "~/node_modules/rxjs";
    import { ITheme } from "~/models/common/theme/ITheme";
    import { IThemeService } from "~/services/theme/IThemeService";
    import {ICommunity} from "~/models/communities/community/ICommunity";

    @Component({
        name: "OkDynamicStylesButton",
        components: {},
        subscriptions: function () {
            return {
                activeTheme: this["themeService"].activeTheme
            }
        }
    })
    export default class OkDynamicStylesButton extends Vue {

        @Prop({
            type: Object,
            required: false
        }) readonly category: ICategory;

        @Prop({
            type: Object,
            required: false
        }) readonly community: ICommunity;

        @Prop({
            type: Boolean,
            default: false
        }) readonly faint: boolean;


        $observables!: {
            activeTheme: BehaviorSubject<ITheme | undefined>
        };


        requestInProgress = false;

        private themeService: IThemeService = okunaContainer.get<IThemeService>(TYPES.ThemeService);


        get buttonCssStyle() {

            const activeTheme = this.$observables.activeTheme.value;
            const themeColorIsCommunityColor = this.category ? this.category.color.hex() === activeTheme.primaryColor.hex() : this.community.color.hex() === activeTheme.primaryColor.hex();

            if (this.category) {
                return {
                    "backgroundColor": themeColorIsCommunityColor ? activeTheme.primaryHighlightColor.hsl().string() : this.category.color.hex(),
                    "color": themeColorIsCommunityColor ? activeTheme.primaryInvertColor.hex() : this.category.colorInvert.hex(),
                    "opacity": this.faint ? 0.5 : undefined
                };
            } else {
                return {
                    "backgroundColor": themeColorIsCommunityColor ? activeTheme.primaryHighlightColor?.hsl().string() : this.community.color?.hex(),
                    "color": themeColorIsCommunityColor ? activeTheme.primaryInvertColor?.hex() : this.community.colorInvert?.hex(),
                    "opacity": this.faint ? 0.5 : undefined
                };
            }
        }

        handleButtonClick(e: Event) {
            e.preventDefault();
            const params = this.category ? this.category : this.community;
            this.$emit('handleButtonClick', params);
        }


    }
</script>
