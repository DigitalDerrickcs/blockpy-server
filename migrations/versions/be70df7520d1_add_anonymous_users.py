"""Add anonymous users

Revision ID: be70df7520d1
Revises: da9729586994
Create Date: 2022-01-12 16:38:45.713276

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'be70df7520d1'
down_revision = 'da9729586994'
branch_labels = None
depends_on = None

# ALTER TABLE "user" ADD COLUMN anonymous BOOLEAN DEFAULT FALSE;

def upgrade():
    op.add_column('user', sa.Column('anonymous', sa.Boolean(), nullable=True))


def downgrade():
    op.drop_column('user', 'anonymous')
