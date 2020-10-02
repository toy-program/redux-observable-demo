import { ofType } from "redux-observable";
import { from, concat } from "rxjs";
import {catchError, mergeMap, startWith, switchMap} from "rxjs/operators";
import * as actions from "../actions/";
import * as ActionTypes from "../constants/ActionTypes";
import { fakeAuth } from "../services/authService";

export default function authEpic(action$) {
    return action$.pipe(
        ofType(ActionTypes.GET_AUTH),

        switchMap(action => concat(
                from(fakeAuth(action.username, action.password)).pipe(
                    mergeMap(auth => [actions.setAuth(auth), actions.hideErrorMessage()]),
                    startWith(actions.loadingStart()),
                    catchError(err => [actions.showErrorMessage(err.message)]),
                
                ),
                [actions.loadingEnd()]
            )
        )
    )
}