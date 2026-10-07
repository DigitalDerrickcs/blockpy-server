export function ajax_get(url: string, data: any) {
    if (window['accessToken']) {
        data['access_token'] = window['accessToken'];
    }
    return $.get(window["$URL_ROOT"]+url, data);
}

export function ajax_post(url: string, data: any) {
    if (window['accessToken']) {
        data['access_token'] = window['accessToken'];
    }
    return $.post(window["$URL_ROOT"]+url, data);
}

export function ajax_put(url: string, data: any) {
    return $.ajax({
        type: 'PUT',
        url: window["$URL_ROOT"]+url,
        contentType: 'application/json',
        data: JSON.stringify(data),
    });
}

export function ajax_get_file(url: string) {
    return $.ajax({
        url: window["$URL_ROOT"]+url,
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        }
    });
}

export function ajax_delete(url: string) {
    return $.ajax({
        type: 'DELETE',
        url: window["$URL_ROOT"]+url
    });
}

export function hideOverlay() {
    $('.overlay').hide();
}
export function showOverlay() {
    $('.overlay').show();
}