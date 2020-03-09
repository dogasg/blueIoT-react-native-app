import React from "react";

export const AuthContext = React.createContext();

/* I created this file beacuse we need AuthContext in three screens
App , LogInScreen and LogOutScreen. With this way, we avoid setting a circular dependency
*/
