"""Add location/forking to Reviews

Revision ID: e8052202cb3a
Revises: 8426b4e23cf8
Create Date: 2019-09-22 21:08:52.912132

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e8052202cb3a'
down_revision = '8426b4e23cf8'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('review', sa.Column('location', sa.Text))
    op.add_column('review', sa.Column('forked_id', sa.Integer(), nullable=True))
    op.add_column('review', sa.Column('forked_version', sa.Integer(), nullable=True))

    op.create_foreign_key("fk_review_forked_id", 'review', 'review', ['forked_id'], ['id'])


def downgrade():
    op.drop_constraint("fk_review_forked_id", 'review', type_='foreignkey')
    op.drop_column('review', 'location')
    op.drop_column('review', 'forked_id')
    op.drop_column('review', 'forked_version')
