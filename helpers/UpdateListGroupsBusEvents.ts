import Vue from 'vue';

export enum ListGroupsBusEvents {
  AdministerEvent = 'administer_event',
}

export const groupsEventBus = new Vue();
