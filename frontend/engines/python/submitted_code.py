# This is a comment
from dataclasses import dataclass
from drafter import *


@dataclass
class State:
    x: int = 0


@route
def index(state: State) -> Page:
    return Page(state, ["Hello World!"
                        ]

                )


@route(
    "/complex",
)
def complex(state: State) -> Page:  # This is a test
    '''This is a docstring comment '''
    # This should be removed

    "Nice try, tuple"

    f"This was a {super} sneaky one"
    if state["x"] > 0:  # Nested Comment
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
    pass
    # Test
# Test