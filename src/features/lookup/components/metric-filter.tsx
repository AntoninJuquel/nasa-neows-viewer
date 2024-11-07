import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface MetricFilterProps<T> {
  data: T;
  onValueChange: (value: keyof T) => void;
  value: keyof T;
}

export default function MetricFilter<T extends object>({
  data,
  onValueChange,
  value,
}: MetricFilterProps<T>) {
  return (
    <Select
      onValueChange={(e) => onValueChange(e as keyof T)}
      value={value as string}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Metric" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(data).map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
