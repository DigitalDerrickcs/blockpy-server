CREATE TEMP TABLE anons AS
SELECT id
FROM "user"
WHERE anonymous = TRUE;



DELETE FROM log WHERE subject_id IN (SELECT id FROM anons);
DELETE FROM grade_history WHERE submission_id IN (SELECT id FROM submission WHERE user_id IN (SELECT id FROM anons));
DELETE FROM authentication WHERE user_id IN (SELECT id FROM anons);
DELETE FROM role WHERE user_id IN (SELECT id FROM anons);
DELETE FROM submission WHERE user_id IN (SELECT id FROM anons);
DELETE FROM assignment WHERE owner_id IN (SELECT id FROM anons);
DELETE FROM assignment_group WHERE owner_id IN (SELECT id FROM anons);
DELETE FROM report WHERE owner_id IN (SELECT id FROM anons);
DELETE FROM course WHERE owner_id IN (SELECT id FROM anons);
DELETE FROM "user" WHERE id IN (SELECT id FROM anons);

---- Port over old data to new database, upsert style

INSERT INTO "user" AS t (date_created, date_modified, id, first_name, last_name, email, proof, password, active, confirmed_at, anonymous, fs_uniquifier)
SELECT date_created, date_modified, id, first_name, last_name, email, proof, password, active, confirmed_at, anonymous, fs_uniquifier
FROM old12."user" s
WHERE s.date_modified >= DATE '2025-06-21'
    AND s.anonymous = FALSE
ON CONFLICT (id) DO UPDATE
SET date_created = EXCLUDED.date_created,
    date_modified = EXCLUDED.date_modified,
    first_name = EXCLUDED.first_name,
    last_name = EXCLUDED.last_name,
    email = EXCLUDED.email,
    proof = EXCLUDED.proof,
    password = EXCLUDED.password,
    active = EXCLUDED.active,
    confirmed_at = EXCLUDED.confirmed_at,
    anonymous = EXCLUDED.anonymous,
    fs_uniquifier = EXCLUDED.fs_uniquifier;

INSERT INTO assignment AS t (id, date_created, date_modified, url, name, instructions, on_run, on_change, starting_code, answer, settings, type, owner_id, course_id, version, reviewed, hidden, on_eval, extra_instructor_files, extra_starting_files, forked_id, forked_version, public, ip_ranges, points, subordinate)
SELECT id, date_created, date_modified, url, name, instructions, on_run, on_change, starting_code, answer, settings, type, owner_id, course_id, version, reviewed, hidden, on_eval, extra_instructor_files, extra_starting_files, forked_id, forked_version, public, ip_ranges, points, subordinate
FROM old12.assignment s
WHERE s.date_modified >= DATE '2025-06-21'
ON CONFLICT (id) DO UPDATE
SET date_created = EXCLUDED.date_created,
    date_modified = EXCLUDED.date_modified,
    url = EXCLUDED.url,
    name = EXCLUDED.name,
    instructions = EXCLUDED.instructions,
    on_run = EXCLUDED.on_run,
    on_change = EXCLUDED.on_change,
    starting_code = EXCLUDED.starting_code,
    answer = EXCLUDED.answer,
    settings = EXCLUDED.settings,
    type = EXCLUDED.type,
    owner_id = EXCLUDED.owner_id,
    course_id = EXCLUDED.course_id,
    version = EXCLUDED.version,
    reviewed = EXCLUDED.reviewed,
    hidden = EXCLUDED.hidden,
    on_eval = EXCLUDED.on_eval,
    extra_instructor_files = EXCLUDED.extra_instructor_files,
    extra_starting_files = EXCLUDED.extra_starting_files,
    forked_id = EXCLUDED.forked_id,
    forked_version = EXCLUDED.forked_version,
    public = EXCLUDED.public,
    ip_ranges = EXCLUDED.ip_ranges,
    points = EXCLUDED.points,
    subordinate = EXCLUDED.subordinate;


INSERT INTO assignment_group AS t (id, date_created, date_modified, name, owner_id, course_id, position, url, forked_id, forked_version, version)
SELECT id, date_created, date_modified, name, owner_id, course_id, position, url, forked_id, forked_version, version
FROM old12.assignment_group s
WHERE s.date_modified >= DATE '2025-06-21'
ON CONFLICT (id) DO UPDATE
SET date_created = EXCLUDED.date_created,
    date_modified = EXCLUDED.date_modified,
    name = EXCLUDED.name,
    owner_id = EXCLUDED.owner_id,
    course_id = EXCLUDED.course_id,
    position = EXCLUDED.position,
    url = EXCLUDED.url,
    forked_id = EXCLUDED.forked_id,
    forked_version = EXCLUDED.forked_version,
    version = EXCLUDED.version;

INSERT INTO assignment_group_membership AS t (id, date_created, date_modified, assignment_group_id, assignment_id, position)
SELECT id, date_created, date_modified, assignment_group_id, assignment_id, position
FROM old12.assignment_group_membership s
WHERE s.date_modified >= DATE '2025-06-21'
ON CONFLICT (id) DO UPDATE
SET date_created = EXCLUDED.date_created,
    date_modified = EXCLUDED.date_modified,
    assignment_group_id = EXCLUDED.assignment_group_id,
    assignment_id = EXCLUDED.assignment_id,
    position = EXCLUDED.position;



INSERT INTO review AS t (id, date_created, date_modified, comment, tag_id, score, submission_id, author_id, assignment_version, submission_version, version, location, forked_id, forked_version, generic)
SELECT id, date_created, date_modified, comment, tag_id, score, submission_id, author_id, assignment_version, submission_version, version, location, forked_id, forked_version, generic
FROM old12.review s
WHERE s.date_modified >= DATE '2025-06-21'
ON CONFLICT (id) DO UPDATE
SET date_created = EXCLUDED.date_created,
    date_modified = EXCLUDED.date_modified,
    comment = EXCLUDED.comment,
    tag_id = EXCLUDED.tag_id,
    score = EXCLUDED.score,
    submission_id = EXCLUDED.submission_id,
    author_id = EXCLUDED.author_id,
    assignment_version = EXCLUDED.assignment_version,
    submission_version = EXCLUDED.submission_version,
    version = EXCLUDED.version,
    location = EXCLUDED.location,
    forked_id = EXCLUDED.forked_id,
    forked_version = EXCLUDED.forked_version,
    generic = EXCLUDED.generic;

INSERT INTO role AS t (id, date_created, date_modified, name, user_id, course_id, description)
SELECT id, date_created, date_modified, name, user_id, course_id, description
FROM old12.role s
WHERE s.date_modified >= DATE '2025-06-21'
ON CONFLICT (id) DO UPDATE
SET date_created = EXCLUDED.date_created,
    date_modified = EXCLUDED.date_modified,
    name = EXCLUDED.name,
    user_id = EXCLUDED.user_id,
    course_id = EXCLUDED.course_id,
    description = EXCLUDED.description;

INSERT INTO submission AS t (id, date_created, date_modified, code, score, correct, assignment_id, course_id, user_id, assignment_version, version, endpoint, submission_status, grading_status, assignment_group_id, url, extra_files, date_submitted, date_graded, date_due, date_locked)
SELECT id, date_created, date_modified, code, score, correct, assignment_id, course_id, user_id, assignment_version, version, endpoint, submission_status, grading_status, assignment_group_id, url, extra_files, date_submitted, date_graded, date_due, date_locked
FROM old12.submission s
WHERE s.date_modified >= DATE '2025-06-21'
    AND s.user_ID IN (SELECT id FROM real_users)
ON CONFLICT (id) DO UPDATE
SET date_created = EXCLUDED.date_created,
    date_modified = EXCLUDED.date_modified,
    code = EXCLUDED.code,
    score = EXCLUDED.score,
    correct = EXCLUDED.correct,
    assignment_id = EXCLUDED.assignment_id,
    course_id = EXCLUDED.course_id,
    user_id = EXCLUDED.user_id,
    assignment_version = EXCLUDED.assignment_version,
    version = EXCLUDED.version,
    endpoint = EXCLUDED.endpoint,
    submission_status = EXCLUDED.submission_status,
    grading_status = EXCLUDED.grading_status,
    assignment_group_id = EXCLUDED.assignment_group_id,
    url = EXCLUDED.url,
    extra_files = EXCLUDED.extra_files,
    date_submitted = EXCLUDED.date_submitted,
    date_graded = EXCLUDED.date_graded,
    date_due = EXCLUDED.date_due,
    date_locked = EXCLUDED.date_locked;

INSERT INTO log AS t (id, date_created, date_modified, event_type, category, assignment_id, subject_id, message, client_timestamp, assignment_version, course_id, file_path, label, client_timezone)
SELECT id, date_created, date_modified, event_type, category, assignment_id, subject_id, message, client_timestamp, assignment_version, course_id, file_path, label, client_timezone
FROM old12.log s
WHERE s.date_modified >= DATE '2025-06-21'
    AND s.user_id IN (SELECT id FROM real_users)
    AND s.course_id IN (SELECT id from kept_courses)
ON CONFLICT (id) DO UPDATE
SET date_created = EXCLUDED.date_created,
    date_modified = EXCLUDED.date_modified,
    event_type = EXCLUDED.event_type,
    category = EXCLUDED.category,
    assignment_id = EXCLUDED.assignment_id,
    subject_id = EXCLUDED.subject_id,
    message = EXCLUDED.message,
    client_timestamp = EXCLUDED.client_timestamp,
    assignment_version = EXCLUDED.assignment_version,
    course_id = EXCLUDED.course_id,
    file_path = EXCLUDED.file_path,
    label = EXCLUDED.label,
    client_timezone = EXCLUDED.client_timezone;

INSERT INTO grade_history AS t (id, date_created, date_modified, submission_id, grader_id, score, date_submitted)
SELECT id, date_created, date_modified, submission_id, grader_id, score, date_submitted
FROM old12.grade_history s
WHERE s.date_modified >= DATE '2025-06-21'
ON CONFLICT (id) DO UPDATE
SET date_created = EXCLUDED.date_created,
    date_modified = EXCLUDED.date_modified,
    submission_id = EXCLUDED.submission_id,
    grader_id = EXCLUDED.grader_id,
    score = EXCLUDED.score,
    date_submitted = EXCLUDED.date_submitted;