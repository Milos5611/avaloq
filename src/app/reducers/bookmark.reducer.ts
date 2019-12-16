import { Bookmark } from '../inerfaces/bookmark.interface';
import * as BookmarkAction from './../actions/bookmarks.actions';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: Bookmark[] = [
  {
    name: 'Avaloq',
    url: 'https://www.avaloq.com',
    group: 'Banking'
  }
];

const reducer = createReducer(
  initialState,
  on(BookmarkAction.actionAddBookmark, (state, payload) => [...state, payload]),
  on(BookmarkAction.actionRemoveBookmark, (state, payload) => {
    return state.filter(book => {
      if (
        !(
          book.group === payload.group &&
          book.url === payload.url &&
          book.name === payload.name
        )
      ) {
        return book;
      }
    });
  })
);

export function bookmarkReducer(state: Bookmark[] | undefined, action: Action) {
  return reducer(state, action);
}
