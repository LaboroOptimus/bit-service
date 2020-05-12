import { Redirect } from 'react-router';
import { compile } from 'path-to-regexp';

export function redirect(from, to) {
    return {
        path: from,
        onEnter(nextState, replace) {
            const { location, params } = nextState;

            let pathname;
            if (to.charAt(0) === '/') {
                pathname = compile(to)(params);
            } else if (!to) {
                pathname = location.pathname;
            } else {
                let routeIndex = nextState.routes.indexOf(this);
                let parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
                let pattern = parentPattern.replace(/\/*$/, '/') + to;
                pathname = compile(pattern)(params);
            }

            replace({
                pathname,
                query: this.query || location.query,
                state: this.state || location.state
            })
        }
    }
}
