"""Add generic column to Reviews

Revision ID: 39829a4d3a94
Revises: 63aeca380751
Create Date: 2019-09-25 22:26:43.484183

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '39829a4d3a94'
down_revision = '63aeca380751'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('review', sa.Column('generic', sa.Boolean()))


def downgrade():
    op.drop_column('review', 'generic')
