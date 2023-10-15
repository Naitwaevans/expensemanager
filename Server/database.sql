CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    balance DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    status BOOLEAN NOT NULL DEFAULT TRUE
);

-- Inserting two sets of dummy data into the 'users' table
INSERT INTO users (name, email, password, balance, status) VALUES
    ('John Doe', 'john@example.com', 'password123', 1000.00, true),
    ('Jane Smith', 'jane@example.com', 'securepwd456', 750.50, true),
    ('Alice Johnson', 'alice@example.com', 'strongpass789', 500.75, false);

CREATE TABLE income (
    id serial PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    source VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Add 'created_at' and 'updated_at' columns with default values.
ALTER TABLE income
ADD created_at TIMESTAMP NOT NULL DEFAULT NOW(),
ADD updated_at TIMESTAMP NOT NULL DEFAULT NOW();

-- Add the 'status' column with a default value of 'true' (active).
ALTER TABLE income
ADD status BOOLEAN NOT NULL DEFAULT TRUE;



-- Inserting two sets of dummy data into the 'income' table with NOW()
INSERT INTO income (user_id, amount, date, description, created_at, updated_at, status)
VALUES
    (1, 750.00, '2023-10-15 10:30:00', 'Consulting', NOW(), NOW(), true),
    (2, 300.75, '2023-10-15 11:15:00', 'Part-time job', NOW(), NOW(), false);

 CREATE TABLE expense (
    id serial PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    status VARCHAR(255) DEFAULT 'active',
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Inserting two sets of dummy data into the 'expense' table
INSERT INTO expense (user_id, amount, description, created_at, updated_at, status)
VALUES
    (1, 500.00, 'Groceries', '2023-10-15 12:30:00', '2023-10-15 12:30:00', 'active'),
    (2, 200.50, 'Utilities', '2023-10-15 13:45:00', '2023-10-15 13:45:00', 'active');







