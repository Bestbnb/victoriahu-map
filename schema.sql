DROP DATABASE IF EXISTS bestbnb;
CREATE DATABASE bestbnb;
USE bestbnb;

DROP TABLE IF EXISTS map;
		
CREATE TABLE map (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  lat DECIMAL(10, 6),
  lng DECIMAL(10, 6),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS recommendations;
		
CREATE TABLE recommendations (
  rec_id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  image VARCHAR(100),
  dollars INTEGER,
  lat DECIMAL(10, 6),
  lng DECIMAL(10, 6),
  url VARCHAR(50),
  stars DECIMAL(2,1),
  label INTEGER,
  color VARCHAR(50),
  map_id INTEGER,
  PRIMARY KEY (rec_id),
  FOREIGN KEY (map_id) REFERENCES map(id)
);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `map` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `recommendations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `map` (`id`,`name`,`lat`,`lng`) VALUES
-- ('','','','');
-- INSERT INTO `recommendations` (`id`,`rec_id`,`name`,`lat`,`lng`,`url`,`stars`,`label`,`color`) VALUES
-- ('','','','','','','','','');