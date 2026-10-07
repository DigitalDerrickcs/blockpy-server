declare global {
    var $URL_ROOT: string;
    var $MAIN_BLOCKPY_EDITOR: any;
    var $ALL_BLOCKPY_EDITORS: any[];
    var $TIME_CHECKER_ID: any;
    var $blocklyMediaPath: string;
    var $blockPyUrls: Record<string, string>;
    var $blockPyUserData: Record<string, string>;
    var accessToken: string;
    var kettleIframeLoadError: boolean;
    var URLS_UPDATE_SUBMISSION: string;
}
declare global {
    interface Crypto {
        randomUUID: () => string;
    }
}

export {};