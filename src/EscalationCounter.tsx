import Input from "@mui/material/Input";
import { EscalationDie } from "./EscalationDie";

type EscalationCounterProps = {
die: number;
onCountChange: (count: number) => void;
};

export function EscalationCounter({
  die,
  onCountChange
}: EscalationCounterProps)
{
  return (
    <Input
      disableUnderline
      fullWidth
      inputProps={{
        sx: {
          textAlign: "center",
        },
      }}
      value={die}
      onChange={(e) => {
        const newCount = parseFloat(e.target.value);
        onCountChange(newCount);
      }}
    />
    )
}