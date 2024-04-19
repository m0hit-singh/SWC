"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
app.get("/test", (req, res)=>{
    res.send("API WORKS!!!");
});
app.listen(8081, ()=>{
    console.log("server listen on port=8081");
});
