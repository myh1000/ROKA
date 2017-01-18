/// <reference path="../index.ts" />
/**
    * Namespace for requests to the Reddit API operations.
    * @namespace RoKA.Reddit
*/
module RoKA.Reddit {
    /**
        * Perform a request to Reddit to submit a comment.
        * @class CommentRequest
        * @param thing The Reddit ID of the item the user wants to comment on.
        * @param comment A markdown string containing the user's comment
        * @param callback Callback handler for the event when loaded.
    */
    "use strict";
    export class CommentRequest {
        constructor(thing: string, comment: string, callback?: any) {
            let url = "https://api.reddit.com/api/comment";
            new HttpRequest(url, RequestType.POST, callback, {
                "uh": Preferences.getString("redditUserIdentifierHash"),
                "thing_id": thing,
                "text": comment,
                "api_type": "json"
            });
        }
    }
}
