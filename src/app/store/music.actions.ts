import { createAction,props } from "@ngrx/store";

export const setMusic=createAction('[MUSIC] Set music',props<{song:string,singer:string}>());
