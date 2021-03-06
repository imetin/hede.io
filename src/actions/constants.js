
export const CURRENT_SCOPE_VERSION = 6;
export const REQUIRED_SCOPE_VERSION = 6; // at least

/* SCOPE VERSIONS
1: original
2: added organizations
3,4: attempted fixed organizations bugs
5: fully fixed organization bugs
*/

export const GET_GITHUB_REPO_REQUEST = '@project/GET_GITHUB_REPO_REQUEST';
export const GET_GITHUB_REPO_SUCCESS = '@project/GET_GITHUB_REPO_SUCCESS';
export const GET_GITHUB_REPO_FAILURE = '@project/GET_GITHUB_REPO_FAILURE';

export const CREATE_PROJECT_ACCOUNT_REQUEST = '@project/CREATE_PROJECT_ACCOUNT_REQUEST';
export const CREATE_PROJECT_ACCOUNT_SUCCESS = '@project/CREATE_PROJECT_ACCOUNT_SUCCESS';
export const CREATE_PROJECT_ACCOUNT_FAILURE = '@project/CREATE_PROJECT_ACCOUNT_FAILURE';

export const VOTE_WITH_SPONSORS_REQUEST = '@project/VOTE_WITH_SPONSORS_REQUEST';
export const VOTE_WITH_SPONSORS_SUCCESS = '@project/VOTE_WITH_SPONSORS_SUCCESS';
export const VOTE_WITH_SPONSORS_FAILURE = '@project/VOTE_WITH_SPONSORS_FAILURE';

export const CREATE_PROJECT_SPONSOR_REQUEST = '@project/CREATE_PROJECT_SPONSOR_REQUEST';
export const CREATE_PROJECT_SPONSOR_SUCCESS = '@project/CREATE_PROJECT_SPONSOR_SUCCESS';
export const CREATE_PROJECT_SPONSOR_FAILURE = '@project/CREATE_PROJECT_SPONSOR_FAILURE';

export const GET_PROJECT_REQUEST = '@project/GET_PROJECT_REQUEST';
export const GET_PROJECT_SUCCESS = '@project/GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILURE = '@project/GET_PROJECT_FAILURE';

export const BAN_USER_REQUEST = '@user/BAN_USER_REQUEST';
export const BAN_USER_SUCCESS = '@user/BAN_USER_SUCCESS';
export const BAN_USER_FAILURE = '@user/BAN_USER_FAILURE';

export const CHECK_USER_REQUEST = '@user/CHECK_USER_REQUEST';
export const CHECK_USER_SUCCESS = '@user/CHECK_USER_SUCCESS';
export const CHECK_USER_FAILURE = '@user/CHECK_USER_FAILURE';

export const GET_ENTRIES_REQUEST = '@entries/GET_ENTRIES_REQUEST';
export const GET_ENTRIES_SUCCESS = '@entries/GET_ENTRIES_SUCCESS';
export const GET_ENTRIES_FAILURE = '@entries/GET_ENTRIES_FAILURE';

export const GET_POSTBYID_REQUEST = '@entries/GET_POSTBYID_REQUEST';
export const GET_POSTBYID_SUCCESS = '@entries/GET_POSTBYID_SUCCESS';
export const GET_POSTBYID_FAILURE = '@entries/GET_POSTBYID_FAILURE';

// export const ADD_PREFIX_REQUEST = '@contributions/ADD_PREFIX_REQUEST';
// export const ADD_PREFIX_SUCCESS = '@contributions/ADD_PREFIX_SUCCESS';
// export const ADD_PREFIX_FAILURE = '@contributions/ADD_PREFIX_FAILURE';

export const SET_ENTRY = '@entry/SET_ENTRY';

export const GET_ENTRY_REQUEST = '@entry/GET_ENTRY_REQUEST';
export const GET_ENTRY_SUCCESS = '@entry/GET_ENTRY_SUCCESS';
export const GET_ENTRY_FAILURE = '@entry/GET_ENTRY_FAILURE';

export const GET_TITLES_REQUEST = '@title/GET_TITLES_REQUEST';
export const GET_TITLES_SUCCESS = '@title/GET_TITLES_SUCCESS';
export const GET_TITLES_FAILURE = '@title/GET_TITLES_FAILURE';

export const SEARCH_TITLES_REQUEST = '@title/SEARCH_TITLES_REQUEST';
export const SEARCH_TITLES_SUCCESS = '@title/SEARCH_TITLES_SUCCESS';
export const SEARCH_TITLES_FAILURE = '@title/SEARCH_TITLES_FAILURE';

export const GET_LEFT_TITLES_REQUEST = '@title/GET_LEFT_TITLES_REQUEST';
export const GET_LEFT_TITLES_SUCCESS = '@title/GET_LEFT_TITLES_SUCCESS';
export const GET_LEFT_TITLES_FAILURE = '@title/GET_LEFT_TITLES_FAILURE';



export const CREATE_ENTRY_REQUEST = '@entry/CREATE_ENTRY_REQUEST';
export const CREATE_ENTRY_SUCCESS = '@entry/CREATE_ENTRY_SUCCESS';
export const CREATE_ENTRY_FAILURE = '@entry/CREATE_ENTRY_FAILURE';

export const UPDATE_ENTRY_REQUEST = '@entry/UPDATE_ENTRY_REQUEST';
export const UPDATE_ENTRY_SUCCESS = '@entry/UPDATE_ENTRY_SUCCESS';
export const UPDATE_ENTRY_FAILURE = '@entry/UPDATE_ENTRY_FAILURE';

export const MODERATOR_ACTION_REQUEST = '@moderator/MODERATOR_ACTION_REQUEST';
export const MODERATOR_ACTION_SUCCESS = '@moderator/MODERATOR_ACTION_SUCCESS';
export const MODERATOR_ACTION_FAILURE = '@moderator/MODERATOR_ACTION_FAILURE';

export const SET_CONTRIBUTIONS = '@contribution/SET_CONTRIBUTIONS';

export const CREATE_SPONSOR_REQUEST = '@sponsor/CREATE_SPONSOR_REQUEST';
export const CREATE_SPONSOR_SUCCESS = '@sponsor/CREATE_SPONSOR_SUCCESS';
export const CREATE_SPONSOR_FAILURE = '@sponsor/CREATE_SPONSOR_FAILURE';

export const GET_SPONSORS_REQUEST = '@sponsors/GET_SPONSORS_REQUEST';
export const GET_SPONSORS_SUCCESS = '@sponsors/GET_SPONSORS_SUCCESS';
export const GET_SPONSORS_FAILURE = '@sponsors/GET_SPONSORS_FAILURE';

export const GET_MODERATORS_REQUEST = '@sponsors/GET_MODERATORS_REQUEST';
export const GET_MODERATORS_SUCCESS = '@sponsors/GET_MODERATORS_SUCCESS';
export const GET_MODERATORS_FAILURE = '@sponsors/GET_MODERATORS_FAILURE';

export const CREATE_MODERATORS_REQUEST = '@sponsors/CREATE_MODERATORS_REQUEST';
export const CREATE_MODERATORS_SUCCESS = '@sponsors/CREATE_MODERATORS_SUCCESS';
export const CREATE_MODERATORS_FAILURE = '@sponsors/CREATE_MODERATORS_FAILURE';

export const REMOVE_MODERATORS_REQUEST = '@sponsors/REMOVE_MODERATORS_REQUEST';
export const REMOVE_MODERATORS_SUCCESS = '@sponsors/REMOVE_MODERATORS_SUCCESS';
export const REMOVE_MODERATORS_FAILURE = '@sponsors/REMOVE_MODERATORS_FAILURE';

export const GET_STATS_REQUEST = '@stats/GET_STATS_REQUEST';
export const GET_STATS_SUCCESS = '@stats/GET_STATS_SUCCESS';
export const GET_STATS_FAILURE = '@stats/GET_STATS_FAILURE';

export const GET_SPONSORS_BENEFICIARIES_REQUEST = '@sponsors/GET_SPONSORS_BENEFICIARIES_REQUEST';
export const GET_SPONSORS_BENEFICIARIES_SUCCESS = '@sponsors/GET_SPONSORS_BENEFICIARIES_SUCCESS';
export const GET_SPONSORS_BENEFICIARIES_FAILURE = '@sponsors/GET_SPONSORS_BENEFICIARIES_FAILURE';

export const GET_BENEFICIARIES_REQUEST = '@beneficiaries/GET_BENEFICIARIES_REQUEST';
export const GET_BENEFICIARIES_SUCCESS = '@beneficiaries/GET_BENEFICIARIES_SUCCESS';
export const GET_BENEFICIARIES_FAILURE = '@beneficiaries/GET_BENEFICIARIES_FAILURE';

export const GET_USER_REQUEST = '@user/GET_USER_REQUEST';
export const GET_USER_SUCCESS = '@user/GET_USER_SUCCESS';
export const GET_USER_FAILURE = '@user/GET_USER_FAILURE';

export const CREATE_USER_REQUEST = '@user/CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = '@user/CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = '@user/CREATE_USER_FAILURE';

export const GET_BAN_REQUEST = '@user/GET_BAN_REQUEST';
export const GET_BAN_SUCCESS = '@user/GET_BAN_SUCCESS';
export const GET_BAN_FAILURE = '@user/GET_BAN_FAILURE';


export const UI_ACTION_SHOW_TITLES = '@UI_ACTION_SHOW_TITLES';
export const UI_ACTION_HIDE_TITLES = '@UI_ACTION_HIDE_TITLES';