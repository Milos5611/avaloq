import { createAction } from '@ngrx/store';

export const actionAddBookmark = createAction(
  '[BOOKMARK] Add',
  (name: string, url: string, group: string) => ({ name, url, group })
);

export const actionRemoveBookmark = createAction(
  '[BOOKMARK] Delete',
  (name: string, url: string, group: string) => ({ name, url, group })
);
