/// <reference path="../index.ts" />
/**
    * Namespace for requests to the Reddit API operations.
    * @namespace RoKA.Reddit
*/
module RoKA.Reddit {
    /**
        Perform a request to Reddit to either save or unsave an item.
        @class RedditSaveRequest
        @param thing The Reddit ID of the item to either save or unsave
        @param type Whether to save or unsave
        @param callback Callback handler for the event when loaded.
    */
    "use strict";
    export class SaveRequest {
        constructor(thing: string, type: SaveType, callback: any) {
            let url = "https://api.reddit.com/api/" + SaveType[type].toLowerCase();
            new HttpRequest(url, RequestType.POST, callback, {
                "uh": Preferences.getString("redditUserIdentifierHash"),
                "id": thing
            });
        }
    }

    export enum SaveType {
        SAVE,
        UNSAVE
    }
}
