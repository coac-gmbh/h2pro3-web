<template>
    <div class="columns is-multiline is-variable is-1 is-mobile">
        <div class="column is-narrow is-paddingless has-padding-right-10 has-padding-top-10" v-for="category in categories" :key="category.name">
            <ok-dynamic-styles-button  @handleButtonClick="categoryRedirect" :category="category" />
        </div>
    </div>
</template>


<script lang="ts">
    import { Component, Prop, Vue } from "nuxt-property-decorator"
    import OkSmartText from "~/components/smart-text/OkSmartText.vue";
    import OkDynamicStylesButton from '~/components/buttons/OkDynamicStylesButton.vue';
    import { ICategory } from "~/models/common/category/ICategory";

    @Component({
        name: "OkCommunityProfileCategories",
        components: {OkDynamicStylesButton, OkSmartText},
    })
    export default class OkCommunityProfileCategories extends Vue {

        @Prop({
            type: Array,
            required: true
        }) readonly categories: ICategory;

        categoryRedirect(category) {
            this.$router.push({ name: 'communities', params: { category: category.name }})
        }
    }
</script>



