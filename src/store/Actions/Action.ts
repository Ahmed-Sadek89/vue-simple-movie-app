import { searchByIDType, searchByTitleType } from "@/types/types";
import { Commit } from "vuex"


class Action {
    private _mutation_name: string;
    private _api_link: string;
    private _result_type: 'array' | 'object';
    
    constructor() {
        this._mutation_name = '';
        this._api_link = '';
        this._result_type = 'array'
    } 

    public setParams(
        mutation_name: string, 
        api_link: string, 
        result_type: 'array' | 'object'
    ): void 
    {
        this._mutation_name = mutation_name;
        this._api_link = api_link;
        this._result_type = result_type
    }

    public async fetching(commit: Commit): Promise<void> {
        commit(this._mutation_name, {
            loading: true,
            error: false,
            result: this._result_type === 'array' ? [] : {}
        })
        await fetch(this._api_link)
        .then(result => {
            return result.json()
        })
        // result = {} | [...] | [null]
        .then(result => {
            let res;
            if( this._result_type === 'array' ) {
                if ( result.Search ) {
                    res = result.Search
                } else {
                    res = []
                }
            } else {
                res = result
            }
            commit(this._mutation_name, {
                loading: false,
                error: false,
                result: res,
                
            })
        })
        .catch(() => {
            commit(this._mutation_name, {
                loading: false,
                error: true,
                result: this._result_type === 'array' ? [] : {}
            })
        })

    }

}

export default Action