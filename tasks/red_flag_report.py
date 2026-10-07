import difflib
import os

DIFF_TEMPLATE = """<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
              "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title></title>
            <style type="text/css">
                table.diff {
                    font-family:Courier,serif;
                    border:medium;
                    margin-bottom: 4em;
                    width: 100%;
                }
                .diff_header {background-color:#e0e0e0}
                td.diff_header {text-align:right}
                .diff_next {background-color:#c0c0c0}
                .diff_add {background-color:#aaffaa}
                .diff_chg {background-color:#ffff77}
                .diff_sub {background-color:#ffaaaa}
            </style>
        </head>
        <body>"""


def code_name(ring):
    result = set()
    for sub in ring:
        name = sub.user.first_name[0] + sub.user.last_name
        result.add(name.strip())
    return "-".join(sorted(result))


def make_pair(left, right):
    return tuple(sorted((left, right)))


def make_anchor(text):
    return "".join([t.replace(' ', '').lower() for t in text])


def link(text, anchor):
    return f"<a href='#{anchor}'>{text}</a>"


differ = difflib.HtmlDiff(tabsize=4, wrapcolumn=60)


def make_report(directory, reports):
    index_file = os.path.join(directory, "index.csv")
    with open(index_file, 'w', encoding='utf-8') as out:
        print(DIFF_TEMPLATE, file=out)
        for student, report in reports.items():
            name = student.name()
            assignment_name = report.assignment.name
            final_filename = f"{report.course_id}-{report.user_id}.html"
            filename = os.path.join(directory, final_filename)
            with open(filename, 'w', encoding='utf-8') as out:
                print(DIFF_TEMPLATE, file=out)

                print(f"<p>Similarity report for {name} (<code>{report.course.name}</code> on <code>{assignment_name}</code>)</p>", file=out)
                print(f"<h1>Other Users:</h1>", file=out)
                print(f"<ol>", file=out)
                for friend, sim in report.friends:
                    friend_name = friend.user.name()
                    print("<li>", link(friend_name, friend.user_id), f"({sim}%) from {friend.course.name}</li>", file=out)
                print(f"</ol>", file=out)

                print("<h1>File Similarity</h1>", file=out)
                for friend, sim in report.friends:
                    friend_name = friend.user.name()
                    table = differ.make_table(report.code.splitlines(), friend.code.splitlines(), name, friend_name)
                    print(f"<a id='{friend.user_id}' />", file=out)
                    print(table, "<br>" * 2, file=out)

                print("</body></html>", file=out)

    return index_file