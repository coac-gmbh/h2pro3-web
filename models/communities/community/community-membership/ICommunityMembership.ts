import Color from 'color';
import { IDataModel } from '~/models/abstract/IDataModel';


export interface ICommunityMembership extends IDataModel<ICommunityMembership> {
    userId: number;
    communityId: number;
    isAdministrator: boolean;
    isModerator: boolean;
    color: Color;
    title: string;
    name: string;
}

