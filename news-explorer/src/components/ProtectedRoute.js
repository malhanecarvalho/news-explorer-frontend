import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

function ProtectedRoute({ component: Component, ...props }) {
    console.log(props.loggedIn)
    return (
        <Route
            {...props}
            render={() =>
                props.loggedIn ? <Component /> : <Redirect to="/" />}
        />
    );
};

export default ProtectedRoute;