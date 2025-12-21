CREATE TABLE IF NOT EXISTS callback_requests (
    id SERIAL PRIMARY KEY,
    guide_name VARCHAR(255) NOT NULL,
    guide_phone VARCHAR(50) NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50) NOT NULL,
    preferred_time VARCHAR(255),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new'
);