import { Bookmark } from './../inerfaces/bookmark.interface';
import * as BookmarkAction from './../actions/bookmarks.actions';

const initialState: Bookmark[] = [{
    name: 'Avaloq',
    url: 'https://www.avaloq.com',
    group: 'Banking'
}];

export function bookmarkReducer(state: Bookmark[] = [...initialState], action: BookmarkAction.Actions) {
    switch (action.type) {
        case BookmarkAction.ADD_BOOKMARK:
            return [...state, action.payload];
        case BookmarkAction.DELETE_BOOKMARK:
            return state.filter(book => {
                if (!(book.group === action.payload.group
                    && book.url === action.payload.url
                    && book.name === action.payload.name)) {
                    return book;
                }
            });
        default:
            return state;
    }
}
