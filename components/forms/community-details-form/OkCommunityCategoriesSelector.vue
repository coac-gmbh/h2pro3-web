<template>
    <div class="columns is-multiline is-variable is-1 is-mobile">
        <div class="column is-narrow" v-for="category in allCategories" :key="category.name">
            <ok-button-dynamic-styles
                :category="category"
                :faint="!selectedCategoriesMap[category.name]"
                @handleButtonClick="toggleCategoryActiveState"
            ></ok-button-dynamic-styles>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';
    import { ICategory } from '~/models/common/category/ICategory';
    import OkButtonDynamicStyles from '~/components/buttons/OkButtonDynamicStyles.vue';

    @Component({
        name: 'OkCommunityCategoriesSelector',
        components: { OkButtonDynamicStyles }
    })
    export default class OkCommunityCategoriesSelector extends Vue {
        @Prop({
            type: Array,
            required: true
        }) readonly categories: ICategory[];

        @Prop({
            type: Array,
            required: true
        }) readonly allCategories: ICategory[];

        get selectedCategoriesMap() {
            const map: { [ name: string ]: boolean } = {};

            this.allCategories.forEach(category => {
                map[category.name] = !!this.categories.find(c => c.name === category.name);
            });

            return map;
        }

        toggleCategoryActiveState(category: ICategory) {
            return this.selectedCategoriesMap[category.name]
                ? this.$emit('removeCategory', category)
                : this.$emit('addCategory', category);
        }
    }
</script>
