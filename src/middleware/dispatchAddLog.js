const dispatchAddLog = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

const crashReporter = store => next => action => {
    try {
        return next(action);
    }
    catch (err) {
        console.error('Caught an exception', err);
        throw err;
    }
};

function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
        if(typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
        }

        return next(action);
    }
}

const thunkMiddleware = createThunkMiddleware();
thunkMiddleware.withExtraArgument = createThunkMiddleware;

export {
    dispatchAddLog,
    crashReporter,
    thunkMiddleware
}