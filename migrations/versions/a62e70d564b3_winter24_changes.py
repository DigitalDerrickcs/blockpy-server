"""Winter24 Changes

Revision ID: a62e70d564b3
Revises: f275827a7755
Create Date: 2025-05-18 11:47:02.835502

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a62e70d564b3'
down_revision = 'f275827a7755'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    dialect = conn.dialect.name

    if dialect == "postgresql":
        op.execute("""alter table "user" add fs_uniquifier VARCHAR(64) NOT NULL default concat(md5(random()::text), md5(random()::text));""")
    else:
        op.execute("""alter table "user" add fs_uniquifier VARCHAR(64) NOT NULL default hex(randomblob(64));""")
        op.execute("""UPDATE "user" SET fs_uniquifier=hex(randomblob(64));""")

    op.execute("""create unique index user_fs_uniquifier_index on "user" (fs_uniquifier);""")
    op.execute("""alter table "role" add description TEXT;""")
    op.execute("""alter table "course" add locked BOOLEAN NOT NULL default FALSE;""")

    op.execute("""alter table submission add date_submitted timestamp without time zone default NULL;""")
    op.execute("""alter table submission
        add date_graded timestamp without time zone default NULL;""")
    op.execute("""alter table submission
        add date_due timestamp without time zone default NULL;""")
    op.execute("""alter table submission
        add date_locked timestamp without time zone default NULL;""")
    op.execute("""create table grade_history
(
    id             integer not null
        primary key,
    date_created   datetime,
    date_modified  datetime,
    submission_id  integer not null
        references submission,
    grader_id      integer
        references user,
    score          integer,
    date_submitted datetime
);""")
    op.execute("""create index grade_history_submission_id_index on grade_history (submission_id);""")

    op.execute("""CREATE INDEX authentication_lookup ON authentication (type, value);""")
    op.execute("""CREATE INDEX CONCURRENTLY log_assignment_index ON "log" (assignment_id);""")
    op.execute("""CREATE INDEX review_submission_index ON "review" (submission_id);""")

def downgrade():
    op.execute("""alter table "user" drop column fs_uniquifier;""")
    op.execute("""drop index user_fs_uniquifier_index;""")
    op.execute("""alter table "role" drop column description;""")
    op.execute("""alter table "course" drop column locked;""")
    op.execute("""alter table submission drop column date_submitted;""")
    op.execute("""alter table submission drop column date_graded;""")
    op.execute("""alter table submission drop column date_due;""")
    op.execute("""alter table submission drop column date_locked;""")
    op.execute("""drop table grade_history;""")
    op.execute("""drop index grade_history_submission_id_index;""")
    op.execute("""drop index authentication_lookup;""")
    op.execute("""drop index log_assignment_index;""")
    op.execute("""drop index review_submission_index;""")
