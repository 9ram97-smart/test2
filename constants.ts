export const constants = {
    API_METHOD: {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        PATCH: 'PATCH',
        DELETE: 'DELETE',
        MODE_CORS: 'cors',
    },
    FILTER_QUERY: {
        OPTIONAL_FIELDS: 'optionalFields',
        PAGE: 'page',
        LIMIT: 'limit',
        TYPE_EQ: 'where[type][inq]',
        OS_EQ: 'where[operatingSystem][like]',
        MAC: 'macos',
        WINDOWS: 'windows',
        VERSION_EQ: 'where[version]',
        LASTSYNC_GT: 'where[lastSync][gte]',
        LASTSYNC_LT: 'where[lastSync][lt]',
        LASTSYNC_OR_LT: 'where[or][0][lastSync][lt]',
        TAGS_EQ: 'where[tags]',
        STATUS_EQ: 'where[status]',
        NAME: 'where[name][like]',
        SORT: 'sort',
        CHROME: 'ChromeOS',
        ANDROID: 'Android',
        IOS: 'iOS',
    },
    CHROME_FILTER_QUERY: {
        VERSION_EQ: 'osVersion',
        LASTSYNC_EQ: 'lastSync',
        LASTSYNC_LT: 'lt',
        ORIGIN_TYPE_ID: 38,
        SORT_FIELD_LABEL: 'label',
        SORT_ORDER_DESC: 'DESC',
        SORT_ORDER_ASC: 'ASC',
        EQUALS: 'eq',
    },
    MOBILE_FILTER_QUERY: {
        LASTSYNC_LT: 'lt',
        SORT_FIELD_LABEL: 'label',
        SORT_FIELD_LASTSYNC: 'lastSync',
        SORT_ORDER_DESC: 'DESC',
        SORT_ORDER_ASC: 'ASC',
    },
    ORIGIN_TYPE: {
        ANYCONNECT: 34,
        ROAMING: 9,
        CHROMEBOOK: 38,
        ANDROID: 50,
        MOBILE: 36,
    },
    AUTO_DELETE_OPTIONS: {
        DO_NOT_DELETE: '0',
        THIRTY_DAYS: '30',
        NINTY_DAYS: '90',
        ONE_EIGHTY_DAYS: '180',
    },
    AUTO_DELETE_VALIDITY: {
        DO_NOT_DELETE: 'Do not delete',
        THIRTY_DAYS: '30 days',
        NINTY_DAYS: '90 days',
        ONE_EIGHTY_DAYS: '180 days',
    },
    SWG_SETTINGS_STRING: {
        SWG_ENABLED: 'SWGEnabled',
        UPDATE: 'update',
        ONE: '1',
        ZERO: '0',
        DELETE: 'delete',
    },
    BULK_DELETE_QUERY: {
        TYPE_EQ: 'where[deviceId][inq]',
    },
    OS_NAME: {
        CHROME: 'Chrome',
        CHROMEOS: 'ChromeOS',
        CHROME_OS: 'chromeos',
        WINDOWS: 'Windows',
        MACOS: 'MacOS',
    },
    ACTIVITY_SEARCH_PATH: {
        CHROME_PATH: '/reports/activity?encodedFilters=JTdCJTIyc2VsZWN0ZWREYXRlUmFuZ2VJZHglMjIlM0EwJTJDJTIyb3JpZ2ludHlwZSUyMiUzQSU1QiUyMmNocm9tZWJvb2tfdXNlciUyMiU1RCU3RA%3D%3D',
    },
    UPGRADE_MANAGER_UMB_LINK: 'https://dashboard.umbrella.com/o/',
    UPGRADE_MANAGER_UMB_EXTENDED_LINK: '/#/upgradetosseapp',
    IS_SSE_BROWNFIELD_ORG_SETTING: 'IsSSEBrownfield',
    IS_SSE_HYBRID_ORG_SETTING: 'IsSSEHybrid',
    IS_SSE_DNS_ADVANTAGE_FEATURES: 'FL_ENABLE_SSE_DNS_ADVANTAGE_FEATURES',
    IS_SSE_DNS_ESSENTIALS_FEATURES: 'FL_ENABLE_SSE_DNS_ESSENTIALS_FEATURES',
    VALUE_ONE: '1',
    MODE_AND: 'AND',
    MODE_OR: 'OR',
    ROAMING_ORIGIN_TYPE_NAME: 'roaming',
    ANYCONNECT_ORIGIN_TYPE_NAME: 'anyconnect',
    CHROMEBOOK_ORIGIN_TYPE_NAME: 'chromebook_user',
    ANDROID_ORIGIN_TYPE_NAME: 'android',
    IOS_ORIGIN_TYPE_NAME: 'ios',
    MOBILE_DEVICE_ORIGIN_TYPE_NAME: 'mobile_device',
    YES: 'yes',
    BOTH: 'Both',
    ONLY_CHROME: 'OnlyChrome',
};

export const SETTINGS = {
    SWGEnabled: 'SWGEnabled',
};

export const API_URL_TYPE = {
    API_GATEWAY_URL: 'apiGatewayUrl',
    API_V3_URL: 'apiv3url',
    API_POLICY_URL: 'policyApiGatewayUrl',
    API_SSE_URL: 'downloadSecureClientUrl',
    API_OPEN_API_URL: 'openApiv2ApiGwBaseUrl',
};

export default constants;

export const MDM_NAMES : any = {
    meraki: 'Cisco Meraki',
    apple: 'Apple',
    maas360: 'IBM MaaS360',
    intune: 'Microsoft Intune',
    jamf: 'Jamf',
    mobiconnect: 'MobiConnect',
    mobileiron: 'MobileIron',
    workspaceone: 'Workspace ONE',
    generic: 'Managed',
    unmanaged_ios: 'Unmanaged',
    android: 'Managed',
    unmanaged_android: 'Unmanaged',
};

export const getDocumentationLink = (dashx: any): string => {
    const environment = dashx.environment?.env;
    const environmentType = dashx.environment?.envType;

    const sseDocsDomain = 'https://docs.sse.cisco.com/sse-user-guide/docs/';
    const sseIL2DocsDomain = 'https://securitydocs.cisco.com/api/v0/apps?appId=SecureAccessGov&topic=';
    const sseIL5DocsDomain = 'https://securitydocs.cisco.com/api/v0/apps?appId=SecureAccessGov&topic=';

    if (environmentType === 'fed' && environment?.startsWith('gov')) {
        return sseIL2DocsDomain;
    } else if (environmentType === 'fed' && environment?.startsWith('mil')) {
        return sseIL5DocsDomain;
    } else {
        return sseDocsDomain;
    }
};
