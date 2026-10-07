"""Subordinate assignments

Revision ID: f206cb1bdb5d
Revises: be70df7520d1
Create Date: 2022-06-28 12:12:43.636031

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f206cb1bdb5d'
down_revision = 'be70df7520d1'
branch_labels = None
depends_on = None

# ALTER TABLE assignment ADD COLUMN subordinate BOOLEAN DEFAULT FALSE;

def upgrade():
    op.add_column('assignment', sa.Column('subordinate', sa.Boolean(), default=False))


def downgrade():
    op.drop_column('assignment', 'subordinate')
