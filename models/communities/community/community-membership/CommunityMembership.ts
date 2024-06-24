import Color from 'color';
import { DataModel } from '~/models/abstract/DataModel';
import { DataModelAttributeMap } from '~/models/abstract/IDataModel';
import { colorDeserializer, colorSerializer } from '~/models/common/serializers';
import { ModelData } from '~/types/models-data/ModelData';
import { ICommunityMembership } from './ICommunityMembership';


export class CommunityMembership extends DataModel<CommunityMembership> implements ICommunityMembership {

    userId: number;
    communityId: number;
    isAdministrator: boolean;
    isModerator: boolean;
    color: Color;
    colorInvert?: Color;
    title: string;
    name: string;

    dataMaps: DataModelAttributeMap<ICommunityMembership>[] = [
        {
            dataKey: 'user_id',
            attributeKey: 'userId',
        },
        {
            dataKey: 'community_id',
            attributeKey: 'communityId',
        },
        {
            dataKey: 'community_color',
            attributeKey: 'color',
            deserializer: colorDeserializer,
            serializer: colorSerializer,
        },
        {
            dataKey: 'community_title',
            attributeKey: 'title',
        },
        {
            dataKey: 'community_name',
            attributeKey: 'name',
        },
        {
            dataKey: 'is_administrator',
            attributeKey: 'isAdministrator',
        },
        {
            dataKey: 'is_moderator',
            attributeKey: 'isModerator',
        },
    ];

    constructor(data: ModelData) {
        super(data);
        this.updateWithData(data);
        this.bootstrapComputedAttributes();
    }

    private bootstrapComputedAttributes() {
        let colorInvert;

        if (this.color && this.color.isDark()) {
            // Dark
            colorInvert = Color('rgb(255, 255, 255)');
        } else {
            // Light
            colorInvert = Color('rgb(0, 0, 0)');
        }

        this.colorInvert = colorInvert;
    }
}

