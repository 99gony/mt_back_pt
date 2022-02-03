/// <reference types="passport-oauth2" />
declare const AppleStrategy_base: new (...args: any[]) => import("passport-oauth2");
export declare class AppleStrategy extends AppleStrategy_base {
    constructor();
    validate(accessToken: any, refreshToken: any, idToken: any, profile: any, done: any): Promise<void>;
}
export {};
