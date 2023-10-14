CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    balance DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    status BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO users (name, email, password, balance, status) VALUES
    ('John Doe', 'john@example.com', 'password123', 1000.00, true),
    ('Jane Smith', 'jane@example.com', 'securepwd456', 750.50, true),
    ('Alice Johnson', 'alice@example.com', 'strongpass789', 500.75, false);
