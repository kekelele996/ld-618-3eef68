export interface ComplaintRecord {
  id: number;
  district: string;
  complaint_type: string;
  description: string;
  related_station_id: number;
  process_status: string;
  created_at: string;
}
