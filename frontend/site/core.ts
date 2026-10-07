/*
The majority of these functions are used throughout the static
Flask templates, but are defined here for convenience.

Inside of the templates, they are available via the `frontend` object.
 */
// TODO: Need proper types on these files

export function submitGrade(submissionId: any, courseId: any, score: any, correct: any) {
    let data = {
        submission_id: submissionId,
        score: score,
        correct: correct,
        force_update: true,
        course_id: courseId,
    };
    return $.post(window['URLS_UPDATE_SUBMISSION'], data);
}

export function checkCookies() {
    let cookieEnabled = navigator.cookieEnabled;
    if (!cookieEnabled) {
        document.cookie = "testcookie";
        cookieEnabled = document.cookie.indexOf("testcookie") !== -1;
    }
    return cookieEnabled;
}

export function getLocalStorage(key: any, defaultValue: any) {
    if (defaultValue === undefined) {
        defaultValue = null;
    }
    try {
        let value = localStorage.getItem(key);
        if (value === null) {
            return defaultValue;
        } else {
            return value;
        }
    } catch (e) {
        return defaultValue;
    }
}

export function setLocalStorage(key: any, value: any) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
    }
}