import Color from 'color';
import { ModelData } from 'types/models-data/ModelData';

export interface CommunityMembershipData extends ModelData {
    user_id: number;
    community_id: number;
    is_administrator: boolean;
    is_moderator: boolean;
    community_color: Color;
    community_name: string;
    community_title: string;
}