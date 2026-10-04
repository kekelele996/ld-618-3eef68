CREATE TABLE IF NOT EXISTS monitor_station (
  id INTEGER PRIMARY KEY,
  station_code TEXT,
  district TEXT,
  location_desc TEXT,
  station_type TEXT,
  install_date TEXT,
  station_status TEXT
);

CREATE TABLE IF NOT EXISTS noise_reading (
  id INTEGER PRIMARY KEY,
  station_id TEXT,
  reading_time TEXT,
  decibel_value TEXT,
  frequency_band TEXT,
  weather_tag TEXT,
  data_quality TEXT
);

CREATE TABLE IF NOT EXISTS exceedance_event (
  id INTEGER PRIMARY KEY,
  station_id TEXT,
  start_time TEXT,
  end_time TEXT,
  max_decibel TEXT,
  exceed_level TEXT,
  handled_status TEXT
);

CREATE TABLE IF NOT EXISTS complaint_record (
  id INTEGER PRIMARY KEY,
  district TEXT,
  complaint_type TEXT,
  description TEXT,
  related_station_id TEXT,
  process_status TEXT,
  created_at TEXT
);

CREATE TABLE IF NOT EXISTS mitigation_measure (
  id INTEGER PRIMARY KEY,
  district TEXT,
  measure_type TEXT,
  owner_dept TEXT,
  start_date TEXT,
  effect_score TEXT,
  status TEXT
);

CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY,
  actor TEXT,
  action TEXT,
  target_type TEXT,
  target_id TEXT,
  created_at TEXT
);
