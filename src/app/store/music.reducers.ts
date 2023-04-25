import { Action,createReducer, on } from '@ngrx/store';
import { setMusic } from './music.actions';

export interface MusicState {
    song: string;
    singer: string;
}

const initialState: MusicState = {
    singer: "",
    song: ""
}

export const _musicReducer = createReducer(
    initialState,
    on(setMusic, (state,{ singer, song }) => {
        return {
            ...state,
            singer,
            song
        }
    })
);

export function musicReducer(state:MusicState | undefined, action:Action) {
    return _musicReducer(state, action);
}

