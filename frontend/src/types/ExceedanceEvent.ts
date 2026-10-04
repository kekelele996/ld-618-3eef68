export interface ExceedanceEvent {
  id: number;
  station_id: number;
  start_time: string;
  end_time: string;
  max_decibel: string;
  exceed_level: string;
  handled_status: string;
}
