CREATE DATABASE postgres;

\c postgres;

CREATE TABLE articles (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(200),
    price DECIMAL(10, 2) NOT NULL,
    model VARCHAR(10)
);

INSERT INTO articles (id, name, description, price, model) VALUES
('A0001', 'Article One', 'Description for article one.', 29.99, 'ModelX'),
('A0002', 'Article Two', 'Description for article two.', 49.99, 'ModelY');
