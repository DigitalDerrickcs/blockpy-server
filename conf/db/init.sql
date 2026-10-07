-- Set database-level settings
ALTER DATABASE blockpy SET client_encoding TO 'UTF8';
ALTER DATABASE blockpy SET default_transaction_isolation TO 'read committed';
ALTER DATABASE blockpy SET timezone TO 'UTC';

-- Grant privileges to the blockpy user
GRANT ALL PRIVILEGES ON DATABASE blockpy TO blockpy;

-- Optionally, grant privileges on the public schema
GRANT ALL PRIVILEGES ON SCHEMA public TO blockpy;