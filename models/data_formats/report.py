import datetime
import difflib

from models.assignment import Assignment
from models.log_tables import SubmissionLog


class SubmissionState:
    assignment: int
    loaded: bool
    friendly: str
    code: str
    feedback: str
    system: str
    lastRan: str
    lastEdit: str
    lastOpened: str
    completed: bool
    score: float
    mode: str
    fullscreen: bool
    log: SubmissionLog

    def __init__(self):
        self.code = ""
        self.friendly = "Not Loaded"
        self.feedback = "Not yet executed"
        self.system = ""
        self.lastRan = None
        self.lastEdit = None
        self.lastOpened = None
        self.completed = False
        self.score = 0
        self.mode = "unknown"
        self.fullscreen = None
        self.log = None
    """
    def makeNextState(self, log):
        new = self.copy()
        event_type = log['event_type']
        friendly = REMAP_EVENT_TYPES.get(event_type)
        if event_type == 'File.Create':
            code = log['message']
            lastEdit = log['when']
        elif event_type == "File.Edit":
            code = log['message']
            lastEdit = log['when']
            system = "<strong>Edited code</strong>"
        elif event_type == "Session.Start":
            this.lastOpened = log.when();
            this.system = ` < strong > New
            Session < / strong > `;
            break;
        elif event_type == "Compile":
            this.system = ` < strong > Compiling < / strong > `;
            break;
        elif event_type == "Run.Program":
            this.lastRan = log.when();
            this.system = ` < strong > Run < / strong > < div >${log.message()} < / div > `;
            break;
        elif event_type == "Compile.Error":
            this.system = ` < strong > Compiler
            Error < / strong > < div >${log.message()} < / div > `;
            break;
        elif event_type == "Intervention":
            this.completed = this.completed | | log.category() == = "Complete";
            this.feedback = ` < strong >${log.label()} < / strong > < div >${log.message()} < / div > `;
            break;
        elif event_type == "X-View.Change":
            this.mode = log.message();
            this.system = ` < strong > Changed
            Editing
            Mode < / strong > < div >${this.mode} < / div > `;
            break;
        elif event_type == "X-Submission.LMS":
            this.score = parseInt(log.message(), 10);
            this.system = ` < strong > Submitted
            Score < / strong > < div >${this.score} < / div > `;
            break;
"""
REMAP_EVENT_TYPES = {
    "Session.Start": "Began session",
    "X-IP.Change": "Changed IP address",
    "File.Edit": "Edited code",
    "File.Create": "Started assignment",
    "Run.Program": "Ran program",
    "Compile.Error": "Syntax error",
    "X-Submission.LMS": "Updated grade"
}


def get_when(log):
    client_timestamp = int(log['client_timestamp'] or 0)
    client_timestamp = datetime.datetime.fromtimestamp(client_timestamp/1000)
    format_str = "%Y-%m-%dT%H:%M:%S.%f" if '.' in log['date_created'] else "%Y-%m-%dT%H:%M:%S"
    server_time = datetime.datetime.strptime(log['date_created'].replace("Z", ""), format_str)
    return client_timestamp or server_time


def make_report(logs, assignments, groups):
    # IP Address changes
    # Bulk group by day
    # Long work sessions
    # Same feedback 3+ times
    # Big edit distance
    if not logs:
        return ["No Logs Found"]

    when = get_when(logs[-1])
    assignment = None
    result = []
    code, new_code = "", ""
    for log in reversed(logs):
        if log['assignment_id'] != assignment:
            assignment = log['assignment_id']
            a = assignments[assignment]
            result.append(f"New Assignment: {a['name']}")
            code = ""
        elif log['event_type'] in ('File.Edit', 'File.Create'):
            new_code = log['message']
            code = new_code
            result.append(f"File Edit: {len(new_code)}")
        else:
            result.append(repr(log))
        next_when = get_when(log)
        diff = (next_when - when).total_seconds()
        #result.append(f"{when} - {diff} - {log['event_type']} - {log['category']}")
        when = next_when
    return result