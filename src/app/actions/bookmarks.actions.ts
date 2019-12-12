import { Action } from '@ngrx/store';
import { Bookmark } from './../inerfaces/bookmark.interface';

export const ADD_BOOKMARK = '[BOOKMARK] Add';
export const DELETE_BOOKMARK = '[BOOKMARK] Delete';

export class AddBookmark implements Action {
    readonly type = ADD_BOOKMARK;

    constructor(public payload: Bookmark) { }
}
export class DeleteBookmark implements Action {
    readonly type = DELETE_BOOKMARK;

    constructor(public payload: Bookmark) { }
}

export type Actions = AddBookmark | DeleteBookmark;

