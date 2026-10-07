import re
import unittest

DEFAULT_SECTION_PATTERN = r"^(##### Part (.+))$"


def inject_code_part(existing_code, new_code, part_id):
    """
    TODO: Someone unit test the heck out of this, please...

    :param existing_code:
    :param new_code:
    :param part_id:
    :return:
    """
    raw_parts = re.split(DEFAULT_SECTION_PATTERN, existing_code, flags=re.M)
    header, raw_parts = raw_parts[0], raw_parts[1:]
    new_body = [header] if header else []
    updated = False
    for i in range(0, len(raw_parts), 3):
        full_part_header, candidate_part_id, part_body = raw_parts[i:i+3]
        new_body.append(full_part_header)
        if candidate_part_id == part_id:
            new_body.append(new_code)
            updated = True
        else:
            if part_body and part_body[0] == '\n':
                part_body = part_body[1:]
            if i != len(raw_parts) - 3 and part_body and part_body[-1] == '\n':
                part_body = part_body[:-1]
            new_body.append(part_body)
    if not updated:
        new_body.append("##### Part " + part_id)
        new_body.append(new_code)
    return "\n".join(new_body)


TEXT = """##### Part #first-editor
a = 0
print(a)
##### Part #sneaky-mid-editor
x = 9
print('Not a problem to have "##### Part #sneaky-mid-editor" in here.')
print(x)
##### Part #second-editor
b = 7
print(b)
# This will cause an error!
print(a)
##### Part #third-editor
c = 2
print(c)
5 + \"\""""

class TestInjectCodePart(unittest.TestCase):
    def test_add_existing_middle(self):
        self.assertEqual(inject_code_part(TEXT, "print('hello world')", "#second-editor"), """##### Part #first-editor
a = 0
print(a)
##### Part #sneaky-mid-editor
x = 9
print('Not a problem to have "##### Part #sneaky-mid-editor" in here.')
print(x)
##### Part #second-editor
print('hello world')
##### Part #third-editor
c = 2
print(c)
5 + \"\"""")

    def test_add_missing(self):
            self.assertEqual(inject_code_part(TEXT, "print('hello world')", "new-editor"), """##### Part #first-editor
a = 0
print(a)
##### Part #sneaky-mid-editor
x = 9
print('Not a problem to have "##### Part #sneaky-mid-editor" in here.')
print(x)
##### Part #second-editor
b = 7
print(b)
# This will cause an error!
print(a)
##### Part #third-editor
c = 2
print(c)
5 + ""
##### Part new-editor
print('hello world')""")

    def test_multiple_whitespace(self):
        self.assertEqual(inject_code_part(TEXT, "\n\n\nprint('hello world')\n", "#second-editor"), """##### Part #first-editor
a = 0
print(a)
##### Part #sneaky-mid-editor
x = 9
print('Not a problem to have "##### Part #sneaky-mid-editor" in here.')
print(x)
##### Part #second-editor



print('hello world')

##### Part #third-editor
c = 2
print(c)
5 + \"\"""")



if __name__ == '__main__':
    unittest.main()
