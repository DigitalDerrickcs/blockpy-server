# Find all string literals in the code.
# Find location of #, but ignore all that are in string literals.
# Remove any string literals that are just value expressions.

EXAMPLES = {
    'syntax_error': "1+1 = a",
    'complex': """ # This is a comment
from dataclasses import dataclass
from drafter import *

@dataclass
class State:
    x: int = 0

@route
def index(state: State) -> Page:
    return Page(state, ["Hello World!"])

@route(
    "/complex",
    )
def complex(state: State) -> Page:  # This is a test
    '''This is a docstring comment '''
    # This should be removed
    
    "Nice try, tuple"
    
    f"This was a {super} sneaky one"
    if state["x"] > 0: # Nested Comment
        "Another sneaky docstring comment."
        return Page(state, ["Hello # World!"])
    else:
    
        return Page(state, [
            f"This is {allowed} a test",
            "Goodbye World!"
        ])
        
print("This line should not be included")
        
start_server(State(5))

@route

def weird_stretch(state: State) -> Page:
    return Page(state, [
        "Hello" + "World",
        Button("Click me!", index),
        TextBox("new_name", state.x),
        Text("Oh yeah")
        ])
    # Test
#Test
"""
}
#------------------------------------------------------
import ast
from dataclasses import dataclass
import sys

if sys.platform == 'skulpt':
    with open("submitted_code.py", "r") as f:
        code = f.read()
else:
    code = EXAMPLES['syntax_error']

ERROR_MESSAGES = []
ERROR = None

REMOVE_CHAR = " "

def remove_blank_lines(lines):
    return "\n".join(line for line in lines if line.strip())

def select_node(node, source, extents):
    # TODO: Remove comments, string literal expression values
    lines = source.splitlines()
    try:
        score = score_node(node)
    except Exception as e:
        ERROR_MESSAGES.append("Failed while selecting functions. Please show this code to Dr. Bart.\n" + str(e))
        raise e
    return {
        'code': remove_blank_lines(lines[extents[0]-1: extents[2]]),
        # if next_lineno is not None else lines[node.lineno - 1:],
        'startLine': extents[0]-1,
        'endLine': extents[2]+1,
        'score': score,
        'name': node.name
    }

@dataclass
class StringLiteralLocation:
    start_line: int
    end_line: int
    start_col: int
    end_col: int
    is_expr: bool
    value: str

    def is_on_line(self, line):
        return self.start_line <= line <= self.end_line

    def is_in_column(self, col):
        return self.start_col <= col <= self.end_col

    def has_position(self, line_number, column_number):
        if self.start_line <= line_number <= self.end_line:
            if self.start_col <= column_number <= self.end_col:
                return True
        return False

    def extract(self, line_number, code_line):
        start_column = 0
        end_column = len(code_line)
        if line_number == self.start_line:
            start_column = self.start_col
        if line_number == self.end_line:
            end_column = self.end_col
        return code_line[start_column:end_column]

    def extract_outside(self, line_number, code_line):
        start_column = 0
        end_column = len(code_line)
        if line_number == self.start_line:
            start_column = self.start_col
        if line_number == self.end_line:
            end_column = self.end_col
        if start_column < end_column:
            spacer = REMOVE_CHAR * (end_column - start_column)
        else:
            spacer = ""
        return code_line[:start_column] + spacer + code_line[end_column:]


class StringWalker(ast.NodeVisitor):
    def __init__(self):
        self.strings = {
            True: [],
            False: []
        }
        self.inside_expr = False

    def track_node(self, node, value):
        self.strings[self.inside_expr].append(
            StringLiteralLocation(node.lineno-1, node.end_lineno-1,
                                    node.col_offset, node.end_col_offset,
                                  self.inside_expr, value)
        )

    def visit_Str(self, node):
        self.track_node(node, node.s)
        self.generic_visit(node)

    def visit_Constant(self, node):
        if isinstance(node.value, str):
            self.track_node(node, node.value)
        self.generic_visit(node)

    def visit_JoinedStr(self, node):
        for value in node.values:
            self.visit(value)
        self.track_node(node, f"JoinedStr({len(node.values)})")
        self.generic_visit(node)

    def visit_FormattedValue(self, node):
        self.visit(node.value)
        self.generic_visit(node)

    #def visit_Tuple(self, node):
    #    if len(node.elts) == 1:
    #        self.visit(node.elts[0])

    def visit_Expr(self, node):
        self.inside_expr = isinstance(node.value, (ast.Str, ast.Constant, ast.JoinedStr, ast.FormattedValue))
        self.generic_visit(node)
        self.inside_expr = False

class ExtentGetter(ast.NodeVisitor):
    def __init__(self):
        self.extents = None

    def check_all(self, node):
        self.extents = [
            node.lineno,
            node.col_offset,
            node.end_lineno,
            node.end_col_offset
        ]
        self.visit(node)

    def visit(self, child):
        try:
            if self.extents[0] > child.lineno:
                self.extents[0] = child.lineno
                self.extents[1] = child.col_offset
            elif self.extents[0] == child.lineno:
                if self.extents[1] > child.col_offset:
                    self.extents[1] = child.col_offset
            if self.extents[2] < child.end_lineno:
                self.extents[2] = child.end_lineno
                self.extents[3] = child.end_col_offset
            elif self.extents[2] == child.end_lineno:
                if self.extents[3] < child.end_col_offset:
                    self.extents[3] = child.end_col_offset
        except Exception:
            pass
        ast.NodeVisitor.visit(self, child)

    def visit_JoinedStr(self, node):
        return None

def get_extents(node):
    try:
        extenter = ExtentGetter()
        extenter.check_all(node)
    except Exception as e:
        ERROR_MESSAGES.append("Failed while getting extents. Please show this code to Dr. Bart.\n" + str(e))
        raise e
    return extenter.extents

AST_CATEGORY_ORDER = [('unusual', 10000),
                      ('important', 1000),
                      ('good', 100),
                      ('mundane', 10),
                      ('drafter', 1)]
AST_SCORE_CATEGORIES = {
    'unusual': ['AsyncFor', 'AsyncFunctionDef', 'AsyncWith', 'Assert', 'AnnAssign', 'Await',
                'BitAnd', 'BitOr', 'BitXor', 'Break', 'Bytes', 'ClassDef', 'Continue', 'Del',
                'Dict', 'DictComp', 'Ellipsis', 'ExceptHandler', 'ExtSlice', 'FunctionType',
                'GeneratorExp', 'Global', 'Import', 'ImportFrom', 'IfExp',
                'Invert', 'LShift', 'Lambda', 'ListComp', 'MatMult',
                'Match', 'MatchAs', 'MatchClass', 'MatchMapping', 'MatchOr', 'MatchSequence', 'MatchSingleton',
                'MatchStar', 'MatchValue',
                'Mod', 'NamedExpr', 'Nonlocal', 'RShift', 'Raise', 'Set', 'SetComp',
                'Try', 'TryStar', 'Tuple', 'TypeIgnore', 'With', 'Yield', 'YieldFrom',
                'Starred'
                ],
    'important': ['FunctionDef', 'For', 'If', 'Return', 'While'],
    'good': ['Add', 'And', 'Assign', 'AugAssign', 'BinOp', 'BoolOp', 'Compare', 'Div', 'Eq', 'FloorDiv',
             'Gt', 'GtE', 'In', 'Index', 'Is', 'IsNot', 'Lt', 'LtE', 'Mult', 'Not', 'NotEq', 'NotIn',
             'Or', 'Pow', 'Slice', 'Sub', 'Subscript', 'UAdd', 'USub', 'UnaryOp', 'Attribute', 'Call',
             'FormattedValue', 'JoinedStr', ],
    'mundane': ['Constant', 'Expr', 'List', 'NameConstant', 'Num', 'Pass', 'Str'],
    'drafter': []
}

SCORE_NAME_CATEGORIES = {
    'unusual': [],
    'important': ['Argument'],
    'good': [],
    'mundane': ['MatPlotLibPlot', 'NumberedList', 'BulletedList', 'CheckBox', 'Download', 'FileUpload',
             'SelectBox', 'Table', 'TextBox', "TextArea", 'Button', 'Header', 'HorizontalRule', 'Image',
                'LineBreak', 'Link', 'Picture',],
    'drafter': ['Box', 'Div', 'Division', 'Pre', "PreformattedText", "Row", 'Span', 'SubmitButton',
                'Text'],
}
NAME_SCORE_CATEGORIES = {
    name: category
    for category, names in SCORE_NAME_CATEGORIES.items()
    for name in names
}
# 'AugLoad', 'AugStore', 'Delete', 'Expression', 'Load', 'Store'
# [  'alias', 'arg', 'arguments', 'auto', 'boolop', 'cmpop', 'comprehension', 'contextmanager', 'copy_location', 'dump', 'excepthandler', 'expr', 'expr_context', 'fix_missing_locations', 'get_docstring', 'get_source_segment', 'increment_lineno', 'iter_child_nodes', 'iter_fields', 'keyword', 'literal_eval', 'main', 'match_case', 'mod', 'nullcontext', 'operator', 'parse', 'pattern', 'slice', 'stmt', 'sys', 'type_ignore', 'unaryop', 'unparse', 'walk', 'withitem']


class ASTCalculator(ast.NodeVisitor):
    SCORE_CATEGORIES = ['unusual', 'important', 'mundane', 'drafter']
    def __init__(self):
        self.asts = {
            kind: 0
            for kinds in AST_SCORE_CATEGORIES.values()
            for kind in kinds
        }
        self.scores = { category: 0 for category in AST_SCORE_CATEGORIES }

        for category, kinds in AST_SCORE_CATEGORIES.items():
            for kind in kinds:
                setattr(self, f'visit_{kind}', self.make_score_changer(kind, category))

    def make_score_changer(self, kind, category):
        if sys.platform == 'skulpt':
            def score_changer(self, node):
                self.scores[category] += 1
                self.asts[kind] += 1
                self.generic_visit(node)
        else:
            def score_changer(node):
                self.scores[category] += 1
                self.asts[kind] += 1
                self.generic_visit(node)
        return score_changer

    def visit_Name(self, node):
        if node.id in NAME_SCORE_CATEGORIES:
            category = NAME_SCORE_CATEGORIES[node.id]
            self.scores[category] += 1
        self.generic_visit(node)

    def finalize(self):
        total = 0
        for category, weight in AST_CATEGORY_ORDER:
            total += self.scores[category] * weight
        return {
            'total': total/1000,
            'parts': self.scores,
        }


def score_node(node):
    calculator = ASTCalculator()
    calculator.visit(node)
    return calculator.finalize()


def find_sections(code: str):
    sections = []
    try:
        tree = ast.parse(code, "submitted_code.py")
    except Exception as e:
        ERROR_MESSAGES.append("Failed while parsing source code. You may have a syntax error in the code that you uploaded.\n" + str(e))
        raise e

    try:
        string_walker = StringWalker()
        string_walker.visit(tree)
        keep_strings = string_walker.strings[False]
        remove_strings = string_walker.strings[True]
    except Exception as e:
        ERROR_MESSAGES.append("Failed while removing string literals. Please show this code to Dr. Bart.\n" + str(e))
        raise e
    # for f in keep_strings:
    #     print(f)
    # print("***")
    # for f in remove_strings:
    #     print(f)

    # find all the hashes in the code, get them until the end of their line
    hashes = {}
    for i, line in enumerate(code.splitlines()):
        if "#" in line:
            start = line.index("#")
            end = len(line)
            if i not in hashes:
                hashes[i] = []
            hashes[i].append((start, end))

    lines = code.splitlines()
    kept = []
    for i, line in enumerate(lines):
        # If there's a hash here, then we remove that chunk
        # UNLESS it's in a keep_strings string
        # And we also remove it if it's in a remove_strings string
        for remove_string in remove_strings:
            if remove_string.is_on_line(i):
                #print("<<<", line, remove_string)
                line = remove_string.extract_outside(i, line)
                #print(">>>", line, i)
        if i in hashes:
            for start, end in hashes[i]:
                # If the hash is in a safe string literal, we don't remove it
                print(">>>", start, end, i, repr(lines[i][start: end]))
                if any(keep_string.has_position(i, start)
                       for keep_string in keep_strings):
                    continue
                line = line[:start] + REMOVE_CHAR * (end - start) + line[end:]
        kept.append(line)


    cleaned_code = "\n".join(kept)

    # Iterate through the top-level statements looking for routes
    if isinstance(tree, ast.Module):
        following_nodes = tree.body[1:] + [None]
        for node, next_node in zip(tree.body, following_nodes):
            if isinstance(node, ast.FunctionDef):
                sections.append(select_node(node, cleaned_code, get_extents(node)))
                # next_node.lineno
                #                                             if next_node is not None
                #                                             else None,

    return tree, sections

#-----------------------------------------------------

try:
    tree, SELECTED_SECTIONS = find_sections(code)
    for section in SELECTED_SECTIONS:
        print("***"*10)
        print(section['code'])
        print(section["score"])
    print("***"*10)
except Exception as e:
    ERROR = e

if sys.platform != 'skulpt':
    if ERROR_MESSAGES:
        print("ERRORS", ERROR_MESSAGES)
    if ERROR:
        print("ERROR", ERROR)