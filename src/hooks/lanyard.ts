import { DependencyList, useEffect } from "react";
import { Data, Snowflake, useLanyard } from "use-lanyard";

const useInterval = (ms: number, options: { callback: () => void; deps: DependencyList }) => {
    useEffect(() => {
        const id = setInterval(options.callback, ms);

        return () => {
            clearInterval(id);
        };
    }, [ms, ...options.deps])
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
