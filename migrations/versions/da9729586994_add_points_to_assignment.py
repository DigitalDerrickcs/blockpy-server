"""Add points to assignment

Revision ID: da9729586994
Revises: c56a36fb0a55
Create Date: 2021-05-02 13:41:39.480773

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'da9729586994'
down_revision = 'c56a36fb0a55'
branch_labels = None
depends_on = None

# ALTER TABLE "assignment" ADD COLUMN points INTEGER DEFAULT 1;

def upgrade():
    op.add_column('assignment', sa.Column('points', sa.Integer(), default=1))


def downgrade():
    op.drop_column('assignment', 'points')
