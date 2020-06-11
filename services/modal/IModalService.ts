import { IPost } from '~/models/posts/post/IPost';
import { BehaviorSubject } from '~/node_modules/rxjs';
import { ModalType } from '~/services/modal/lib/ModalType';
import { IPostReaction } from '~/models/posts/post-reaction/IPostReaction';
import { IPostComment } from '~/models/posts/post-comment/IPostComment';
import { IPostCommentReaction } from '~/models/posts/post-comment-reaction/IPostCommentReaction';
import { OkHttpListOnScrollLoader, OkHttpListRefresher } from '~/components/http-list/lib/OkHttpListParams';

export interface IModalService {

    // Methods for clients
    openPostModal(params: PostModalParams): Promise<void>;

    openPostReactionsModal(params: PostReactionsModalParams): Promise<void>;

    openPostCommentReactionsModal(params: PostCommentReactionsModalParams): Promise<void>;

    openCommunitiesList<T>(params: HttpListModalParams<T>): Promise<void>;

    // Methods for OkModals component
    activeModal: BehaviorSubject<ModalType | undefined>

    notifyModalClosed(): void;

    activeModalParams: BehaviorSubject<ModalParams | undefined>;

    setActiveModalReturnData(...args: any[]);

}

export type ModalParams = PostModalParams | PostReactionsModalParams | HttpListModalParams<any>;

export interface HttpListModalParams<T> {
    refresher: OkHttpListRefresher<T>;
    onScrollLoader: OkHttpListOnScrollLoader<T>;
    title?: string;
}

export interface PostModalParams {
    post: IPost;
}

export interface PostReactionsModalParams {
    post: IPost;
    onRequestInProgress: (requestInProgress: boolean) => void;
    onReacted: (reaction: IPostReaction) => void;
}


export interface PostCommentReactionsModalParams {
    post: IPost;
    postComment: IPostComment;
    onRequestInProgress: (requestInProgress: boolean) => void;
    onReacted: (reaction: IPostCommentReaction) => void;
}