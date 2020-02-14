import { IModelFactory } from 'interfaces/IModelFactory';
import { LruCache } from '~/lib/caches/LruCache';
import { ICommunity } from '~/models/communities/community/ICommunity';
import { CommunityData } from '~/types/models-data/communities/CommunityData';
import { Community } from '~/models/communities/community/Community';

class CommunityFactory implements IModelFactory<ICommunity> {
    private cache: LruCache<number, ICommunity> = new LruCache(100);

    make(data: CommunityData, config: {storeInSessionCache: boolean} = {storeInSessionCache: true}): ICommunity {
        const communityId = data.id;

        let community = this.cache.get(communityId);

        if (community) {
            community.update(data);
            return community;
        }

        community = new Community(data);
        this.cache.set(communityId, community);

        return community;
    }
}

const communityFactory = new CommunityFactory();

export default communityFactory;