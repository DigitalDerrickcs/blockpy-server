"""Add endpoint column to Reviews

Revision ID: 63aeca380751
Revises: e8052202cb3a
Create Date: 2019-09-24 21:58:08.734827

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '63aeca380751'
down_revision = 'e8052202cb3a'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('course', sa.Column('endpoint', sa.Text))


def downgrade():
    op.drop_column('course', 'endpoint')
