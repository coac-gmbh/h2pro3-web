<template>
    <div class="is-flex justify-center align-items-center has-height-100-percent has-padding-20">
        <div class="ok-has-background-primary is-semi-rounded is-relative has-height-100-percent has-padding-30">
            <h1 class="is-size-3 has-text-rounded ok-has-text-primary-invert">
                Über uns – Entwickler und Förderer von <span v-html="$t('name_html')"></span>
            </h1>
            <p>
                <span v-html="$t('name_html')"></span> wird durch das Konsortium der Partner coac GmbH, HyCologne – Wasserstoff Rheinland e.V. und Technische Hochschule Köln entwickelt. Die Maßnahme wird durch das Bundesmodellvorhaben „Unternehmen Revier“ für Maßnahmen zur Strukturanpassung in Braunkohlebergbauregionen gefördert. Die Vorbereitungen wurden u. a. auch durch die Zukunftsagentur Rheinisches Revier, das Wuppertal Institut für Klima, Umwelt, Energie gGmbH und die Provadis Hochschule sowie durch ENGIE Lab Environment & Society und Climate KIC im Rahmen des Pathfinder-Projektes HyDistrict aus der Flagshipmaßnahme Re-Industrialise unterstützt. Der Think-Tank „akkuraum“ der coac GmbH diente als Ort für die methodische Entwicklung des Basiskonzepts.
            </p>

            <div class="columns is-vcentered is-centered is-mobile has-padding-top-40 has-padding-bottom-20 has-padding-left-20-desktop has-padding-right-20-desktop">
                <div class="column is-flex justify-center">
                    <img src="@/pages/auth/assets/hyc-logo.svg" alt="HyCologne">
                </div>
                <div class="column is-flex justify-center">
                    <img src="@/pages/auth/assets/th-koeln-logo.svg" alt="TH Köln">
                </div>
                <div class="column is-flex justify-center">
                    <img src="@/pages/auth/assets/coac-logo.svg" alt="coac">
                </div>
            </div>
        </div>
    </div>
</template>
