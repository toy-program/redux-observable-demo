import React from "react";

const Logout = (props) => {
    const {auth} = props;

    const logout = () => {
        const {actions} = props;
        actions.resetAuth();
    }
    
    if (!auth) return null;

    return (
        <div className="logout">
            <form>
                <div>{auth.username}님 안녕하세요.</div>
                <br />
                <button type="button" onClick={logout}>로그아웃</button>
            </form>
        </div>
    )
}

export default Logout;