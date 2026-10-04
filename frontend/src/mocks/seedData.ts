export const mockData = {
  "monitorStation": [
    {
      "id": 1,
      "station_code": "station code 1",
      "district": "district 1",
      "location_desc": "location desc 1",
      "station_type": "OFFLINE",
      "install_date": "2026-06-11T09:00:00Z",
      "station_status": "OFFLINE"
    },
    {
      "id": 2,
      "station_code": "station code 2",
      "district": "district 2",
      "location_desc": "location desc 2",
      "station_type": "MAINTENANCE",
      "install_date": "2026-06-12T09:00:00Z",
      "station_status": "MAINTENANCE"
    },
    {
      "id": 3,
      "station_code": "station code 3",
      "district": "district 3",
      "location_desc": "location desc 3",
      "station_type": "ABNORMAL",
      "install_date": "2026-06-13T09:00:00Z",
      "station_status": "ONLINE"
    }
  ],
  "noiseReading": [
    {
      "id": 1,
      "station_id": 1,
      "reading_time": "2026-06-11T09:00:00Z",
      "decibel_value": "decibel value 1",
      "frequency_band": "frequency band 1",
      "weather_tag": "weather tag 1",
      "data_quality": "data quality 1"
    },
    {
      "id": 2,
      "station_id": 2,
      "reading_time": "2026-06-12T09:00:00Z",
      "decibel_value": "decibel value 2",
      "frequency_band": "frequency band 2",
      "weather_tag": "weather tag 2",
      "data_quality": "data quality 2"
    },
    {
      "id": 3,
      "station_id": 3,
      "reading_time": "2026-06-13T09:00:00Z",
      "decibel_value": "decibel value 3",
      "frequency_band": "frequency band 3",
      "weather_tag": "weather tag 3",
      "data_quality": "data quality 3"
    }
  ],
  "exceedanceEvent": [
    {
      "id": 1,
      "station_id": 1,
      "start_time": "2026-06-11T09:00:00Z",
      "end_time": "2026-06-11T09:00:00Z",
      "max_decibel": "max decibel 1",
      "exceed_level": "LOW",
      "handled_status": "OFFLINE"
    },
    {
      "id": 2,
      "station_id": 2,
      "start_time": "2026-06-12T09:00:00Z",
      "end_time": "2026-06-12T09:00:00Z",
      "max_decibel": "max decibel 2",
      "exceed_level": "MEDIUM",
      "handled_status": "MAINTENANCE"
    },
    {
      "id": 3,
      "station_id": 3,
      "start_time": "2026-06-13T09:00:00Z",
      "end_time": "2026-06-13T09:00:00Z",
      "max_decibel": "max decibel 3",
      "exceed_level": "HIGH",
      "handled_status": "ONLINE"
    }
  ],
  "complaintRecord": [
    {
      "id": 1,
      "district": "district 1",
      "complaint_type": "OFFLINE",
      "description": "description 1",
      "related_station_id": 1,
      "process_status": "OFFLINE",
      "created_at": "2026-06-11T09:00:00Z"
    },
    {
      "id": 2,
      "district": "district 2",
      "complaint_type": "MAINTENANCE",
      "description": "description 2",
      "related_station_id": 2,
      "process_status": "MAINTENANCE",
      "created_at": "2026-06-12T09:00:00Z"
    },
    {
      "id": 3,
      "district": "district 3",
      "complaint_type": "ABNORMAL",
      "description": "description 3",
      "related_station_id": 3,
      "process_status": "ONLINE",
      "created_at": "2026-06-13T09:00:00Z"
    }
  ],
  "mitigationMeasure": [
    {
      "id": 1,
      "district": "district 1",
      "measure_type": "OFFLINE",
      "owner_dept": "owner dept 1",
      "start_date": "2026-06-11T09:00:00Z",
      "effect_score": "LOW",
      "status": "OFFLINE"
    },
    {
      "id": 2,
      "district": "district 2",
      "measure_type": "MAINTENANCE",
      "owner_dept": "owner dept 2",
      "start_date": "2026-06-12T09:00:00Z",
      "effect_score": "MEDIUM",
      "status": "MAINTENANCE"
    },
    {
      "id": 3,
      "district": "district 3",
      "measure_type": "ABNORMAL",
      "owner_dept": "owner dept 3",
      "start_date": "2026-06-13T09:00:00Z",
      "effect_score": "HIGH",
      "status": "ONLINE"
    }
  ]
} as const;
