/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/unbound-method */

import { type DependencyList, useEffect } from "react";
import { type Data, type Snowflake, useLanyard } from "use-lanyard";

const useInterval = (ms: number, options: { callback: () => void; deps: DependencyList }) => {
    useEffect(() => {
        const id = setInterval(options.callback, ms);

        return () => {
            clearInterval(id);
        };
    }, [ms, options.callback])
}

export const useUpdatingLanyard = (id: Snowflake, initialData: Data) => {
    const state = useLanyard(id, {
        initialData
    });

    useInterval(5000, {
        callback: state.revalidate,
        deps: [],
    });

    return {
        ...state,
        data: state.data!
    };
}
