"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppleStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_apple_1 = require("passport-apple");
let AppleStrategy = class AppleStrategy extends (0, passport_1.PassportStrategy)(passport_apple_1.Strategy) {
    constructor() {
        super({
            clientID: process.env.APPLE_CLIENT_ID,
            teamID: process.env.APPLE_TEAM_ID,
            callbackURL: process.env.APPLE_CALLBACK_URL,
            keyID: process.env.APPLE_KEY_ID,
            privateKeyLocation: process.env.APPLE_KEY_LOCATION,
        });
    }
    async validate(accessToken, refreshToken, idToken, profile, done) {
        console.log(idToken);
        console.log(profile);
    }
};
AppleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppleStrategy);
exports.AppleStrategy = AppleStrategy;
//# sourceMappingURL=apple.strategy.js.map