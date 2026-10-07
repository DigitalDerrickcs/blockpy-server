"""
Data format for a textbook

toplevel:
    version: int
    settings: dict[str, any]
    content: list[Item]

Item:
    type: ['header', 'reading']
    content: list[Item]


{
    "version": 1,
    "settings": {},
    "content": [
        { "header": "Chapter 1) Introduction", "content": [
            { "reading": "bakery_intro_primer_read" },
            { "header": "Part A", "group": "bakery_intro_a", "content": [
                { "reading": "bakery_intro_basics_read" },
                { "reading": "bakery_intro_programs_read" },
                { "reading": "bakery_intro_console_read" },
                { "reading": "bakery_intro_values_read" },
                { "reading": "bakery_intro_types_read" },
                { "reading": "bakery_intro_math_read" },
                { "reading": "bakery_intro_logic_read" },
                { "reading": "bakery_intro_eval_read" }
            ]},
            { "header": "Part B", "group": "bakery_intro_a", "content": [
                { "reading": "bakery_intro_variables_read" },
                { "reading": "bakery_intro_tracing_read" },
                { "reading": "bakery_intro_modules_read" },
                { "reading": "bakery_intro_comments_read" },
                { "reading": "bakery_intro_import_read" },
                { "reading": "bakery_intro_strings_read" },
                { "reading": "bakery_intro_string_ops_read" },
                { "reading": "bakery_intro_errors_read" }
            ]}
        ]},
        { "header": "Chapter 2) Functions", "content": [
            { "reading": "bakery_functions_primer_read" },
            { "header": "Part A", "group": "bakery_functions_a", "content": [
                { "reading": "bakery_functions_calling_read" },
                { "reading": "bakery_functions_builtins_read" },
                { "reading": "bakery_functions_defining_read" },
                { "reading": "bakery_functions_checklist_read" },
                { "reading": "bakery_functions_testing_read" },
                { "reading": "bakery_functions_debugging_read" }
            ]},
            { "header": "Part B", "group": "bakery_functions_b", "content": [
                { "reading": "bakery_functions_scopes_read" },
                { "reading": "bakery_functions_docstrings_read" },
                { "reading": "bakery_functions_flow_read" },
                { "reading": "bakery_functions_external_read" }
            ]}
        ]}
    ]
}

"""


class InvalidTextbookSchema(Exception):
    pass


def search_textbook_for_key(textbook, key):
    if textbook.get('version', 1) == 1:
        return search_textbook_for_key_v1(textbook, key)
    else:
        raise InvalidTextbookSchema("Unknown or missing version")


def search_textbook_for_key_v1(textbook, key):
    if key in textbook:
        yield textbook[key]
    if 'content' in textbook:
        for item in textbook['content']:
            yield from search_textbook_for_key_v1(item, key)


def rehydrate_textbook(textbook, readings, groups):
    if textbook.get('version', 1) == 1:
        return rehydrate_textbook_v1(textbook, readings, groups)
    raise InvalidTextbookSchema("Unknown or missing version")


MISSING_GROUP_V1 = {
    "name": "Missing Group",
    "missing": True
}

MISSING_READING_V1 = {
    "name": "Missing Reading",
    "missing": True
}

def rehydrate_reading_v1(reading):
    return {
        'name': reading.name,
        'url': reading.url,
        'id': reading.id,
        'missing': False
    }

def rehydrate_group_v1(group):
    return {
        'name': group.name,
        'url': group.url,
        'id': group.id,
        'missing': False
    }


def rehydrate_textbook_v1(textbook, readings, groups):
    if 'reading' in textbook:
        if textbook['reading'] in readings:
            textbook['reading'] = rehydrate_reading_v1(readings[textbook['reading']])
        else:
            textbook['reading'] = MISSING_READING_V1.copy()
    if 'group' in textbook:
        if textbook['group'] in groups:
            textbook['group'] = rehydrate_group_v1(groups[textbook['group']])
        else:
            textbook['group'] = MISSING_GROUP_V1.copy()
    if 'content' in textbook:
        for item in textbook['content']:
            rehydrate_textbook_v1(item, readings, groups)
    return textbook
