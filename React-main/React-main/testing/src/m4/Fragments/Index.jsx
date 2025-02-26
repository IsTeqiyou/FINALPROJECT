import Input from "../Component2/input";
import Label from "../Component2/Label";

export default function Form({ ...props }) {
  return (
    <div className="mb-4">
      <Label>{children}</Label>
      <Input {...props} />
    </div>
  );
}
